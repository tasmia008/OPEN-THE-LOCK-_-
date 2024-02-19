import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import nightSky from '../image/stars.jpg';
import day from '../image/moon2.jpg';
import key from '../image/key2.png';
import key2 from '../image/key.png';
import key3 from '../image/key2.jpg';
import gold from '../image/lok.png';
import silver from '../image/silver.png';
import mat from '../image/mat.jpg';



const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled=true;
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
 );
//renderer.setClearColor(0xA3A3A3);
//renderer.setClearColor(0xFFEA00);

/////////////Background//////////////////
const textureLoader = new THREE.TextureLoader();
//scene.background = textureLoader.load(day);
const cubeTextureloader = new THREE.CubeTextureLoader();
scene.background = cubeTextureloader.load([
  nightSky,
  nightSky,
  nightSky,
  nightSky,
  day,
  nightSky
])

/////////////////////////////////////////

const orbit =  new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
//scene.add(axesHelper);

camera.position.set(06,60,0);
orbit.update();

/*const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color:0x00ff00});
const box = new THREE.Mesh(boxGeometry,boxMaterial);
scene.add(box);*/

//////////////////plane/////////////////////
const planeGeometry = new THREE.PlaneGeometry(30,30);
const faces12 = [
  new THREE.MeshStandardMaterial({map: textureLoader.load(gold)}),
  new THREE.MeshStandardMaterial({map: textureLoader.load(gold)}),
  new THREE.MeshStandardMaterial({map: textureLoader.load(mat)}),
  new THREE.MeshStandardMaterial({map: textureLoader.load(mat)}),
  new THREE.MeshStandardMaterial({map: textureLoader.load(gold)}),
  new THREE.MeshStandardMaterial({map: textureLoader.load(gold)})
];
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide ,
    map: textureLoader.load(mat)
});
const plane = new THREE.Mesh(planeGeometry,planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5*Math.PI;
plane.receiveShadow = true;

const gridHelper = new THREE.GridHelper(30);
//scene.add(gridHelper);
//////////////////////////////////////////////////////

/////////////////////Light//////////////////////////////
const ambLight = new THREE.AmbientLight(0xededed, 0.4);
scene.add(ambLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF,0.8);
scene.add(directionalLight);
directionalLight.position.set(20,50,70);
directionalLight.castShadow=true;
directionalLight.shadow.camera.left=-22;
directionalLight.shadow.camera.bottom=-12;
directionalLight.shadow.camera.top=12;
directionalLight.shadow.camera.right=22;


const dlightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
//scene.add(dlightHelper);

const dcameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
//scene.add(dcameraHelper);
//////////////////////////////////////////////////////////////

///////////////////////////////Lock/////////////////////////////
const length = 6, width = 1.5;
const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 2,
	depth: 8,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshStandardMaterial( { 
  //color: 0x5A5A5A ,
  map: textureLoader.load(gold)
} );
const mesh = new THREE.Mesh( geometry, material ) ;
mesh.position.set(0,3,0);
scene.add( mesh );
mesh.castShadow=true;


const geometry2 = new THREE.TorusGeometry( 4, 0.8, 16, 100, 3.39 );
const material2 = new THREE.MeshPhongMaterial( { 
  color: 0xC0C0C0,
  shininess:100
  //map: textureLoader.load(silver)
} );
const torus = new THREE.Mesh( geometry2, material2 );
scene.add( torus );
torus.castShadow=true;
torus.position.set(-1,4,4);
torus.rotation.x = 1.6;
torus.rotation.y = 0;
torus.rotation.z = 1.4;
///////////////////////////////////////////////////////////////////////

////////////////////////// Key ///////////////////////////////////////////
const geometry3 = new THREE.BoxGeometry( 6, 0.5, 3 );
const material3 = new THREE.MeshBasicMaterial( {
  //color: 0x00ffff
} );
const faces = [
  new THREE.MeshBasicMaterial({map: textureLoader.load(gold)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(gold)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(key)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(key)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(gold)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(gold)})
];
const cube = new THREE.Mesh( geometry3, faces );
scene.add( cube );
cube.position.set(0,4,-10);
cube.castShadow=true;


////////////////////////////////////////////////////////////////////////

////////////////////////// Key ///////////////////////////////////////////
const geometry4 = new THREE.BoxGeometry( 6, 0.5, 3 );
const material4 = new THREE.MeshBasicMaterial( {
  //color: 0x00ffff
} );
const faces2 = [
  new THREE.MeshBasicMaterial({map: textureLoader.load(silver)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(silver)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(key2)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(key2)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(silver)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(silver)})
];
const cube2 = new THREE.Mesh( geometry4, faces2 );
scene.add( cube2 );
cube2.position.set(8,4,-10);
cube2.castShadow=true;


////////////////////////////////////////////////////////////////////////

////////////////////////// Key ///////////////////////////////////////////
const geometry5 = new THREE.BoxGeometry( 6, 0.5, 3 );
const material5 = new THREE.MeshBasicMaterial( {
  //color: 0x00ffff
} );
const faces3 = [
  new THREE.MeshBasicMaterial({map: textureLoader.load(gold)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(gold)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(key3)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(key3)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(gold)}),
  new THREE.MeshBasicMaterial({map: textureLoader.load(gold)})
];
const cube3 = new THREE.Mesh( geometry5, faces3 );
scene.add( cube3 );
cube3.position.set(-8,4,-10);

cube3.castShadow=true;

const circle1 = new THREE.CircleGeometry( 1.5, 32 );
const circle2 = new THREE.MeshBasicMaterial( { 
  color: 0x000000,
  side: THREE.DoubleSide 
 } );
const circle = new THREE.Mesh( circle1, circle2 );
circle.position.set(7.05,3.8,4);
circle.rotation.x=0;
circle.rotation.y=1.54;
circle.rotation.z=0;
scene.add( circle );

////////////////////////////////////////////////////////////////////////
let k1=0,k2=0,k3=0;
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let access = randomNumber(1,3);
////////////////////////Interactions///////////////////////////////////
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) { //w
        if(k1==1) cube.position.x -= 1;
        else if(k2==1) cube2.position.x -= 1;
        else if(k3==1) cube3.position.x -= 1;
        cube.rotation.x=-0;
        cube2.rotation.x=-0;
        cube3.rotation.x=-0;

    } else if (keyCode == 83) {//s
      if(k1==1) cube.position.x += 1;
      else if(k2==1) cube2.position.x += 1;
      else if(k3==1) cube3.position.x += 1;
        cube.rotation.x=-0;
        cube2.rotation.x=-0;
        cube3.rotation.x=-0;

    } else if (keyCode == 65) {//a
      if(k1==1) cube.position.z += 1;
      else if(k2==1) cube2.position.z += 1;
      else if(k3==1) cube3.position.z += 1;
        cube.rotation.x=-0;
        
        cube2.rotation.x=-0;
        cube3.rotation.x=-0;

    } else if (keyCode == 68) {//d
      if(k1==1) cube.position.z -= 1;
      else if(k2==1) cube2.position.z -= 1;
      else if(k3==1) cube3.position.z -= 1;
        cube.rotation.x=-0;
        
        cube2.rotation.x=-0;
        cube3.rotation.x=-0;

    } else if (keyCode == 32) { //space
      cube.position.set(0,4,-10);
      cube3.position.set(-8,4,-10);
      cube2.position.set(8,4,-10);
      cube.rotation.x=-0;
      cube2.rotation.x=-0;
      cube3.rotation.x=-0;

    }else if (keyCode == 70) { //f 
      if(k1==1){
        if (cube.position.x == 7 && cube.position.y == 4 && cube.position.z == 4){
          if(access==1) torus.rotation.z = .6;
          cube.rotation.x=-0.79;
        }
        else{
          torus.rotation.z = 1.4;
        }
      }
      if(k2==1){
        if (cube2.position.x == 7 && cube2.position.y == 4 && cube2.position.z == 4){
          if(access==2) torus.rotation.z = .6;
          cube2.rotation.x=-0.79;
        }
        else{
          torus.rotation.z = 1.4;
        }
      }
      if(k3==1){
        if (cube3.position.x == 7 && cube3.position.y == 4 && cube3.position.z == 4){
          if(access==3) torus.rotation.z = .6;
          cube3.rotation.x=-0.79;
        }
        else{
          torus.rotation.z = 1.4;
        }
      }
      
        
    }else if(keyCode==49){ //1
      k1=1;
      k2=0;
      k3=0;
    }
    else if(keyCode==50){ //2
      k1=0;
      k2=1;
      k3=0;
    }
    else if(keyCode==51){ //3
      k1=0;
      k2=0;
      k3=1;
    }
};
//////////////////////////////////////////////////////////////////////////////

function animate(){
    renderer.render(scene,camera);
 }

 renderer.setAnimationLoop(animate);

 window.addEventListener('resize',function(){
   camera.aspect = this.window.innerWidth/this.window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize(this.window.innerWidth,this.window.innerHeight);
 });