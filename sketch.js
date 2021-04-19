var doggy,count
var doggyi,food
var dog
var milk , milki

function preload()
{
	doggyi = loadImage("images/dogImg.png")
  mikli = loadImage("images/milk.png")
}

function setup() {
	createCanvas(800, 700);
  
  doggy = createSprite(400,350,20,20)
  doggy.addImage(doggyi) 
  doggy.scale = 0.5



  database = firebase.database()
  var dog = database.ref("Food")
    dog.on("value",read,showerror)

}


function draw() {  

  background("green")
 
  text (  food , 200,350)

  drawSprites();
  
  if(keyDown(UP_ARROW)){
    food = food - 1
    updatedatabase()
}

displaymilk()
}
function read(data)
{
 count = data.val()
 food = count.Count
 console.log(food)
}
function showerror()
{
 
}
function updatedatabase()
{
 database.ref("Food").update({
     Count : food

 })
}
function displaymilk()
{
  var a = 100
  for (var i = 1; i <= food; i = i + 1)
  {
   image (mikli , a,550,20,20)
   a = a + 20
  }
}


