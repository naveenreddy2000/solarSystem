

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 40 , window.innerWidth/window.innerHeight , 0.1 , 10000 );
var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
var width = window.innerWidth;
var height = window.innerHeight;
renderer.setSize( width , height );

camera.position.set(0,0,1500);

var sunSphere = new THREE.SphereGeometry(115,80,80);
var sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff21 }); 
var sunMesh = new THREE.Mesh(sunSphere, sunMaterial);


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


        
 //mercury
var mercurySphere = new THREE.SphereGeometry(2,80,80);
var mercuryMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(1).jpg') });  
var mercuryMesh = new THREE.Mesh(mercurySphere, mercuryMaterial);
 mercuryMesh.position.set(240,0,0);
 mercuryPivot.add( mercuryMesh );
 //venus
 var venusSphere = new THREE.SphereGeometry(5,80,80);
 var venusMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(2).jpg') });
 var venusMesh = new THREE.Mesh(venusSphere, venusMaterial);
 venusMesh.position.set(275,0,0);
 venusPivot.add( venusMesh );
 //earth
 var earthSphere = new THREE.SphereGeometry(10,40,80);
 var earthMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(3).jpg') });
 var earthMesh = new THREE.Mesh(earthSphere, earthMaterial);
 earthMesh.position.set(300,0,0);
 earthPivot.add( earthMesh );

 //mars
 var marsSphere = new THREE.SphereGeometry(3,80,80);
 var marsMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(4).jpg') });
 var marsMesh = new THREE.Mesh(marsSphere, marsMaterial);
 marsMesh.position.set(360,0,0);
 marsPivot.add( marsMesh );

 //jupiter
 var jupiterSphere = new THREE.SphereGeometry(57,80,80);
 var jupiterMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(5).jpg')});
 var jupiterMesh = new THREE.Mesh(jupiterSphere, jupiterMaterial);
 jupiterMesh.position.set(720,0,0);
 jupiterPivot.add( jupiterMesh );

 //saturn
 var saturnSphere = new THREE.SphereGeometry(48,80,80);
 var saturnMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(6).jpg') });
 var saturnMesh = new THREE.Mesh(saturnSphere, saturnMaterial);
 saturnMesh.position.set(1160,0,0);
 saturnPivot.add( saturnMesh );

 //uranus
 var  uranusSphere = new THREE.SphereGeometry(21,80,80);
 var uranusMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(7).jpg') });
 var uranusMesh = new THREE.Mesh(uranusSphere, uranusMaterial);
 uranusMesh.position.set(2120,0,0);
 uranusPivot.add( uranusMesh );

 //neptun
 var neptunSphere = new THREE.SphereGeometry(20,80,80);
 var neptunMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./images/images(8).jpg') });
 var neptunMesh = new THREE.Mesh(neptunSphere, neptunMaterial);
 neptunMesh.position.set(3210,0,0);
 neptunPivot.add( neptunMesh );

 var i = 0 ;

 sunMesh.add(  mercuryPivot, venusPivot, earthPivot, marsPivot, jupiterPivot, saturnPivot, uranusPivot, neptunPivot ,starsPivot[i++] 
    ,starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++]
    ,starsPivot[i++]);
 

 scene.add(sunMesh);




function animate()
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    mercuryPivot.rotation.y += 0.04;
    venusPivot.rotation.y += 0.02;
    earthPivot.rotation.y += 0.0099;
    marsPivot.rotation.y += 0.0079;
    jupiterPivot.rotation.y += 0.00559;
    saturnPivot.rotation.y += 0.00329;
    uranusPivot.rotation.y += 0.0019;
    neptunPivot.rotation.y += 0.00099;
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


  