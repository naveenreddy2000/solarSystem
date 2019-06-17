

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 40 , window.innerWidth/window.innerHeight , 0.1 , 10000 );
var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
var width = window.innerWidth;
var height = window.innerHeight;
renderer.setSize( width , height );

camera.position.set(0,0,1500);

var sunSphere = new THREE.SphereGeometry(115,80,80);
var sunMaterial = new THREE.MeshBasicMaterial({color : 0xFF7A11,transparent: true,opacity : 1}); 
var sunMesh = new THREE.Mesh(sunSphere, sunMaterial);
sunMesh.callback = cricbuzz ;


var stars = [] ;
var starsPivot = [] ;
var starGeometry = new THREE.SphereGeometry(10 , 32 , 32) ;
var starMaterial = new THREE.MeshBasicMaterial();
for( var i = 0 ; i < 10 ; i++ )
{
    stars[i] = new THREE.Mesh(starGeometry,starMaterial);
    starsPivot[i] = new THREE.Object3D();
}


stars[0].position.set(2900 , 1550 ,-5000);
stars[1].position.set(-900 , 0 , -5000);
stars[2].position.set(1500 , 1240 , -5000);
stars[3].position.set(-400 , 1450 , -5000);
stars[4].position.set(-2500 ,1860 , -5000);
stars[5].position.set(-200 , -1800 , -5000);
stars[6].position.set(2000 , -1650 , -5000);
stars[7].position.set(1400 , -1320 , -5000);
stars[8].position.set(2400 , 0 , -5000);
stars[9].position.set(-3400 , -1630 , -5000);

for(i=0;i<10;i++)
{
    starsPivot[i].add(stars[i]);
}


cameraPivot = new THREE.Object3D();
        mercuryPivot = new THREE.Object3D();
        venusPivot = new THREE.Object3D();
        earthPivot = new THREE.Object3D();
        marsPivot = new THREE.Object3D();
        jupiterPivot = new THREE.Object3D();
        saturnPivot = new THREE.Object3D();
        uranusPivot = new THREE.Object3D();
        neptunPivot = new THREE.Object3D();


 function cricbuzz()
{
    window.open('https://www.cricbuzz.com/');
}
function nitdgp()
{
    window.open('https://www.nitdgp.ac.in/');
}
function threejs()
{
    window.open('https://threejs.org/');
}
function youtube()
{
    window.open('https://www.youtube.com/');
}
        
        
 //mercury
var mercurySphere = new THREE.SphereGeometry(2,80,80);
var mercuryMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(1).jpg') });  
var mercuryMesh = new THREE.Mesh(mercurySphere, mercuryMaterial);
 mercuryMesh.position.set(240,0,0);
 mercuryMesh.callback = cricbuzz ;
 mercuryPivot.add( mercuryMesh );
 //venus
 var venusSphere = new THREE.SphereGeometry(5,80,80);
 var venusMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(2).jpg') });
 var venusMesh = new THREE.Mesh(venusSphere, venusMaterial);
 venusMesh.position.set(275,0,0);
 venusMesh.callback = youtube ;
 venusPivot.add( venusMesh );
 //earth
 var earthSphere = new THREE.SphereGeometry(10,40,80);
 var earthMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(3).jpg') });
 var earthMesh = new THREE.Mesh(earthSphere, earthMaterial);
 earthMesh.position.set(300,0,0);
 earthMesh.callback = nitdgp ;
 earthPivot.add( earthMesh );

 //mars
 var marsSphere = new THREE.SphereGeometry(3,80,80);
 var marsMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(4).jpg') });
 var marsMesh = new THREE.Mesh(marsSphere, marsMaterial);
 marsMesh.position.set(360,0,0);
 marsMesh.callback = threejs ;
 marsPivot.add( marsMesh );

 //jupiter
 var jupiterSphere = new THREE.SphereGeometry(57,80,80);
 var jupiterMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(5).jpg'),transparent: true,opacity : 1});
 var jupiterMesh = new THREE.Mesh(jupiterSphere, jupiterMaterial);
 jupiterMesh.position.set(720,0,0);
 jupiterMesh.callback = youtube ;
 jupiterPivot.add( jupiterMesh );

 //saturn
 var saturnSphere = new THREE.SphereGeometry(48,80,80);
 var saturnMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(6).jpg') ,transparent: true,opacity : 1});
 var saturnMesh = new THREE.Mesh(saturnSphere, saturnMaterial);
 saturnMesh.position.set(860,0,-400);
 saturnMesh.callback = threejs ;
 saturnPivot.add( saturnMesh );

 //uranus
 var  uranusSphere = new THREE.SphereGeometry(31,80,80);
 var uranusMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(7).jpg'),transparent: true,opacity : 1 });
 var uranusMesh = new THREE.Mesh(uranusSphere, uranusMaterial);
 uranusMesh.position.set(-520,0,-1700);
 uranusMesh.callback = cricbuzz ;
 uranusPivot.add( uranusMesh );

 //neptun
 var neptunSphere = new THREE.SphereGeometry(50,80,80);
 var neptunMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(8).jpg') });
 var neptunMesh = new THREE.Mesh(neptunSphere, neptunMaterial);
 neptunMesh.position.set(1910,0,-2100);
 neptunMesh.callback = youtube ;
 neptunPivot.add( neptunMesh );

 var i = 0 ;

 sunMesh.add(  jupiterPivot, saturnPivot, uranusPivot,  starsPivot[i++] 
    ,starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++]
    ,starsPivot[i++]);
 

 scene.add(sunMesh);

 var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function wheel(event)
{
    var i = 0,j = 0 ;
    setInterval(function(){

        camera.position.z = camera.position.z - 2;
        camera.lookAt(new THREE.Vector3(j=j+1.5,i=i+1.5,0));
        sunMaterial.opacity = sunMaterial.opacity - 0.006 ;
        uranusMaterial.opacity = uranusMaterial.opacity - 0.006 ;
        saturnMaterial.opacity = saturnMaterial.opacity - 0.006 ;
        jupiterMaterial.opacity = jupiterMaterial.opacity - 0.006 ;
    },10);

    setTimeout(function(){
       window.open('https://www.cricbuzz.com/','_self')   
    },1200)

   
}


document.addEventListener('wheel',wheel,false);



function animate()
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    starsPivot[3].rotation.z += -0.000059;
    starsPivot[8].rotation.z += 0.000059;
    for(i=0;i<5;i++)
    {
        starsPivot[i].rotation.y += 0.000059;
        starsPivot[i].rotation.x += 0.000059;
    }
    for(i=5;i<10;i++)
    {
        starsPivot[i].rotation.y += -0.000059;
        starsPivot[i].rotation.z += -0.000059;
    }
    
    
}
animate();


  