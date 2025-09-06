
var button_no=document.querySelectorAll(".drum").length;



for(var i=0;i<button_no;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     
    var button=this.innerHTML;

    makesound(button);
    buttonanimation(button);
    
    
});
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});



function makesound(key){
    switch (key) {
        case 'w':
            var audio1=new Audio('sounds/tom-1.mp3');
            // alert("I got clicked");
            audio1.play();    
            break;
        
        case 'a':
            var audio2=new Audio('sounds/tom-2.mp3');
            audio2.play();
            break;
        case 's':
            var audio3=new Audio('sounds/tom-3.mp3');
            audio3.play();
            break;
        case 'd':
            var audio4=new Audio('sounds/tom-4.mp3');
            audio4.play();
            break;
        case 'j':
            var audio5=new Audio('sounds/snare.mp3');
            audio5.play();
            break;
        case 'k':
            var audio6=new Audio('sounds/crash.mp3');
            audio6.play();
            break;
        case 'l':
            var audio7=new Audio('sounds/kick-bass.mp3');
            audio7.play();
            break;
        default:
            console.log(key);
            break;
    }

}

function buttonanimation(currentbtn){
 var activebtn=document.querySelector("."+currentbtn);

 activebtn.classList.add("pressed");

 setTimeout(function(){
    activebtn.classList.remove("pressed");
 },100)
 
}

// document.querySelector(".a").addEventListener("click",clicked);
// function clicked(){
//     alert("I got clicked");
// }
// document.querySelector(".s").addEventListener("click",clicked);
// function clicked(){
//     alert("I got clicked");
// }
// document.querySelector(".d").addEventListener("click",clicked);
// function clicked(){
//     alert("I got clicked");
// }
// document.querySelector(".j").addEventListener("click",clicked);
// function clicked(){
//     alert("I got clicked");
// }
// document.querySelector(".k").addEventListener("click",clicked);
// function clicked(){
//     alert("I got clicked");
// }
// document.querySelector(".l").addEventListener("click",clicked);
// function clicked(){
//     alert("I got clicked");
// }