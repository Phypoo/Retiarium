// IMPORTS

import '/style.css';
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// CANVAS

const canvas = document.querySelector('canvas.webgl');

// SCENE

const scene = new THREE.Scene();