import { PointLight, Color } from "three";

export const createPointLight = () => {
  const light = new PointLight(new Color("#FFCBBE").convertSRGBToLinear(), 80, 200);
  light.position.set(10, 20, 10);
  light.castShadow = true;
  light.shadow.mapSize.width = 512;
  light.shadow.mapSize.height = 512;
  light.shadow.camera.near = 1;
  light.shadow.camera.far = 500;
  
  return light;
};