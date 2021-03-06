function hallwayType1_simple(length) {
  var space = new THREE.Group();
  // Floor
  space.add(makePlane(5  , length, 0   , 0   , 0 , null, null     , null, simpleFloor));
  // Left Wall
  space.add(makePlane(2.5, Math.max(length-5,0), 2.5 , 0, 1.25, null, Math.PI/2 , null, simplePaint));
  // Right Wall
  space.add(makePlane(2.5, Math.max(length-5,0), -2.5, 0, 1.25, null, -Math.PI/2, null, simplePaint));
  return space;
}

function hallwayType1_realistic(length) {
  var space = new THREE.Group();
  // Lighting
  var pointLight;
  var pointLightHelper;
  for (var i = -length/2; i <= length/2; i+=5) {
    pointLight = makePointLight(0,i,2.5, space);
    space.add(pointLight);
  }
  // Floor
  space.add(makePlane(5  , length, 0   , 0   , 0 , null, null     , null, floorMat));
  // Left Wall
  space.add(makePlane(2.5, Math.max(length-5,0), 2.5 , 0, 1.25, null, Math.PI/2 , null, paintMat));
  // Right Wall
  space.add(makePlane(2.5, Math.max(length-5,0), -2.5, 0, 1.25, null, -Math.PI/2, null, paintMat));
  return space;
}