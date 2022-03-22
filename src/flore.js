import * as THREE from 'three'

const size = {
    width: 500,
    height: 500,
}


export const floreMesh = (function(){
  const floreGeometry = new THREE.PlaneGeometry(size.width, size.height);
  const floreMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
  
  const mesh = new THREE.Mesh( floreGeometry, floreMaterial );
  mesh.geometry.rotateX(-Math.PI/2);
  mesh.position.y = -100;
  
  return mesh;
})() 