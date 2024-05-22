//alert("javascript works")
function magic8ball() {
    askAQuestion();
    shake();
    getAFortune();
}


function askAQuestion() {
    //NOTHING
    //alert ("the magic 8ball will give you a fortune...")
}

function shake() {
    //alert ("SHAKE! SHAKE! SHAKE!")
}

function getAFortune() {
    //alert ("tonight both sides of your pillow will be warm")
    //random
    //choose andwer
    var fortunes = ["yes", "no", "maybe"];
    var num = randomNumber(fortunes.length);
    alert(fortunes[num]);
}

function displayFortune (fortune) {
    alert(fortune)
}

function randomNumber(n) {
    return Math.floor(Math.random() * n)
}