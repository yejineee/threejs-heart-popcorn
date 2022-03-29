import './style.css'
import * as THREE from 'three'
import * as dat from 'dat.gui'
import {heartMesh} from './heart';
import {floreMesh} from './flore'
import {OrbitControls} from './example/jsm/controls/OrbitControls'

// Canvas
const canvas = document.querySelector('#webgl')

// Scene
const scene = new THREE.Scene()



// Mesh
scene.add(floreMesh);
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

const controls = new OrbitControls(camera, canvas);
controls.update();




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
const clock = new THREE.Clock()

const tick = () =>
{
    controls.update();

    // Update objects
    const elapsedTime = clock.getElapsedTime()
    heartMesh.rotation.x = 1.3 * elapsedTime
    heartMesh.rotation.y = 1.5 * elapsedTime
    heartMesh.rotation.z = 1.2 * elapsedTime
    
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

/**
 * gui
 */

// Debug
const gui = new dat.GUI()

const cameraGUI = gui.addFolder('Camera');
const options = {min:-500, max: 500, step: 20};
cameraGUI.add(camera.position, 'x', ...Object.values(options));
cameraGUI.add(camera.position, 'y', ...Object.values(options));
cameraGUI.add(camera.position, 'z', ...Object.values(options));
cameraGUI.open();

const heartGUI = gui.addFolder('Heart');
heartGUI.add(heartMesh.material, 'wireframe')
heartGUI.open();
