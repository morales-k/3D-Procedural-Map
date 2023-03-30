import { AmbientLight, PointLight, Color } from "three";

export const createAmbientLight = () => {
  const light = new AmbientLight("#d45c1d", 0.2);
  return light;
}

export const createPointLight = () => {
  const light = new PointLight(new Color("#f2f2f2").convertSRGBToLinear(), 0.3, 500, 50);
  light.position.set(10, 20, 100);
  light.castShadow = true;
  light.shadow.mapSize.width = 512;
  light.shadow.mapSize.height = 512;
  light.shadow.camera.near = 1;
  light.shadow.camera.far = 500;
  
  return light;
};