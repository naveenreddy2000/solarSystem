var scene = new THREE.Scene();
const width = window.innerWidth;
const height = window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75 , width / height , 0.1 , 10000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( width , height );
document.getElementById('info').appendChild( renderer.domElement );
camera.position.z = 19.2;
camera.position.y = -5.39;

camera.lookAt(new THREE.Vector3(-3.6,3.6,0));



var geo = new THREE.SphereGeometry(3,32,32);
var mat = new THREE.MeshBasicMaterial({color:0x00ffff,wireframe:true,transparent:true});
var mes = new THREE.Mesh(geo,mat);
mes.position.set(-10,3,-5);


var mat1 = new THREE.MeshBasicMaterial({color:0xff5422,wireframe:true,transparent:true});
var mes1 = new THREE.Mesh(geo,mat1);
mes1.position.set(10,0,-5);

scene.add(mes);
scene.add(mes1);


var k=0;
var l=0;
function frame()
{
    requestAnimationFrame(frame);
    renderer.render(scene,camera);
    mes.rotation.y += 0.001;
    mes1.rotation.y += 0.001;
    if(camera.position.y<0 )
    {
      camera.position.z = camera.position.z - 0.035;
       camera.position.y = camera.position.y + 0.045;
       camera.lookAt(new THREE.Vector3(k=k+0.03,l=l+0.03,0));
    }

}
frame();



function wheel(event)
{   

    
    if(event.deltaY>0){

       
    setInterval(function(){

       mat.opacity -= 0.007;
       mat1.opacity -= 0.007;
       camera.position.z = camera.position.z + 0.035;
       camera.position.y = camera.position.y - 0.045;
       camera.lookAt(new THREE.Vector3(k=k-0.03,l=l-0.03,0));
        
    },10);

    setTimeout(function(){
        
      window.open('http://localhost:8000/','self');
           
    },1200)
    }
   
}



document.addEventListener('wheel',wheel,false);