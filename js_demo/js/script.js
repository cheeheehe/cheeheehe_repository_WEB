function askQuestion () {
var q= prompt("do you have a favorite track?");
if (q !=null) {
    document.getElementById("question").innerHTML=
    'hey!' + q + 'is a great song!'
}
}

function showImage(){
    var image=document.getElementById ('surprise')
    image.src= "images/tswizzle.jpg"
}