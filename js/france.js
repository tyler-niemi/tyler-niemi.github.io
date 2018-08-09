var interval = 1500; 
var random_display = 0;
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