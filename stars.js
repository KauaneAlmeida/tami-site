// Configuração básica do Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('universe'), alpha: true });

// Ajustar tamanho ao header
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criar estrelas
const starGeometry = new THREE.BufferGeometry();
const starCount = 10000;
const starPositions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount * 3; i++) {
    starPositions[i] = (Math.random() - 0.5) * 2000;
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.5,
    transparent: true
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Posicionar a câmera
camera.position.z = 800;

// Função de animação
function animateStars() {
    requestAnimationFrame(animateStars);
    stars.rotation.y += 0.0005;
    stars.rotation.x += 0.0002;

    renderer.render(scene, camera);
}

// Ajustar ao redimensionar a tela
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animateStars();


