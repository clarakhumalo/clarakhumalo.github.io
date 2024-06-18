document.addEventListener('DOMContentLoaded', function() {
    const starry_background = document.getElementById('starry_background');
    var screenWidth= window.innerWidth;
    var screenHeight= window.innerHeight;

    for (let i = 5000; i < 7000; i++) {

        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * screenWidth/4 + 'vw';
        star.style.top = Math.random() * screenHeight/4 + 'vh';
        star.style.animationDuration = (Math.random() * 1 + 0.5) + 's'; 
        starry_background.appendChild(star);
    }
});

// let welcome=document.querySelector("welcome");
// function animateCharacters(element){
//     let spanCharacters=element.querySelectorAll("span");
//     for (let counter=0;counter<spanCharacters.length;counter++){
//         let spanCharacter=spanCharacters[counter];
//         let randomDuration=.2+Math.random() + 1;
//         spanCharacter.style.setProperty("--duration", randomDuration+"s");
//     }
//     setInitialRandomColor(spanCharacters);
//     welcome.addEventListener("animationiteration", changeColor, true);
// }
// animateCharacters(welcome);