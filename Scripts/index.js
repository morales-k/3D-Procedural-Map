import { Scene, PerspectiveCamera, WebGLRenderer, Color, 
ACESFilmicToneMapping, sRGBEncoding, Mesh, 
SphereGeometry, MeshStandardMaterial, PMREMGenerator, 
FloatType, BoxGeometry, Vector2, CylinderGeometry } from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

const scene = new Scene();
const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new WebGLRenderer({ antialias: true });

scene.background = new Color("#FFEECC");
// camera.position.set(-17, 31, 33);
camera.position.set(0, 0, 50);
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputEncoding = sRGBEncoding;
renderer.physicallyCorrectLights = true;

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.dampingFactor = 0.05;
controls.enableDamping = true;

let envmap;

const loop = async () => {
  // Process enviornment map
  let pmrem = new PMREMGenerator(renderer);
  let envmapTexture = await new RGBELoader().setDataType(FloatType).loadAsync("assets/envmap.hdr");
  envmap = pmrem.fromEquirectangular(envmapTexture).texture;

  makeHex(3, new Vector2(0, 0));
  let hexagonMesh = new Mesh(
    hexagonGeomerties,
    new MeshStandardMaterial({
      envMap: envmap,
      flatShading: true,
    })
  );
  scene.add(hexagonMesh);

  renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
  });
}
loop();

let hexagonGeomerties = new BoxGeometry(0, 0, 0);

function hexGeometry(height, position) {
  let geo = new CylinderGeometry(1, 1, height, 6, 1, false);
  geo.translate(position.x, height * 0.5, position.y);

  return geo;
};

function makeHex(height, position) {
  let geo = hexGeometry(height, position);
  hexagonGeomerties = mergeBufferGeometries([hexagonGeomerties, geo]);
};