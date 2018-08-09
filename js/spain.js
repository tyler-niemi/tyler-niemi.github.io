var interval = 1500; 
var random_display = 0;
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