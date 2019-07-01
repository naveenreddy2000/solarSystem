

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 40 , window.innerWidth/window.innerHeight , 0.1 , 10000 );
var renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
var width = window.innerWidth;
var height = window.innerHeight;
renderer.setSize( width , height );
camera.position.z = 810;
camera.lookAt(new THREE.Vector3(180,180,0));

var k =180;
var l =180;


var sunSphere = new THREE.SphereGeometry(115,80,80);
var sunMaterial = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image2') ,transparent: true,opacity : 1}); 
var sunMesh = new THREE.Mesh(sunSphere, sunMaterial);
sunSphere.dynamic = true;


var sunPivot  =new THREE.Object3D();
var sG = new THREE.SphereGeometry(90,32,32);
var sM = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image2')});
var sMe =new THREE.Mesh(sG,sM);
sMe.position.set(40,0,-10);
sunPivot.add(sMe);

var sG1 = new THREE.SphereGeometry(92,32,32);
var sM1 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image2')});
var sMe1 =new THREE.Mesh(sG1,sM1);
sMe1.position.set(10,0,40);
sunPivot.add(sMe1);

var sG2 = new THREE.SphereGeometry(90,32,32);
var sM2 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image2')});
var sMe2 =new THREE.Mesh(sG2,sM2);
sMe2.position.set(-40,0,10);
sunPivot.add(sMe2);

var sG3 = new THREE.SphereGeometry(92,32,32);
var sM3 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image2')});
var sMe3 =new THREE.Mesh(sG3,sM3);
sMe3.position.set(0,40,10);
sunPivot.add(sMe3);

var sG4 = new THREE.SphereGeometry(93,32,32);
var sM4 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image2')});
var sMe4 =new THREE.Mesh(sG4,sM4);
sMe4.position.set(0,-40,10);
sunPivot.add(sMe4);

var sG5 = new THREE.SphereGeometry(91,32,32);
var sM5 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image2')});
var sMe5 =new THREE.Mesh(sG5,sM5);
sMe5.position.set(0,-10,-40);
sunPivot.add(sMe5);

        sMe.visible = false;
        sMe1.visible = false;
        sMe2.visible = false;
        sMe3.visible = false;
        sMe4.visible = false;
        sMe5.visible = false;



scene.add(sunPivot);



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



        jupiterPivot = new THREE.Object3D();
        saturnPivot = new THREE.Object3D();
        

/* function cricbuzz()
{
    window.open('https://www.cricbuzz.com/');
}
*/

 
 var jupiterSphere = new THREE.SphereGeometry(60,80,80);
 var jupiterMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('http://localhost:8000/image1'),transparent: true,opacity : 1});
 var jupiterMesh = new THREE.Mesh(jupiterSphere, jupiterMaterial);
 jupiterMesh.position.set(-500,0,-500);
 jupiterPivot.add( jupiterMesh );

 var jG = new THREE.SphereGeometry(50,32,32);
 var jM = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image1')});
 var jMe =new THREE.Mesh(jG,jM);
 jMe.position.set(-515,0,-480);
 jupiterPivot.add(jMe);
 
 var jG1 = new THREE.SphereGeometry(50,32,32);
 var jM1 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image1')});
 var jMe1 =new THREE.Mesh(jG1,jM1);
 jMe1.position.set(-510,20,-510);
 jupiterPivot.add(jMe1);
 
 var jG2 = new THREE.SphereGeometry(50,32,32);
 var jM2 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image1')});
 var jMe2 =new THREE.Mesh(jG2,jM2);
 jMe2.position.set(-520,0,-520);
 jupiterPivot.add(jMe2);
 
 var jG3 = new THREE.SphereGeometry(50,32,32);
 var jM3 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image1')});
 var jMe3 =new THREE.Mesh(jG3,jM3);
 jMe3.position.set(-500,-20,-500);
 jupiterPivot.add(jMe3);
 
 var jG4 = new THREE.SphereGeometry(50,32,32);
 var jM4 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image1')});
 var jMe4 =new THREE.Mesh(jG4,jM4);
 jMe4.position.set(-500,20,-500);
 jupiterPivot.add(jMe4);
 
 var jG5 = new THREE.SphereGeometry(50,32,32);
 var jM5 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image1')});
 var jMe5 =new THREE.Mesh(jG5,jM5);
 jMe5.position.set(-485,0,-485);
 jupiterPivot.add(jMe5);

 

scene.add(jupiterPivot);



jMe.visible = false;
        jMe1.visible = false;
        jMe2.visible = false;
        jMe3.visible = false;
        jMe4.visible = false;
        jMe5.visible = false;






 var saturnSphere = new THREE.SphereGeometry(50,80,80);
 var saturnMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('http://localhost:8000/image7') ,transparent: true,opacity : 1});
 var saturnMesh = new THREE.Mesh(saturnSphere, saturnMaterial);
 saturnMesh.position.set(300,300,-300);
 saturnPivot.add( saturnMesh );

 var pG = new THREE.SphereGeometry(40,32,32);
 var pM = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image7')});
 var pMe =new THREE.Mesh(pG,pM);
 pMe.position.set(300,300,-279);
 saturnPivot.add(pMe);
 
 var pG1 = new THREE.SphereGeometry(40,32,32);
 var pM1 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image7')});
 var pMe1 =new THREE.Mesh(pG1,pM1);
 pMe1.position.set(318,304,-300);
 saturnPivot.add(pMe1);
 
 var pG2 = new THREE.SphereGeometry(40,32,32);
 var pM2 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image7')});
 var pMe2 =new THREE.Mesh(jG2,jM2);
 pMe2.position.set(300,300,-312);
 saturnPivot.add(pMe2);
 
 var pG3 = new THREE.SphereGeometry(40,32,32);
 var pM3 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image7')});
 var pMe3 =new THREE.Mesh(pG3,pM3);
 pMe3.position.set(300,280,-300);
 saturnPivot.add(pMe3);
 
 var pG4 = new THREE.SphereGeometry(40,32,32);
 var pM4 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image7')});
 var pMe4 =new THREE.Mesh(pG4,pM4);
 pMe4.position.set(280,295,-300);
 saturnPivot.add(pMe4);
 
 var pG5 = new THREE.SphereGeometry(40,32,32);
 var pM5 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image7')});
 var pMe5 =new THREE.Mesh(pG5,pM5);
 pMe5.position.set(283,315,-300);
 saturnPivot.add(pMe5);


 scene.add(saturnPivot);



pMe.visible = false;
        pMe1.visible = false;
        pMe2.visible = false;
        pMe3.visible = false;
        pMe4.visible = false;
        pMe5.visible = false;




 var i = 0 ;

 scene.add(  jupiterPivot, saturnPivot, starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++]);
 

 scene.add(sunMesh);



function wheel(event)
{
    if(event.deltaY<0){
        var i = 0,j = 0 ;
        sMe.visible = false;
        sMe1.visible = false;
        sMe2.visible = false;
        sMe3.visible = false;
        sMe4.visible = false;
        sMe5.visible = false;
        jMe.visible = false;
        jMe1.visible = false;
        jMe2.visible = false;
        jMe3.visible = false;
        jMe4.visible = false;
        jMe5.visible = false;
        pMe.visible = false;
        pMe1.visible = false;
        pMe2.visible = false;
        pMe3.visible = false;
        pMe4.visible = false;
        pMe5.visible = false;
        setInterval(function(){
            camera.position.z = camera.position.z - 2;
            camera.lookAt(new THREE.Vector3(k=k+1.5,l=l+1.5,0));
            sunMaterial.opacity = sunMaterial.opacity - 0.006 ;
            saturnMaterial.opacity = saturnMaterial.opacity - 0.006 ;
            jupiterMaterial.opacity = jupiterMaterial.opacity - 0.006 ;
        },10);
    
        setTimeout(function(){
           window.open('http://localhost:8000/page1','_self');  
           console.log(k + ' ' + l + ' ' + camera.position.z); 
        },1200)
    }
   

   
}


document.addEventListener('wheel',wheel,false);


var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function animate()
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    sunPivot.rotation.y += 0.008;
    sunPivot.rotation.x += 0.005;
    sMe.rotation.y -= 0.03;
    sMe1.rotation.y += 0.04;
    sMe2.rotation.y += 0.05;
    sMe3.rotation.y -= 0.06;
    sMe4.rotation.y += 0.07;
    sMe5.rotation.y += 0.03;
    sMe.rotation.z -= 0.03;
    sMe1.rotation.x += 0.04;
    sMe2.rotation.z += 0.05;
    sMe3.rotation.x -= 0.06;
    sMe4.rotation.z += 0.07;
    sMe5.rotation.x += 0.03;
    jMe.rotation.y -= 0.04;
    jMe1.rotation.y += 0.05;
    jMe2.rotation.y += 0.06;
    jMe3.rotation.y -= 0.07;
    jMe4.rotation.y += 0.03;
    jMe5.rotation.y += 0.04;
    jMe.rotation.z -= 0.04;
    jMe1.rotation.x += 0.05;
    jMe2.rotation.z += 0.06;
    jMe3.rotation.x -= 0.07;
    jMe4.rotation.z += 0.03;
    jMe5.rotation.x += 0.04;
    jupiterMesh.rotation.y -= 0.001;
    jupiterPivot.rotation.y += 0.0003;
    pMe.rotation.y -= 0.05;
    pMe1.rotation.y += 0.06;
    pMe2.rotation.y += 0.07;
    pMe3.rotation.y -= 0.03;
    pMe4.rotation.y += 0.04;
    pMe5.rotation.y += 0.05;
    pMe.rotation.z -= 0.05;
    pMe1.rotation.x += 0.06;
    pMe2.rotation.x += 0.07;
    pMe3.rotation.x -= 0.03;
    pMe4.rotation.z += 0.04;
    pMe5.rotation.z += 0.05;
    saturnMesh.rotation.y -= 0.001;
    saturnPivot.rotation.y += 0.0003;

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
    if(camera.position.z<1050)
    {
        camera.position.z = camera.position.z + 2;
        camera.lookAt(new THREE.Vector3(k=k-1.5,l=l-1.5,0));
    }
    
    
}
animate();


  
function mouseMove(event)
{
    var mouse = new THREE.Vector2();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera( mouse, camera );
    var clicks = [sunMesh];
    var clicks1 = [jupiterMesh];
    var clicks2 = [saturnMesh];

    var intersects = raycaster.intersectObjects( clicks );
    var intersects1 = raycaster.intersectObjects( clicks1 );
    var intersects2 = raycaster.intersectObjects( clicks2 );

    if(intersects.length !=0)
    {
        document.getElementById('scene').style.cursor = 'pointer';
        sMe.visible = true;
        sMe1.visible = true;
        sMe2.visible = true;
        sMe3.visible = true;
        sMe4.visible = true;
        sMe5.visible = true;
    }
    else
    {
        document.getElementById('scene').style.cursor = 'default';
        sMe.visible = false;
        sMe1.visible = false;
        sMe2.visible = false;
        sMe3.visible = false;
        sMe4.visible = false;
        sMe5.visible = false;
    }
    if(intersects1.length !=0)
    {
        document.getElementById('scene').style.cursor = 'pointer';
        jMe.visible = true;
        jMe1.visible = true;
        jMe2.visible = true;
        jMe3.visible = true;
        jMe4.visible = true;
        jMe5.visible = true;
        
    }
    else
    {
        document.getElementById('scene').style.cursor = 'default';
        jMe.visible = false;
        jMe1.visible = false;
        jMe2.visible = false;
        jMe3.visible = false;
        jMe4.visible = false;
        jMe5.visible = false;
    }
    if(intersects2.length !=0)
    {
        document.getElementById('scene').style.cursor = 'pointer';
        pMe.visible = true;
        pMe1.visible = true;
        pMe2.visible = true;
        pMe3.visible = true;
        pMe4.visible = true;
        pMe5.visible = true;
        
    }
    else
    {
        document.getElementById('scene').style.cursor = 'default';
        pMe.visible = false;
        pMe1.visible = false;
        pMe2.visible = false;
        pMe3.visible = false;
        pMe4.visible = false;
        pMe5.visible = false;
    }
}

document.addEventListener('mousemove',mouseMove,false);