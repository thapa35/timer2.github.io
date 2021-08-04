chess = document.getElementById("chess");
let reset = document.getElementById("reset");
Heading = document.getElementsByClassName("sec");
Timer = document.getElementsByClassName("timers");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let temp = 0;
let audio = new Audio("Timer.mp3");
let playstate = document.getElementById("playstate");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let swap = document.getElementById("swap");
let n1;
let n2;
let iterator1;
let turn;
let sec = 60;
n1 = sec;
n2 = sec;
let j=0;
let k=0;
let l = 0;
let hustler1 = window.prompt("Enter white player name: ");
let hustler2 = window.prompt("Enter the black player name: ");
let resigner1 = "arbitor1";
let resigner2 = "arbitor2";
let time = window.prompt("Enter the time in minutes: ");

time = Number(time);
turn = hustler1;
time1 = time;
time2 = time;

let iterator = setInterval(() => {
    if (temp!=0){
        clearInterval(iterator);
    }
    if (turn==hustler1){
        n1--;
    }
    if(turn==hustler2) {
        n2--;
    }
    if (n1==0){
        time1--;
        n1 = 60;
    }
    if (n2==0){
        time2--;
        n2=60;
    }
    Heading[0].innerHTML = `${time1}:${n1}`;
    Heading[1].innerHTML = `${time2}:${n2}`;
    if (time1==(-1) || time2==(-1)){
        clearInterval(iterator);
        if (turn==hustler1){
            name2.innerHTML = `<h1>${hustler2}</h1>`;
        }
        if(turn==hustler2){
            name1.innerHTML = `<h1>${hustler1}</h1>`;
        }
        audio.play();
    }
}, 1000);
sec--;

if (innerWidth<=innerHeight){
small = innerWidth;
}
else {
    small = innerHeight;
}
Heading = Array.from(Heading);
let length = Heading.length;
let i = 0;
while (i<length){
Heading[i].style = `width: 40%;height: 40%;font-size: ;border: 2px solid red;margin: auto;`;
i++;
}
playstate.addEventListener("click",()=>{
    if (turn==hustler1){
        turn = resigner1;
        playstate.innerHTML = "<h1>resume</h1>";
    }
    else if(turn==hustler2){
        turn=resigner2;
        playstate.innerHTML = "<h1>resume</h1>";
    }
    else if(turn==resigner1){
        turn=hustler1;
        playstate.innerHTML = "<h1>pause</h1>";
    }   


    else {
        turn=hustler2;
        playstate.innerHTML = "<h1>pause</h1>";
    }
});
swap.addEventListener("click",()=>{
    if (turn == hustler1){
        turn = hustler2;
    }
    else if(turn==hustler2) {
        turn = hustler1;
    }
    console.log(turn);
});
reset.addEventListener("click",()=>{
    clearInterval(iterator1);
    time1 = time;
    time2 = time;
    turn = hustler1;
    temp = 1;
    n1 = 60;
    n2 = 60;
    name2.innerHTML = "";
    name1.innerHTML = "";
    iterator1 = setInterval(() => {
        if (turn==hustler1){
            n1--;
        }
        if(turn==hustler2) {
            n2--;
        }
        if (n1==0){
            time1--;
            n1 = 60;
        }
        if (n2==0){
            time2--;
            n2=60;
        }
        Heading[0].innerHTML = `${time1}:${n1}`;
        Heading[1].innerHTML = `${time2}:${n2}`;
        if (time1==(-1) || time2==(-1)){
            clearInterval(iterator1);
            if (turn==hustler1){
                name2.innerHTML = `<h1>${hustler2}</h1>`;
            }
            if(turn==hustler2){
                name1.innerHTML = `<h1>${hustler1}</h1>`;
            }
            audio.play();
        }
    }, 1000);


});

