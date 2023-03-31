import { SphereGeometry, MeshStandardMaterial, Mesh } from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

export function createClouds(envmap) {
  let geo = new SphereGeometry(0, 0, 0); 
  let count = Math.floor(Math.pow(Math.random(), 0.45) * 6);

  for(let i = 0; i < count; i++) {
    const puff1 = new SphereGeometry(1, 11, 11);
    const puff2 = new SphereGeometry(1.4, 11, 11);
    const puff3 = new SphereGeometry(0.9, 11, 11);
   
    puff1.translate(-1.50, Math.random() * 0.3, 0);
    puff2.translate(0, Math.random() * 0.3 + 0.1, 0);
    puff3.translate(1.60,  Math.random() * 0.3, 0);

    const cloudGeo = mergeBufferGeometries([puff1, puff2, puff3]);
    cloudGeo.translate( 
      Math.random() * 20 - 10, 
      Math.random() * 10 + 11, 
      Math.random() * 20 - 10
    );
    cloudGeo.rotateY(Math.random() * Math.PI * 2);

    geo = mergeBufferGeometries([geo, cloudGeo]);
  }
  
  const mesh = new Mesh(
    geo,
    new MeshStandardMaterial({
      envMap: envmap, 
      envMapIntensity: 0.75, 
      flatShading: true,
    })
  );

  return mesh;
}