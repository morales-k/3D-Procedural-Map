import { SphereGeometry } from "three";

export const createStone = (height, position) => {
  const px = Math.random() * 0.04;
  const pz = Math.random() * 0.04;

  // Stone will have radius from 0.1-0.4.
  const geo = new SphereGeometry(Math.random() * 0.3 + 0.1, 7, 7);
  geo.translate(position.x + px, height, position.y + pz);

  return geo;
};