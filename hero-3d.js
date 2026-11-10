// Logo « HJ. » en vrai 3D (WebGL / Three.js) dans l'accueil.
// Si WebGL ou le chargement de Three.js échoue, la scène CSS reste affichée.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const host = document.querySelector('.hero-orbit');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const supportsWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch (_) {
    return false;
  }
};

if (host && supportsWebGL()) {
  const canvas = document.createElement('canvas');
  canvas.className = 'hero-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  host.prepend(canvas);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 9);

  // --- Lettres H et J extrudées ---
  const h = new THREE.Shape();
  [[0, 0], [0.3, 0], [0.3, 0.55], [0.7, 0.55], [0.7, 0], [1, 0], [1, 1.4], [0.7, 1.4], [0.7, 0.85], [0.3, 0.85], [0.3, 1.4], [0, 1.4]]
    .forEach(([x, y], i) => (i ? h.lineTo(x, y) : h.moveTo(x, y)));

  const j = new THREE.Shape();
  j.moveTo(0.55, 1.4);
  j.lineTo(0.85, 1.4);
  j.lineTo(0.85, 0.35);
  j.absarc(0.35, 0.35, 0.5, 0, -Math.PI, true);
  j.lineTo(0.15, 0.35);
  j.absarc(0.35, 0.35, 0.2, Math.PI, Math.PI * 2, false);
  j.lineTo(0.55, 1.4);

  const extrude = { depth: 0.42, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 6, curveSegments: 32 };
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x0ea5e9, metalness: 0.25, roughness: 0.14, clearcoat: 1, clearcoatRoughness: 0.08,
    iridescence: 0.25, sheen: 0.25, sheenColor: new THREE.Color(0xe0f2fe),
  });
  const deep = new THREE.MeshPhysicalMaterial({ color: 0x0284c7, metalness: 0.2, roughness: 0.2, clearcoat: 1 });

  const logo = new THREE.Group();
  const hMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(h, extrude), [glass, deep]);
  const jMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(j, extrude), [glass, deep]);
  jMesh.position.x = 1.12;
  const dot = new THREE.Mesh(
    new THREE.SphereGeometry(0.17, 48, 48),
    new THREE.MeshPhysicalMaterial({ color: 0xbae6fd, emissive: 0x38bdf8, emissiveIntensity: 0.6, roughness: 0.2, clearcoat: 1 }),
  );
  dot.position.set(2.2, 0.17, 0.21);
  logo.add(hMesh, jMesh, dot);
  logo.position.set(-1.19, -0.62, -0.21); // centre le logo
  const logoPivot = new THREE.Group();
  logoPivot.add(logo);
  logoPivot.scale.setScalar(1.05);
  scene.add(logoPivot);

  // --- Anneaux en orbite ---
  const ringMaterial = (color) => new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.75 });
  const rings = [
    { radius: 2.35, tilt: [1.2, 0.2, 0], speed: 0.35, color: 0x7dd3fc },
    { radius: 2.75, tilt: [1.35, -0.45, 0.3], speed: -0.22, color: 0x38bdf8 },
    { radius: 2.0, tilt: [1.05, 0.6, -0.2], speed: 0.5, color: 0xe0f2fe },
  ].map(({ radius, tilt, speed, color }) => {
    const pivot = new THREE.Group();
    pivot.rotation.set(...tilt);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.012, 12, 160), ringMaterial(color));
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: color, emissiveIntensity: 2 }),
    );
    moon.position.x = radius;
    const spinner = new THREE.Group();
    spinner.add(moon);
    pivot.add(ring, spinner);
    scene.add(pivot);
    return { spinner, speed };
  });

  // --- Petits volumes flottants ---
  const floaters = [
    { geo: new THREE.IcosahedronGeometry(0.3, 0), pos: [2.3, 1.75, -0.6] },
    { geo: new THREE.OctahedronGeometry(0.24, 0), pos: [-2.4, -1.6, 0.2] },
    { geo: new THREE.TorusKnotGeometry(0.16, 0.055, 90, 12), pos: [-2.25, 1.55, -0.4] },
    { geo: new THREE.BoxGeometry(0.32, 0.32, 0.32), pos: [2.1, -1.7, 0.3] },
  ].map(({ geo, pos }, i) => {
    const mesh = new THREE.Mesh(geo, i % 2 ? deep : glass);
    mesh.position.set(...pos);
    scene.add(mesh);
    return { mesh, base: pos[1], phase: i * 1.7 };
  });

  // --- Poussière d'étoiles ---
  const count = 260;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const r = 3 + Math.random() * 3.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions.set([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta) * 0.7, r * Math.cos(phi) - 2], i * 3);
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xbae6fd, size: 0.035, transparent: true, opacity: 0.8 }));
  scene.add(stars);

  // --- Lumières ---
  scene.add(new THREE.AmbientLight(0xbae6fd, 0.4));
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(3, 4, 5);
  const rim = new THREE.PointLight(0x38bdf8, 18, 12);
  rim.position.set(-3, -1, 2.5);
  const back = new THREE.PointLight(0x7dd3fc, 14, 12);
  back.position.set(2, 1, -3);
  scene.add(key, rim, back);

  // --- Interaction et animation ---
  const pointer = { x: 0, y: 0 };
  window.addEventListener('pointermove', (event) => {
    pointer.x = event.clientX / window.innerWidth - 0.5;
    pointer.y = event.clientY / window.innerHeight - 0.5;
  }, { passive: true });

  const resize = () => {
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(canvas);
  resize();

  const clock = new THREE.Clock();
  const render = () => {
    const t = clock.getElapsedTime();
    logoPivot.rotation.y += ((pointer.x * 0.9 + Math.sin(t * 0.5) * 0.25) - logoPivot.rotation.y) * 0.06;
    logoPivot.rotation.x += ((pointer.y * 0.5 - 0.08) - logoPivot.rotation.x) * 0.06;
    logoPivot.position.y = Math.sin(t * 1.1) * 0.08;
    rings.forEach(({ spinner, speed }) => { spinner.rotation.z = t * speed * 2; });
    floaters.forEach(({ mesh, base, phase }) => {
      mesh.rotation.x = t * 0.6 + phase;
      mesh.rotation.y = t * 0.8 + phase;
      mesh.position.y = base + Math.sin(t + phase) * 0.12;
    });
    stars.rotation.y = t * 0.03;
    renderer.render(scene, camera);
  };

  let visible = true;
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }).observe(host);
  const loop = () => {
    if (visible) render();
    requestAnimationFrame(loop);
  };

  if (reduceMotion) render();
  else loop();
  host.classList.add('has-webgl');
}
