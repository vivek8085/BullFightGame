score=0;
cross=true

aud=new Audio('music.mp3');
audgo=new Audio('mixkit-fairytale-game-over-1945.wav');
jump=new Audio('cartoon-jump-6462.mp3');

setTimeout(() => {
    aud.play()
},100);
document.onkeydown=function(e){
    console.log("key code:",e.keyCode)
    if (e.keyCode==38) {
        jump.play();
        player=document.querySelector('.player');
        player.classList.add('animate');
        setTimeout(()=>{
            player.classList.remove('animate');
        },700);
    }
    if (e.keyCode==39) {
        player=document.querySelector('.player');
        playerx=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'))
        player.style.left=playerx+150+"px"
    }
    if (e.keyCode==37) {
        player=document.querySelector('.player');
        playerx=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'))
        player.style.left=(playerx-150)+"px"
    }
}

setInterval(() => {
    player=document.querySelector('.player')
    ended=document.querySelector('.ended')
    obsticle=document.querySelector('.obsticle')
    px=parseInt(window.getComputedStyle(player,null).getPropertyValue('left'))
    py=parseInt(window.getComputedStyle(player,null).getPropertyValue('top'))
    ox=parseInt(window.getComputedStyle(obsticle,null).getPropertyValue('left'))
    oy=parseInt(window.getComputedStyle(obsticle,null).getPropertyValue('top'))
    x=Math.abs(px-ox)
    y=Math.abs(py-oy)
    // console.log(x,y);
    if (x<73 && y<52) {
        // ended.style.visibility='visible';
        // ended.innerHTML="Game over!";
        audgo.play();
        alert('Game Over!\nYour Total score is:'+score);
        obsticle.classList.remove('obst');
        setTimeout(() => {
            audgo.pause();
            aud.pause();
        }, 1000);
    }
    else if(x<73 && cross){
        score+=1;
        update(score);
        cross=false
        setTimeout(() => {
            cross=true
        }, 1000);
        setTimeout(() => {
            dur=parseFloat(window.getComputedStyle(obsticle,null).getPropertyValue('animation-duration'))
            ndur=dur-0.1;
            obsticle.style.animationDuration=ndur+'s';
        }, 500);
    }

}, 10);

function update(score) {
    Countscore.innerHTML="Your Score: "+score;
}