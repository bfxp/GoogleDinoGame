var char = document.getElementById("char");
var object = document.getElementById("object");




function jump(){
    if(char.classList != "animate"){
    char.classList.add("animate");
    }
    setTimeout(function(){
        char.classList.remove("animate");
    }, 500);
}


var checkDead = setInterval(function(){
    //This checks to see if the character is at the top of the position. It'll stop at 100px
    // of this block and see if the two object/char is hitting each other
    var characterTop =
    parseInt(window.getComputedStyle(char).getPropertyValue("top"));

    var objectLeft =
    parseInt(window.getComputedStyle(object).getPropertyValue("left"));


    //This if statement is determining the pixels of the object and character.
    //If they both touch each other then it would throw an alert that would display a "you lose"
    if(objectLeft<20 && objectLeft > 0 && characterTop >= 130){
        object.style.animation = "none";
        object.style.display = 'none';
        alert("you just lost");
    } 

},10);