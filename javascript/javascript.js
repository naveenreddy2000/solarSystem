
$('#earth').hide();


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

var no =0;


var sunSphere = new THREE.SphereGeometry(115,80,80);
var sunMaterial = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load('http://localhost:8000/image2') ,transparent: true,opacity : 1}); 
var sunMesh = new THREE.Mesh(sunSphere, sunMaterial);
sunSphere.dynamic = true;


var sunPivot  =new THREE.Object3D();



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

 
 



 var saturnSphere = new THREE.SphereGeometry(50,80,80);
 var saturnMaterial = new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('http://localhost:8000/image7') ,transparent: true,opacity : 1});
 var saturnMesh = new THREE.Mesh(saturnSphere, saturnMaterial);
 saturnMesh.position.set(300,300,-300);
 saturnPivot.add( saturnMesh );

 

 var i = 0 ;

 scene.add(  jupiterPivot, saturnPivot, starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++],starsPivot[i++]);
 

 scene.add(sunMesh);



function wheel(event)
{
    if(event.deltaY<0){
        var i = 0,j = 0 ;
        
        setInterval(function(){
            camera.position.z = camera.position.z - 2;
            camera.lookAt(new THREE.Vector3(k=k+1.5,l=l+1.5,0));
            sunMaterial.opacity = sunMaterial.opacity - 0.006 ;
            saturnMaterial.opacity = saturnMaterial.opacity - 0.006 ;
            jupiterMaterial.opacity = jupiterMaterial.opacity - 0.006 ;
        },10);
    
        setTimeout(function(){
           window.open('http://localhost:8000/page1','_self');  
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
    
    jupiterMesh.rotation.y -= 0.001;
    jupiterPivot.rotation.y += 0.0003;
    
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
        
    }
    else
    {
        document.getElementById('scene').style.cursor = 'default';
        
    }
    if(intersects1.length !=0)
    {
        document.getElementById('scene').style.cursor = 'pointer';
        
    }
    else
    {
        document.getElementById('scene').style.cursor = 'default';
        
    }
    if(intersects2.length !=0)
    {
        document.getElementById('scene').style.cursor = 'pointer';
        
        
    }
    else
    {
        document.getElementById('scene').style.cursor = 'default';
       
    }
}

document.addEventListener('mousemove',mouseMove,false);


function name(){
    setTimeout(function(){
        $('#earth').fadeIn(3000); 
     },1500)
}
name();
document.getElementById('earth').onclick = function() {
    
    var interval = setInterval(function(){
        var n =0
        $('iframe').fadeIn(3000);
        $('#earth').fadeOut(1000);
        $('#scroll').fadeOut(1000);
        if(camera.position.z<1300)
        {
            sunMaterial.opacity-=0.003;
            jupiterMaterial.opacity-=0.003;
            saturnMaterial.opacity-=0.003;
            camera.position.z+=1;
            camera.position.x-=2;
        }
        
            },10);
            
    }
