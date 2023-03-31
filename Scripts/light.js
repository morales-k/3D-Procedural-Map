import { AmbientLight, PointLight, Color } from "three";

export const createAmbientLight = () => {
  const light = new AmbientLight("#d45c1d", 0.4);
  return light;
}

export const createPointLight = () => {
  const light = new PointLight(new Color("#333333").convertSRGBToLinear(), 0.01, 500, 2);
  light.position.set(10, 15, 200);
  light.castShadow = true;
  light.shadow.mapSize.width = 512;
  light.shadow.mapSize.height = 512;
  light.shadow.camera.near = 1;
  light.shadow.camera.far = 500;
  
  return light;
};