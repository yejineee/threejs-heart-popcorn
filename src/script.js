import './style.css'
import * as THREE from 'three'
import * as dat from 'dat.gui'

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('#webgl')

// Scene
const scene = new THREE.Scene()

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

// Material
const material = new THREE.MeshBasicMaterial({color: 0xFF1493, wireframe: true})

// Mesh
const heartMesh = new THREE.Mesh( geometry, material);
heartMesh.geometry.rotateX(Math.PI)
heartMesh.geometry.translate(-25, 100, 0)
scene.add(heartMesh)

// Lights
const light = new THREE.PointLight(0xffffff, 0.2, 100);
light.position.set(0, 0, 0);
scene.add(light);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// TODO : 반응형으로 만들기

/**
 * Camera
 */

const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(60, aspectRatio, 1, 2000);
camera.position.set(0,150,200);
camera.lookAt(new THREE.Vector3(0,0,0));  
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const tick = () =>
{
    // TODO : 회전하게 만들기

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

/**
 * Helper
 */
const axesHelper = new THREE.AxesHelper( 1000 );
scene.add( axesHelper );
