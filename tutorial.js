// Set the scene size.
var WIDTH = 400;
var HEIGHT = 300;

// Set some camera attributes.
var VIEW_ANGLE = 45;
var ASPECT = WIDTH / HEIGHT;
var NEAR = 0.1;
var FAR = 10000;

// Get the DOM element to attach to
var container =
    document.getElementById('container');

// Create a WebGL renderer, camera
// and a scene
var renderer = new THREE.WebGLRenderer();
var camera =
    new THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR
    );

var scene = new THREE.Scene();

// Add the camera to the scene.
scene.add(camera);

// Start the renderer.
renderer.setSize(WIDTH, HEIGHT);

// Attach the renderer-supplied
// DOM element.
container.appendChild(renderer.domElement);

// Set up the sphere vars
var RADIUS = 50;
var SEGMENTS = 16;
var RINGS = 16;

// Create a new mesh with
// sphere geometry - we will cover
// the sphereMaterial next!
var sphere = new THREE.Mesh(

  new THREE.SphereGeometry(
    RADIUS,
    SEGMENTS,
    RINGS),

  sphereMaterial);

// Move the Sphere back in Z so we
// can see it.
sphere.position.z = -300;

// Finally, add the sphere to the scene.
scene.add(sphere);

// create the sphere's material
var sphereMaterial =
  new THREE.MeshLambertMaterial(
    {
      color: 0xCC0000
    });

// create a point light
var pointLight =
  new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);

// Draw!
renderer.render(scene, camera);

function update () {
  // Draw!
  renderer.render(scene, camera);

  // Schedule the next frame.
  requestAnimationFrame(update);
}

// Schedule the first frame.
requestAnimationFrame(update);