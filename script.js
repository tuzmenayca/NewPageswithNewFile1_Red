var newScreenButton

function setup() {
  createCanvas(400, 400);
  background("red")
  newScreenButton = createButton("New Screen");
  newScreenButton.position(50,50)
  newScreenButton.mousePressed(clickedNewScreen);
}

function draw() {

}

function clickedNewScreen(){
  //window.open("https://NewPageswithNewFile2.aycatuzmen.repl.co", "_self")
  //window.open("https://95dc9fa3-111d-4f01-87bc-9fa7119dca16-00-1j3oyk5cngcsm.riker.repl.co/","_self");
  window.open("https://tuzmenayca.github.io/NewPageswithNewFile2_Green/", "_self")
  //window.open("https://95dc9fa3-111d-4f01-87bc-9fa7119dca16-00-1j3oyk5cngcsm.riker.replit.dev/", "_self")
}
