import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import { render } from '@testing-library/react';

let camera, scene, renderer;
let geometry, material, mesh;

const loader = new GLTFLoader();

export function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 5;
    camera.rotation.z = 1;
    const light = new THREE.AmbientLight(0xffffff, 2);


    scene = new THREE.Scene();
    scene.add(light);

    loader.load("/models/drone/scene.gltf", (gltf) => {
        let model = gltf.scene;
        model.scale.set(0.45, 0.45, 0.45);

        gsap.to(camera.position, {
            ease: "back.out(1.7)",
            z: 1,
            duration: 1
        });

        gsap.to(camera.rotation, {
            z: 0,
            duration: 1
        });

        gsap.to(model.rotation, {
            x: 1,
            duration: 1,
            delay: 1
        });

        gsap.to(model.rotation, {
            y: Math.PI * 1.75,
            duration: 2,
            delay: 1
        });

        gsap.to(model.scale, {
            duration: 1,
            delay: 1,
            x: .25,
            y: .25,
            z: .25
        });

        gsap.to(model.position, {
            delay: 1,
            duration: 1,
            x: .35,
            y: .3
        });

        scene.add(model);
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    renderer.setClearColor(0x272727, 1);
    document.body.appendChild(renderer.domElement);
    window.addEventListener('resize', ()=>{
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    })
}

function animation() {


    renderer.render(scene, camera);

}
