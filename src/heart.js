import * as THREE from 'three'

export const heartGeometry = (function(){
  // Geometry
  const heartShape = new THREE.Shape();

  heartShape.moveTo( 25, 25 );
  heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
  heartShape.bezierCurveTo( - 30, 0, - 30, 35, - 30, 35 );
  heartShape.bezierCurveTo( - 30, 55, - 10, 77, 25, 95 );
  heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
  heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
  heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );

  const extrudeSettings = { depth: 20, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 2, bevelThickness: 0.5 };
  const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
  return geometry;
})();

export const heartMesh = (function(){
  // Material
  const material = new THREE.MeshBasicMaterial({color: 0xFF1493, wireframe: true})

  // Mesh
  const mesh = new THREE.Mesh( heartGeometry, material);
  mesh.geometry.rotateX(Math.PI)
  mesh.geometry.translate(-25, 100, 0)

  return mesh;
})();


