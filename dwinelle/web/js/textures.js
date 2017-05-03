var material = new THREE.LineBasicMaterial({ color: 0x000000 });
var hilight = new THREE.LineBasicMaterial({ color: 0x0087C6, linewidth: 2 });
var faded = new THREE.LineBasicMaterial({ color: 0xbfbfbf });
var srcSphere = new THREE.MeshBasicMaterial({ color: 0x157e2d });
var dstSphere = new THREE.MeshBasicMaterial({ color: 0x7e1515 });

// New Materials

var paintMat = new THREE.MeshLambertMaterial( {color: 0xA8A280, side: THREE.BackSide} );
paintMat.polygonOffset = true;
paintMat.polygonOffsetFactor = -0.1;

var floorMat = new THREE.MeshPhongMaterial( {color: 0x42331F, side: THREE.FrontSide} );
floorMat.shininess = 110;
floorMat.polygonOffset = true;
floorMat.polygonOffsetFactor = -0.1;

var plainWhite = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
var plainLightGray = new THREE.MeshBasicMaterial({color: 0xF1F1F1, side: THREE.DoubleSide});
var plainDarkGray = new THREE.MeshBasicMaterial({color: 0xA9A9A9, side: THREE.DoubleSide});

var simplePaint = new THREE.MeshBasicMaterial({color: 0x66624f, side: THREE.DoubleSide});
var simpleFloor = new THREE.MeshBasicMaterial({color: 0x38352b, side: THREE.DoubleSide});
