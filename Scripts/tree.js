import { CylinderGeometry } from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

export const createTree = (height, position) => {
  const treeHeight = Math.random() * 1 + 1.25;

  const geo = new CylinderGeometry(0, 1.5, treeHeight, 6);
  geo.translate(position.x, height + treeHeight * 0.2 + 1, position.y);

  const geo2 = new CylinderGeometry(0, 1.15, treeHeight, 6);
  geo2.translate(position.x, height + treeHeight * 0.7 + 1, position.y);

  const geo3 = new CylinderGeometry(0, 0.8, treeHeight, 6);
  geo3.translate(position.x, height + treeHeight * 1.2 + 1, position.y);

  return mergeBufferGeometries([geo, geo2, geo3]);
};

export const createTrunk = (height, position) => {
  const trunk = new CylinderGeometry(0.3, 0.3, 4);
  trunk.translate(position.x, height, position.y);

  return trunk;
};