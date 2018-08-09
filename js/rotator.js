var interval = 1500; 
var random_display = 0;
var London_dir = "images/london/"
var LondonNum = 0;
LondonArray = new Array();
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1240033.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1240008.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1240009.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1250142.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1260158.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1250123.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1250113.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1250141.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1250136.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1250089.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1250088.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1250096.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1240078.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1240077.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1240075.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1250085.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1240057.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1240047.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1240044.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1240065.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1240040.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P2010388.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1250155.jpg");
LondonArray[LondonNum++] = new imageLondon(London_dir + "P1250149.jpg");

var number_London = LondonArray.length;
function imageLondon(image_location) {
this.image_item = new Image();
this.image_item.src = image_location;
}
function get_imageLondonLocation(imageObj) {
return(imageObj.image_item.src)
}
function randLondon(x, y) {
var range = y - x + 1;
return Math.floor(Math.random() * range) + x;
}
function geLondonImage() {
if (random_display) {
LondonNum = randLondon(0, number_London-1);
}
else {
LondonNum = (LondonNum+1) % number_London;
}
var London_image = get_imageLondonLocation(LondonArray[LondonNum]);
return(London_image);
}

function getPrevLondon() {
LondonNum = (LondonNum-1) % number_London;
var London_image = get_imageLondonLocation(LondonArray[LondonNum]);
return(London_image);
}

function prevLondon(place) {
var London_image = getPrevLondon();
document[place].src = London_image;
}

function rotateLondon(place) {
var London_image = geLondonImage();
document[place].src = London_image;
var London_call = "rotateLondon('"+place+"')";
timerID = setTimeout(London_call, interval);
}

var Scottland_dir = "images/scottland/"
var ScottlandNum = 0;
ScottlandArray = new Array();
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280247.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280242.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280243.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280244.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280245.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280246.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280229.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280230.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280253.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280252.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280251.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1280250.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290255.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290256.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290258.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290259.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290260.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290269.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290270.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290271.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290272.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290273.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290274.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290275.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290276.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290277.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290278.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290285.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290283.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290282.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290281.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290280.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290290.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290292.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290293.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290295.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290296.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290297.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290294.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290291.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1290289.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300308.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300305.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300304.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300303.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300302.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300301.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300300.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300299.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300310.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300309.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300312.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300332.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300331.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300328.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300327.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300326.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300325.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300324.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300322.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300315.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300313.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300333.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300341.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300342.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300343.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300350.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300347.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300348.jpg");
ScottlandArray[ScottlandNum++] = new image_Scottland(Scottland_dir + "P1300349.jpg");

var number_Scottland = ScottlandArray.length;
function image_Scottland(image_Scottland) {
this.image_item = new Image();
this.image_item.src = image_Scottland;
}
function get_imageScottlandLocation(imageObj) {
return(imageObj.image_item.src)
}
function randScottland(x, y) {
var range = y - x + 1;
return Math.floor(Math.random() * range) + x;
}
function getScottlandImage() {
if (random_display) {
ScottlandNum = randScottland(0, number_Scottland-1);
}
else {
ScottlandNum = (ScottlandNum+1) % number_Scottland;
}
var Scottland_image = get_imageScottlandLocation(ScottlandArray[ScottlandNum]);
return(Scottland_image);
}

function getPrevScottland() {
ScottlandNum = (ScottlandNum-1) % number_Scottland;
var Scottland_image = get_imageScottlandLocation(ScottlandArray[ScottlandNum]);
return(Scottland_image);
}

function prevScottland(place) {
var Scottland_image = getPrevScottland();
document[place].src = Scottland_image;
}

function rotateScottland(place) {
var Scottland_image = getScottlandImage();
document[place].src = Scottland_image;
var Scottland_call = "rotateScottland('"+place+"')";
timerID = setTimeout(Scottland_call, interval);
}

var Spain_dir = "images/spain/"
var SpainNum = 0;
SpainArray = new Array();
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060396.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060397.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060398.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060400.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060402.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060403.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060405.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060406.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060407.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060408.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060409.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060410.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060412.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060413.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060414.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060416.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060417.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060418.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060420.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060421.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060423.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060424.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060425.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060426.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060427.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060428.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060429.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060430.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060435.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060436.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060437.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060438.jpg");
SpainArray[SpainNum++] = new imageSpain(Spain_dir + "P2060399.jpg");

var number_Spain = SpainArray.length;
function imageSpain(image_location) {
this.image_item = new Image();
this.image_item.src = image_location;
}
function get_imageSpainLocation(imageObj) {
return(imageObj.image_item.src)
}
function randSpain(x, y) {
var range = y - x + 1;
return Math.floor(Math.random() * range) + x;
}
function getSpainImage() {
if (random_display) {
SpainNum = randSpain(0, number_Spain-1);
}
else {
SpainNum = (SpainNum+1) % number_Spain;
}
var Spain_image = get_imageSpainLocation(SpainArray[SpainNum]);
return(Spain_image);
}

function getPrevSpain() {
SpainNum = (SpainNum-1) % number_Spain;
var Spain_image = get_imageSpainLocation(SpainArray[SpainNum]);
return(Spain_image);
}

function prevSpain(place) {
var Spain_image = getPrevSpain();
document[place].src = Spain_image;
}

function rotateSpain(place) {
var Spain_image = getSpainImage();
document[place].src = Spain_image;
var Spain_call = "rotateSpain('"+place+"')";
timerID = setTimeout(Spain_call, interval);
}

var France_dir = "images/france/"
var FranceNum = 0;
FranceArray = new Array();
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260161.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260162.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260166.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260168.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260169.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260157.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260158.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260159.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260178.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260179.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260180.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260182.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260170.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260172.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260176.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260177.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260195.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260196.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260197.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260199.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260192.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260184.jpg");
FranceArray[FranceNum++] = new imageFrance(France_dir + "P1260183.jpg");

var number_France = FranceArray.length;
function imageFrance(image_location) {
this.image_item = new Image();
this.image_item.src = image_location;
}
function get_imageFranceLocation(imageObj) {
return(imageObj.image_item.src)
}
function randFrance(x, y) {
var range = y - x + 1;
return Math.floor(Math.random() * range) + x;
}
function getFranceImage() {
if (random_display) {
FranceNum = randFrance(0, number_France-1);
}
else {
FranceNum = (FranceNum+1) % number_France;
}
var France_image = get_imageFranceLocation(FranceArray[FranceNum]);
return(France_image);
}

function getPrevFrance() {
FranceNum = (FranceNum-1) % number_France;
var France_image = get_imageFranceLocation(FranceArray[FranceNum]);
return(France_image);
}

function prevFrance(place) {
var France_image = getPrevFrance();
document[place].src = France_image;
}

function rotateFrance(place) {
var France_image = getFranceImage();
document[place].src = France_image;
var France_call = "rotateFrance('"+place+"')";
timerID = setTimeout(France_call, interval);
}