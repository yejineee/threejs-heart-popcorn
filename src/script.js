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
const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );

// Materials

const material = new THREE.MeshBasicMaterial()
material.color = new THREE.Color(0xff0000)

// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere)

// Lights
// TODO : Light 추가하기

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
camera.position.z = 5;
camera.lookAt(new THREE.Vector3(0,0,0));  
scene.add(camera);

/**
 * Rendererㄴ
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

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()