import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 1.5, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Controls (NO auto-rotate)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.autoRotate = false; // <–– disabled

// Lighting
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// Load and center model
const loader = new GLTFLoader();
loader.load(
  '/Dispenser.glb',
  (gltf) => {
    const model = gltf.scene;

    // Calculate bounding box and center
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    // Center and normalize model size
    model.position.sub(center); // shifts model to origin
    const maxAxis = Math.max(size.x, size.y, size.z);
    model.scale.multiplyScalar(2 / maxAxis); // normalize to ~2 units

    scene.add(model);

    // Update orbit controls target to model center (now at 0,0,0)
    controls.target.set(0, 0, 0);
    controls.update();

    // Adjust camera to fit view
    camera.lookAt(0, 0, 0);

    console.log('Model loaded and perfectly centered ✅');
  },
  undefined,
  (error) => {
    console.error('Error loading GLB:', error);
  }
);

// Resize handling
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
(function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
})();
