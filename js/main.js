/*
     Name: Jacob Collins
     Date:9/3/15
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*/

Modernizr.load({
    test:Modernizr.canvas,
    yes: "js/main.js",
    no: "js/fail.js",
    complete: function(){

        console.log("The Modernizr test is complete. Everything is a-ok. Huzzah!")
    }
});

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

window.onload = function(){
    var theCanvas1 = document.getElementById("Canvas1");
    var ctx1 = theCanvas1.getContext("2d");

    ctx1.fillStyle = "rgb(64,224,208)";
    ctx1.strokeStyle = "black";
    ctx1.lineWidth = 5;

    ctx1.strokeRect(0,0,50,100);
    ctx1.fillRect(0,0,50,100);



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
    var theCanvas2 = document.getElementById("Canvas2");
    var ctx2 = theCanvas2.getContext("2d");

    ctx2.fillStyle = "rgba(178,34,34,.5)";
    ctx2.strokeStyle = "black";
    ctx2.lineWidth = 5;

    var degrees = 360;
    var radian = (degrees/180)*Math.PI;

    ctx2.beginPath();
    ctx2.arc(50,50,20,0,radian);
    ctx2.fill();

    //30px radius stroke
    ctx2.beginPath();
    ctx2.arc(50,50,30,0,radian);
    ctx2.stroke();



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
    var theCanvas3 = document.getElementById("Canvas3");
    var ctx3 = theCanvas3.getContext('2d');

    var length = 50;

    ctx3.beginPath();
    ctx3.translate(100, 100);
    ctx3.strokeStyle = "black";
    ctx3.fillStyle = "yellow";

    //offset rotation to straighten star
    ctx3.rotate((Math.PI / 10));

    // make 5 points
    for (var i = 5; i--;) {
        // draw line up
        ctx3.lineTo(0, length);
        ctx3.translate(0, length);
        ctx3.rotate((Math.PI * 2 / 10));
        ctx3.lineTo(0, -length);
        ctx3.translate(0, -length);
        ctx3.rotate(-(Math.PI * 6 / 10));
    }
    ctx3.lineTo(0, length);
    ctx3.closePath();
    ctx3.fill();
    ctx3.stroke();

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

    var theCanvas4 = document.getElementById('Canvas4');
    var ctx4 = theCanvas4.getContext('2d');

    ctx4.beginPath();

    //Top of arc/umbrella

    ctx4.arc(150, 150, 100, Math.PI, 0);
    ctx4.counterclockwise=false;
    ctx4.fillStyle = "red";
    ctx4.strokeStyle = "black";
    ctx4.lineWidth = 10;
    ctx4.stroke();


    ctx4.beginPath();
    //Dips in umbrella bottom
    ctx4.arc(70, 150, 20, Math.PI, 0);
    ctx4.arc(110, 150, 20, Math.PI, 0);
    ctx4.arc(150, 150, 20, Math.PI, 0);
    ctx4.arc(190, 150, 20, Math.PI, 0);
    ctx4.arc(230, 150, 20, Math.PI, 0);
    ctx4.stroke();


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can say whatever you would like in any color.

********************************************/

//Draw text here
    var theCanvas5 = document.getElementById("Canvas5");
    var ctx5 = theCanvas5.getContext("2d");

    var theText = "Here's some text for the canvas!";

    //Fill and Stroke text
    ctx5.font = "25pt Georgia";
    ctx5.fillStyle = "purple";
    ctx5.strokeStyle = "rgba(0,100,0,1)";
    ctx5.fillText(theText, 20, 160);
    ctx5.strokeText(theText, 20, 160);

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
    var theCanvas6 = document.getElementById("Canvas6");
    var ctx6 = theCanvas6.getContext("2d");

    var srcImg = document.getElementById("img1");

    ctx6.drawImage(srcImg,0,0);

    var widthHalf = 1650;
    var heightHalf = 544;

    ctx6.drawImage(srcImg,0,1000,widthHalf,heightHalf);
    ctx6.drawImage(srcImg,150,150,600,600,0,10,300,300);



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
    var theCanvas7 = document.getElementById("Canvas7");
    var ctx7 = theCanvas7.getContext("2d");

    ctx7.beginPath();
    ctx7.arc(150, 175, 100, Math.PI, 0);
    ctx7.counterclockwise=false;
    ctx7.fillStyle = "black";
    ctx7.strokeStyle = "red";
    ctx7.lineWidth = 10;
    ctx7.stroke();

    ctx7.beginPath();
    //Dips in umbrella bottom
    ctx7.arc(70, 175, 20, Math.PI, 0);
    ctx7.arc(110, 175, 20, Math.PI, 0);
    ctx7.arc(150, 175, 20, Math.PI, 0);
    ctx7.arc(190, 175, 20, Math.PI, 0);
    ctx7.arc(230, 175, 20, Math.PI, 0);
    ctx7.stroke();

    ctx7.beginPath();
    ctx7.moveTo(150,160);
    ctx7.lineTo(150,240);
    ctx7.lineWidth=8;
    ctx7.linecap='round';
    ctx7.strokeStyle="brown";
    ctx7.stroke();



    //End umbrella

    //Begin sun
    ctx7.fillStyle = "yellow";
    ctx7.strokeStyle = "orange";
    ctx7.lineWidth = 5;

    var degrees2 = 360;
    var radian2 = (degrees2/180)*Math.PI;

    ctx7.beginPath();
    ctx7.arc(450,35,30,0,radian2);
    ctx7.fill();
    ctx7.stroke();
    //End sun

    var newText = "Welcome to paradise";
    ctx7.beginPath();
    ctx7.fillStyle = "blue";
    ctx7.strokeStyle = "rgba(220,20,60,.2)";
    ctx7.font="30pt Georgia";
    ctx7.fillText(newText, 40, 40);
    ctx7.strokeText(newText,40, 40);
    ctx7.fill();
    ctx7.stroke();

};
