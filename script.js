document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    var typewriterTextElement = document.getElementById('typewriter-text');
    var text = "Te Amo My Love";
    var i = 0;
    var speed = 150; 

    var promise = video.play();

    if (promise !== undefined) {
        promise.then(_ => {
            typeWriter();
        }).catch(error => {
            console.log("Auto-play was prevented");
            typeWriter();
        });
    }

    function typeWriter() {
        if (i < text.length) {
            typewriterTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            typewriterTextElement.style.borderRight = 'none';
        }
    }
});