function playSound(parm) {
    this.sound = document.getElementById(parm);
    this.sound.play();
}

function RndSound() {
    let thissound;
    let soundno;
    /* ignore parameter */
    soundno = Math.floor(Math.random() * (5)); // rnd from 0 to 4
    switch (soundno) {
        case 0:
            thissound = "laugh";
            break;
        case 1:
            thissound = "laugh2";
            break;
        case 2:
            thissound = "laugh3";
            break;
        case 3:
            thissound = "bark";
            break;
        default:
            thissound = "meow";
    }
    playSound(thissound);
}