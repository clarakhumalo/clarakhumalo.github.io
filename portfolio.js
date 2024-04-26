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
