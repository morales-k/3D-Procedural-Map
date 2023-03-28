import { Scene, PerspectiveCamera, WebGLRenderer, Color, 
ACESFilmicToneMapping, sRGBEncoding, Mesh, 
SphereGeometry, MeshStandardMaterial, PMREMGenerator, FloatType } from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

  let sphereMesh = new Mesh(
    new SphereGeometry(5, 10, 10),
    new MeshStandardMaterial({
      envMap: envmap,
      roughness: 0,
      metalness: 1,
    })
  );
  scene.add(sphereMesh);

  renderer.setAnimationLoop(() => {
    controls.update();
    renderer.render(scene, camera);
  });
}
loop();