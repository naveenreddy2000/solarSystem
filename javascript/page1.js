
import * as THREE from './build/three.module.js';
import {OBJLoader} from './OBJLoader.js'

$('iframe').hide();
$('#events').fadeIn(4000);


var mouse = {x:0,y:0};
var object;
var scene = new THREE.Scene();
const width = window.innerWidth;
const height = window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75 , width / height , 0.1 , 10000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( width , height );
document.body.appendChild( renderer.domElement );
camera.position.z=23;
camera.position.y=16;
camera.lookAt(new THREE.Vector3(-1.2,13,0));
var i =0;
var j = 19;

var planet = new THREE.SphereGeometry(22,10,15);
var pMat = new THREE.MeshPhongMaterial({transparent:true,opacity:1,  color:0xffffff});
var pMesh = new THREE.Mesh(planet,pMat);
pMesh.scale.x = 1.5;
scene.add(pMesh);


var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.castShadow = true;
directionalLight.position.x =-1;
directionalLight.position.y =-1;
directionalLight.position.z =1;
scene.add( directionalLight );

var star = new THREE.SphereGeometry(1,32,32);
var sMat1 =new THREE.MeshBasicMaterial({transparent:true,opacity:1});
var sMesh1 = new THREE.Mesh(star,sMat1);
sMesh1.position.set(350,280,-380);
scene.add(sMesh1);
var sMat2 =new THREE.MeshBasicMaterial({transparent:true,opacity:1});
var sMesh2 = new THREE.Mesh(star,sMat2);
sMesh2.position.set(-250,160,-380);
scene.add(sMesh2);
var sMat3 =new THREE.MeshBasicMaterial({transparent:true,opacity:1});
var sMesh3 = new THREE.Mesh(star,sMat3);
sMesh3.position.set(-320,300,-380);
scene.add(sMesh3);
var sMat4 =new THREE.MeshBasicMaterial({transparent:true,opacity:1});
var sMesh4 = new THREE.Mesh(star,sMat4);
sMesh4.position.set(-50,150,-380);
scene.add(sMesh4);
var sMat5 =new THREE.MeshBasicMaterial({transparent:true,opacity:1});
var sMesh5 = new THREE.Mesh(star,sMat5);
sMesh5.position.set(70,220,-380);
scene.add(sMesh5);
var sMat6 =new THREE.MeshBasicMaterial({transparent:true,opacity:1});
var sMesh6 = new THREE.Mesh(star,sMat6);
sMesh6.position.set(280,180,-380);
scene.add(sMesh6);
var sMat7 =new THREE.MeshBasicMaterial({transparent:true,opacity:1});
var sMesh7 = new THREE.Mesh(star,sMat7);
sMesh7.position.set(380,150,-380);
scene.add(sMesh7);
var sMat8 =new THREE.MeshBasicMaterial({transparent:true,opacity:1});
var sMesh8 = new THREE.Mesh(star,sMat8);
sMesh8.position.set(-480,100,-380);
scene.add(sMesh8);


var light1 = new THREE.PointLight( 0x0f86f4, 1 );
light1.position.set(-480,100,-380);
scene.add( light1 );
var light2 = new THREE.PointLight( 0x0f86f4, 1 );
light2.position.set(280,180,-380);
scene.add( light2 );
var light3 = new THREE.PointLight(0x0f86f4, 1);
light3.position.set(350,280,-380);
scene.add( light3 );
var light4 = new THREE.PointLight( 0x0f86f4, 1 );
light4.position.set(380,150,-380);
scene.add( light4 );
var light5 = new THREE.PointLight( 0x0f86f4f, 1 );
light5.position.set(-250,160,-380);
scene.add( light5 );

/*var light = new THREE.SpotLight(0x0f86f4,0.6);
light.position.x=0;
light.position.y=1;
light.position.z=2;
light.angle=Math.PI/12;
scene.add(light);*/


function loadModel(frame) {
  object.traverse( function ( child ) {
      if ( child.isMesh ) child.material.map = texture;
  } );
  object.position.y = 23.5;
  object.scale.x = 0.1;
  object.scale.y = 0.1;
  object.scale.z = 0.1;
  object.rotation.x -=0.5;
  object.castShadow=true;
  scene.add( object );
}

var manager = new THREE.LoadingManager( loadModel );




var textureLoader = new THREE.TextureLoader( manager );
var texture = textureLoader.load( 'pen.jpg' );




var loader = new OBJLoader( manager );
loader.load( 'pen.obj', function ( obj ) {
object = obj;
} );






/*
var geometry = new THREE.SphereGeometry(0.1,32,32);
var materia = new THREE.MeshBasicMaterial();
var spher = new THREE.Mesh(geometry,materia);
scene.add(spher);*/


var k=0;
var l=0;
function frame()
{
    requestAnimationFrame(frame);
    renderer.render(scene,camera);
    sMat1.opacity = Math.random();
    sMat2.opacity = Math.random();
    sMat3.opacity = Math.random();
    sMat4.opacity = Math.random();
    sMat5.opacity = Math.random();
    sMat6.opacity = Math.random();
    sMat7.opacity = Math.random();
    sMat8.opacity = Math.random();
    if(camera.position.z>17)
    {
        camera.position.z -= 0.05;
        camera.position.y += 0.025;
        camera.lookAt(new THREE.Vector3(i=i+0.01,j=j+0.05));
    }


    

}
frame();



function wheel(event)
{   

    if(event.deltaY>0){

       
    setInterval(function(){
        pMesh.material.opacity-=0.005;
        camera.position.z += 0.05;
        camera.position.y -= 0.025;
        camera.lookAt(new THREE.Vector3(i=i-0.01,j=j-0.05));
        
       


    },10);

    setTimeout(function(){
        
      window.open('http://localhost:8000/','_self');
           
    },800)
    }
   
}
document.addEventListener('wheel',wheel,false);
var i;
var j;
document.getElementById('events').onclick=function(){
  $('iframe').fadeIn(3000);
  $('#events').fadeOut(1000);
  $('#scroll').fadeOut(1000);
    setInterval(function(){
      if( camera.position.z>10 ){
        camera.position.z-=0.02;
        camera.position.x+=0.01;
        camera.position.y+=0.01;
        camera.lookAt(new THREE.Vector3(i=i+0.03,j=j+0.002));
      }
    },10);
}


/*document.addEventListener('mousemove', onMouseMove, false);



function onMouseMove(event) {

    // Update the mouse variable
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  
    // Make the sphere follow the mouse
    var vector = new THREE.Vector3(mouse.x, mouse.y, 0);
    vector.unproject(camera);
    var dir = vector.sub(camera.position).normalize();
    var distance = -camera.position.z / dir.z;
    var pos = camera.position.clone().add(dir.multiplyScalar(distance));
    pos.z=5;
    spher.position.copy(pos);
  };*/
