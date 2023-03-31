import { SphereGeometry } from "three";

export const createStone = (height, position) => {
  const px = Math.random() * 0.04;
  const pz = Math.random() * 0.04;

  const geo = new SphereGeometry(Math.random() * 0.4 + 0.1, 5, 5);
  geo.translate(position.x + px, height, position.y + pz);

  return geo;
};