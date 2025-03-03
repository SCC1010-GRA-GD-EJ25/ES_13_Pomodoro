let minutos = 0.10
let tiempo = minutos * 60
let sonido

function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800,800)
  frameRate(1)
  textAlign(CENTER,CENTER)
  textFont("Arial")
}

function draw() {
  background(146,83,116)
  fill(252,238,161)
  if (tiempo <= 0) {
    noLoop()
    textSize(30)
    text("¡Tiempo de un buen descanso!",width/2,height/2)
  } else {
  let m = nf(floor(tiempo/60),2)
  let s = nf(tiempo % 60,2)
  textSize(96)
  text(m + ":" + s, width/2,height/2)
  tiempo-- 
  }
}