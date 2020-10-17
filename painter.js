const canvas = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight


const context = canvas.getContext("2d")

context.strokeStyle = "#ff4141"
context.lineWidth = 6
context.lineCap = "round"

let shouldPaint = false

document.addEventListener("mousedown", function (event) {
  shouldPaint = true
  context.moveTo(event.pageX, event.pageY)
  context.beginPath()
})

document.addEventListener("mouseup", function (event) {
  shouldPaint = false 
})

document.addEventListener("mousemove", function (event) {
  if (shouldPaint) {
	context.lineTo(event.pageX, event.pageY)
  context.stroke()
  } 
})

document.querySelectorAll("nav a").forEach(link => {
   link.addEventListener("click", function (event){
  context.strokeStyle = this.style.backgroundColor 
})                  
          
// _________________________________


// Clear

clear.onclick = function(){
  context.clearRect(0, 0, canvas.width, canvas.height);
};



// _________________________________

// Save

















//__________________________________________



});



