import { CylinderGeometry, Mesh, MeshPhysicalMaterial, Vector2 } from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import { createTree, createTrunk } from "./tree";
import { createStone } from "./stone";
import { createNoise2D } from "simplex-noise";

export const createHexGeometry = (height, position) => {
  let hexGeo = new CylinderGeometry(1, 1, height, 6, 1, false);
  hexGeo.translate(position.x, height * 0.5, position.y);

  return hexGeo;
};

export const createHexMesh = (envmap, hexGeo, texture) => {
    let mat = new MeshPhysicalMaterial({
    envMap: envmap,
    envMapIntensity: 0.5,
    flatShading: true,
    map: texture,
  });

  let mesh = new Mesh(hexGeo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  return mesh;
};

export const addHexes = (maxHeight, textureGeos) => {
  const noise2d = createNoise2D();

  // Start i & j from negative values for full circular map.
  for (let i = -10; i < 12; i++) {
    for (let j = -10; j < 12; j++) {
      let position = tileToPosition(i, j);

      // Skip tiles where position length > 16 to make map appear circular.
      if (position.length() > 16) {
        continue;
      }

      // Noise will be a number between 0 and 1.
      let noise = (noise2d(i * 0.1, j * 0.1) + 1) * 0.5;
      noise = Math.pow(noise, 1.5);

      addHexTexture(noise * maxHeight, position, maxHeight, textureGeos);
    }
  }
};

function tileToPosition(tileX, tileY) {
  // If tileY % 2 returns an odd number, hexagon becomes offset.
  return new Vector2((tileX + (tileY % 2) * 0.5) * 1.75, tileY * 1.55);
};

function addHexTexture(height, position, maxHeight, textureGeos) {
  let hexGeo = createHexGeometry(height, position);
  
  const stoneHeight = maxHeight * 0.8;
  const dirtHeight = maxHeight * 0.7;
  const grassHeight = maxHeight * 0.5;
  const sandHeight = maxHeight * 0.3;
  const clayHeight = maxHeight * 0;

  if (height > stoneHeight) {
    textureGeos.stone = mergeBufferGeometries([hexGeo, textureGeos.stone]);

    if (Math.random() > 0.8) {
      textureGeos.stone = mergeBufferGeometries([textureGeos.stone, createStone(height, position)]);
    }
  } else if (height > dirtHeight) {
      textureGeos.dirt = mergeBufferGeometries([hexGeo, textureGeos.dirt]);

    if (Math.random() > 0.8) {
      textureGeos.stone = mergeBufferGeometries([textureGeos.stone, createStone(height, position)]);
    }
  } else if (height > grassHeight) {
      textureGeos.grass = mergeBufferGeometries([hexGeo, textureGeos.grass]);

    if (Math.random() > 0.8) {
      textureGeos.clay = mergeBufferGeometries([textureGeos.clay, createTrunk(height, position)]);
      textureGeos.grass = mergeBufferGeometries([textureGeos.grass, createTree(height, position)]);
    }
  } else if (height > sandHeight) {
      textureGeos.sand = mergeBufferGeometries([hexGeo, textureGeos.sand]);
  } else if (height > clayHeight) {
      textureGeos.clay = mergeBufferGeometries([hexGeo, textureGeos.clay]);
  }
};