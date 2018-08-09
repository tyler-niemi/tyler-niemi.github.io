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