import { Scene, PerspectiveCamera, WebGLRenderer, Color, 
ACESFilmicToneMapping, sRGBEncoding, Mesh, PMREMGenerator, 
FloatType, BoxGeometry, Vector2, CylinderGeometry, 
MeshPhysicalMaterial, TextureLoader, PCFShadowMap, PointLight, 
DoubleSide, SphereGeometry, MeshStandardMaterial } from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import { createNoise2D } from "simplex-noise";

const scene = new Scene();
const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new WebGLRenderer({ antialias: true });

scene.background = new Color("#FFEECC");
camera.position.set(-17, 31, 33);
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputEncoding = sRGBEncoding;
renderer.physicallyCorrectLights = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFShadowMap;

document.body.appendChild(renderer.domElement);

const light = new PointLight(new Color("#FFCBBE").convertSRGBToLinear(), 80, 200);
light.position.set(10, 20, 10);
light.castShadow = true;
light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.camera.near = 1;
light.shadow.camera.far = 500;
scene.add(light);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.dampingFactor = 0.05;
controls.enableDamping = true;

let envmap;
const maxHeight = 10;
const stoneHeight = maxHeight * 0.8;
const dirtHeight = maxHeight * 0.7;
const grassHeight = maxHeight * 0.5;
const sandHeight = maxHeight * 0.3;
const dirt2Height = maxHeight * 0;

const loop = async () => {
  // Process enviornment map
  let pmrem = new PMREMGenerator(renderer);
  let envmapTexture = await new RGBELoader().setDataType(FloatType).loadAsync("assets/envmap.hdr");
  envmap = pmrem.fromEquirectangular(envmapTexture).texture;

  let textures = {
    dirt: await new TextureLoader().loadAsync("assets/dirt.jpg"),
    dirt2: await new TextureLoader().loadAsync("assets/dirt2.jpg"),
    grass: await new TextureLoader().loadAsync("assets/grass.png"),
    sand: await new TextureLoader().loadAsync("assets/sand.jpg"),
    stone: await new TextureLoader().loadAsync("assets/stone.png"),
    water: await new TextureLoader().loadAsync("assets/water.png"),
  };

  const noise2d = createNoise2D();

  // Start i & j from negative values for full circular map.
  for (let i = -10; i < 12; i++) {
    for (let j = -10; j < 12; j++) {
      let position = tileToPosition(i, j);

      // Skip tiles where position length > 16 to make map appear circular.
      if (position.length() > 16) {
        continue;
      }

      // Noise will be a number between 0 and 1.
      let noise = (noise2d(i * 0.1, j * 0.1) + 1) * 0.5;
      noise = Math.pow(noise, 1.5);

      makeHex(noise * maxHeight, position);
    }
  }

  let dirtMesh = hexMesh(dirtGeo, textures.dirt);
  let dirt2Mesh = hexMesh(dirt2Geo, textures.dirt2);
  let grassMesh = hexMesh(grassGeo, textures.grass);
  let sandMesh = hexMesh(sandGeo, textures.sand);
  let stoneMesh = hexMesh(stoneGeo, textures.stone);
  scene.add(dirtMesh, dirt2Mesh, grassMesh, sandMesh, stoneMesh);

  let seaMesh = new Mesh(
    new CylinderGeometry(17, 17, maxHeight * 0.2, 50),
    new MeshPhysicalMaterial({
      envMap: envmap,
      color: new Color("#55AAFF").convertSRGBToLinear().multiplyScalar(3),
      ior: 1.1, // Index of refraction
      transmission: 1,
      transparent: true,
      thickness: 1,
      envMapIntensity: 0.2,
      roughness: 0.7,
      metalness: 0.025,
      roughnessMap: textures.water,
      metalnessMap: textures.water
    })
  );
  seaMesh.receiveShadow = true;
  seaMesh.position.set(0, maxHeight * 0.1, 0);
  scene.add(seaMesh);

  let mapContainer = new Mesh(
    new CylinderGeometry(17.1, 17.1, maxHeight * 0.25, 50, 1, true),
    new MeshPhysicalMaterial({
      envMap: envmap,
      map: textures.dirt,
      envMapIntensity: 0.2,
      side: DoubleSide,
    })
  );
  mapContainer.receiveShadow = true;
  mapContainer.position.set(0, maxHeight * 0.125, 0);
  scene.add(mapContainer);

  let mapFloor = new Mesh(
    new CylinderGeometry(18.5, 18.5, maxHeight * 0.1, 50),
    new MeshPhysicalMaterial({
      envMap: envmap,
      map: textures.dirt2,
      envMapIntensity: 0.1,
      side: DoubleSide,
    })
  );
  mapFloor.receiveShadow = true;
  mapFloor.position.set(0, -maxHeight * 0.05, 0);
  scene.add(mapFloor);
  clouds();

  renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
  });
}
loop();

function tileToPosition(tileX, tileY) {
  // If tileY % 2 returns an odd number, hexagon becomes offset.
  return new Vector2((tileX + (tileY % 2) * 0.5) * 1.75, tileY * 1.55);
};

let dirtGeo = new BoxGeometry(0, 0, 0);
let dirt2Geo = new BoxGeometry(0, 0, 0);
let grassGeo = new BoxGeometry(0, 0, 0);
let sandGeo = new BoxGeometry(0, 0, 0);
let stoneGeo = new BoxGeometry(0, 0, 0);

function hexGeometry(height, position) {
  let geo = new CylinderGeometry(1, 1, height, 6, 1, false);
  geo.translate(position.x, height * 0.5, position.y);

  return geo;
};

function makeHex(height, position) {
  let geo = hexGeometry(height, position);

  if (height > stoneHeight) {
    stoneGeo = mergeBufferGeometries([geo, stoneGeo]);

    if (Math.random() > 0.8) {
      stoneGeo = mergeBufferGeometries([stoneGeo, stone(height, position)]);
    }
  } else if (height > dirtHeight) {
    dirtGeo = mergeBufferGeometries([geo, dirtGeo]);

    if (Math.random() > 0.8) {
      stoneGeo = mergeBufferGeometries([stoneGeo, stone(height, position)]);
    }
  } else if (height > grassHeight) {
    grassGeo = mergeBufferGeometries([geo, grassGeo]);

    if (Math.random() > 0.8) {
      grassGeo = mergeBufferGeometries([grassGeo, tree(height, position)]);
    }
  } else if (height > sandHeight) {
    sandGeo = mergeBufferGeometries([geo, sandGeo]);
  } else if (height > dirt2Height) {
    dirt2Geo = mergeBufferGeometries([geo, dirt2Geo]);
  }
};

function hexMesh(geo, map) {
  let mat = new MeshPhysicalMaterial({
    envMap: envmap,
    envMapIntensity: 0.5,
    flatShading: true,
    map
  });

  let mesh = new Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  return mesh;
};

function stone(height, position) {
  const px = Math.random() * 0.04;
  const pz = Math.random() * 0.04;

  // Stone will have radius from 0.1-0.4.
  const geo = new SphereGeometry(Math.random() * 0.3 + 0.1, 7, 7);
  geo.translate(position.x + px, height, position.y + pz);

  return geo;
};

function tree(height, position) {
  const treeHeight = Math.random() * 1 + 1.25;
  const geo = new CylinderGeometry(0, 1.5, treeHeight, 3);
  geo.translate(position.x, height + treeHeight * 0 + 1, position.y);

  const geo2 = new CylinderGeometry(0, 1.15, treeHeight, 3);
  geo2.translate(position.x, height + treeHeight * 0.6 + 1, position.y);

  const geo3 = new CylinderGeometry(0, 0.8, treeHeight, 3);
  geo3.translate(position.x, height + treeHeight * 1.25 + 1, position.y);

  return mergeBufferGeometries([geo, geo2, geo3]);
};

function clouds() {
  let geo = new SphereGeometry(0, 0, 0); 
  let count = Math.floor(Math.pow(Math.random(), 0.45) * 4);

  for(let i = 0; i < count; i++) {
    const puff1 = new SphereGeometry(1.2, 7, 7);
    const puff2 = new SphereGeometry(1.5, 7, 7);
    const puff3 = new SphereGeometry(0.9, 7, 7);
   
    puff1.translate(-1.85, Math.random() * 0.3, 0);
    puff2.translate(0, Math.random() * 0.3, 0);
    puff3.translate(1.85,  Math.random() * 0.3, 0);

    const cloudGeo = mergeBufferGeometries([puff1, puff2, puff3]);
    cloudGeo.translate( 
      Math.random() * 20 - 10, 
      Math.random() * 7 + 7, 
      Math.random() * 20 - 10
    );
    cloudGeo.rotateY(Math.random() * Math.PI * 2);

    geo = mergeBufferGeometries([geo, cloudGeo]);
  }
  
  const mesh = new Mesh(
    geo,
    new MeshStandardMaterial({
      envMap: envmap, 
      envMapIntensity: 0.75, 
      flatShading: true,
    })
  );

  scene.add(mesh);
}