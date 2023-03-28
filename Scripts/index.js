import { Scene, PerspectiveCamera, WebGLRenderer, Color, 
ACESFilmicToneMapping, sRGBEncoding, Mesh, 
SphereGeometry, MeshBasicMaterial } from "three";

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

let sphereMesh = new Mesh(
  new SphereGeometry(5, 10, 10),
  new MeshBasicMaterial({ color: 0xff0000})
);
scene.add(sphereMesh);

const loop = async () => {
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
}
loop();