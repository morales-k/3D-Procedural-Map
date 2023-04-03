import { Scene, PerspectiveCamera, WebGLRenderer, Color, 
ACESFilmicToneMapping, sRGBEncoding, PMREMGenerator, 
FloatType, BoxGeometry, TextureLoader, PCFShadowMap } from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createClouds } from "./clouds";
import { createWater } from "./water";
import { createMapEdge, createMapFloor } from "./map";
import { createHexMesh, addHexes } from "./hex";
import { createAmbientLight, createPointLight } from "./light";
import { gsap } from "gsap";

const scene = new Scene();
const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
const renderer = new WebGLRenderer({ antialias: true });
const controls = new OrbitControls(camera, renderer.domElement);
const newWorldBtn = document.querySelector("#newWorldBtn");
controls.target.set(0, 0, 0);
controls.dampingFactor = 0.02;
controls.enableDamping = true;

scene.background = new Color("#AECFE6");
camera.position.set(25, 20, calculateCameraZ(window.innerWidth));

renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputEncoding = sRGBEncoding;
renderer.physicallyCorrectLights = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFShadowMap;

document.body.appendChild(renderer.domElement);

const handleResize = () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  
  camera.updateProjectionMatrix();
  camera.aspect = (width / height);
  renderer.setSize(width, height);
  camera.position.set(25, 20, calculateCameraZ(width));
};

function calculateCameraZ(width) {
  let z = width < 800 ? 90 :
          width < 900 ? 70 : 50;

  return z;
};

const loop = async () => {
  // Process enviornment map
  let pmrem = new PMREMGenerator(renderer);
  let envmapTexture = await new RGBELoader().setDataType(FloatType).loadAsync("assets/envmap.hdr");
  let envmap = pmrem.fromEquirectangular(envmapTexture).texture;
  const maxHeight = 10;
  let textures = {
    dirt: await new TextureLoader().loadAsync("assets/dirt.jpg"),
    clay: await new TextureLoader().loadAsync("assets/clay.jpg"),
    grass: await new TextureLoader().loadAsync("assets/grass.png"),
    bark: await new TextureLoader().loadAsync("assets/bark.png"),
    leaves: await new TextureLoader().loadAsync("assets/leaves.jpg"),
    sand: await new TextureLoader().loadAsync("assets/sand.jpg"),
    stone: await new TextureLoader().loadAsync("assets/stone.png"),
    water: await new TextureLoader().loadAsync("assets/water.png"),
  };
  let textureGeos = {
    dirt: new BoxGeometry(0, 0, 0),
    clay: new BoxGeometry(0, 0, 0),
    grass: new BoxGeometry(0, 0, 0),
    bark: new BoxGeometry(0, 0, 0),
    leaves: new BoxGeometry(0, 0, 0),
    sand: new BoxGeometry(0, 0, 0),
    stone: new BoxGeometry(0, 0, 0)
  };

  addHexes(maxHeight, textureGeos);

  let dirtMesh = createHexMesh(envmap, textureGeos.dirt, textures.dirt);
  let clayMesh = createHexMesh(envmap, textureGeos.clay, textures.clay);
  let grassMesh = createHexMesh(envmap, textureGeos.grass, textures.grass);
  let barkMesh = createHexMesh(envmap, textureGeos.bark, textures.bark);
  let leavesMesh = createHexMesh(envmap, textureGeos.leaves, textures.leaves);
  let sandMesh = createHexMesh(envmap, textureGeos.sand, textures.sand);
  let stoneMesh = createHexMesh(envmap, textureGeos.stone, textures.stone);

  const mapEdge = createMapEdge(envmap, textures.dirt, maxHeight);
  const mapFloor = createMapFloor(envmap, textures.clay, maxHeight);
  const water = createWater(envmap, textures.water, maxHeight);
  const clouds = createClouds(envmap);
  const ambientLight = createAmbientLight();
  const pointLight = createPointLight();

  scene.add(dirtMesh, clayMesh, grassMesh, barkMesh, 
    leavesMesh, sandMesh, stoneMesh, mapEdge, 
    mapFloor, water, clouds, ambientLight, 
    pointLight);

  // Scale in water, then trees and clouds.
  const tl = gsap.timeline({defaults: {duration: 1}});
  tl.fromTo(water.scale, {z: 0, x: 0, y: 0}, {z: 1, x: 1, y: 1});
  tl.fromTo([barkMesh.scale, leavesMesh.scale], {y: 0}, {y: 1});
  tl.fromTo(clouds.scale, {z: 0, x: 0, y: 2}, {z: 1, x: 1, y: 1});

  renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
  });

  // Allow loop to complete once before enabling.
  newWorldBtn.disabled = false;
}
loop();

// Set up event listener for New World button.
newWorldBtn.addEventListener("click", async (e) => {
  // Disable the button after click, to prevent duplicate renders.
  e.target.disabled = true;
  clearScene();
  loop();
});

// Set event listener for resizing window.
window.addEventListener("resize", async () => {
  handleResize();
});

// Clears renderer and scene.
const clearScene = async () => {
  renderer.setAnimationLoop(null);
  renderer.renderLists.dispose();
  await scene.remove.apply(scene, scene.children);
};