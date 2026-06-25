// ===============================
// Happy Birthday Nada ❤️
// ===============================

AOS.init({
    duration: 1200,
    once: true
});

const loader = document.getElementById("loader");

window.onload = () => {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
    }, 2000);
};

// ===============================
// Gift Button
// ===============================

const btn = document.getElementById("openGift");
const music = document.getElementById("music");

btn.onclick = () => {

    // تشغيل الموسيقى
    music.play().catch(() => {});

    // الألعاب النارية (Confetti)
    fireConfetti();

    // بالونات
    balloons();

    // قلوب
    setInterval(createHeart, 300);

    // نزول للرسالة
    document
        .getElementById("message")
        .scrollIntoView({
            behavior: "smooth"
        });

    // أنيميشن الزر
    gsap.to(btn,{
        scale:1.2,
        duration:.3,
        yoyo:true,
        repeat:1
    });

}

// ===============================
// Confetti
// ===============================

function fireConfetti(){

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

}

// ===============================
// Floating Hearts
// ===============================

function createHeart(){

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*40)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

// ===============================
// Balloons
// ===============================

function balloons(){

const emojis=["🎈","🎈","🎈","🎈","🎈","🎉"];

for(let i=0;i<25;i++){

let balloon=document.createElement("div");

balloon.className="balloon";

balloon.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

balloon.style.left=Math.random()*100+"vw";

balloon.style.animationDuration=(6+Math.random()*5)+"s";

balloon.style.fontSize=(40+Math.random()*40)+"px";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},12000);

}

}

// ===============================
// Heart Message
// ===============================

const heart=document.getElementById("heart");

const text=document.getElementById("hiddenText");

heart.onclick=()=>{

text.style.display="block";

gsap.from(text,{

opacity:0,

y:50,

duration:1

});

fireConfetti();

}

// ===============================
// Stars Background
// ===============================

tsParticles.load("particles",{

background:{
color:"transparent"
},

fpsLimit:60,

particles:{

number:{
value:80
},

color:{
value:"#ffffff"
},

shape:{
type:"circle"
},

opacity:{
value:0.7
},

size:{
value:2
},

move:{

enable:true,

speed:0.6

}

}

});

// ===============================
// Fireworks Every 8 Seconds
// ===============================

setInterval(()=>{

confetti({

particleCount:150,

spread:150,

origin:{

x:Math.random(),

y:Math.random()/2

}

});

},8000);

// ===============================
// Floating Sparkles
// ===============================

setInterval(()=>{

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top="100vh";

star.style.fontSize=(15+Math.random()*20)+"px";

star.style.transition="6s linear";

document.body.appendChild(star);

setTimeout(()=>{

star.style.top="-100px";

star.style.opacity=0;

},100);

setTimeout(()=>{

star.remove();

},6000);

},500);

// ===============================
// Title Animation
// ===============================

gsap.from(".title",{

opacity:0,

y:-100,

duration:2

});

gsap.from(".subtitle",{

opacity:0,

delay:.7,

duration:2

});

gsap.from("#openGift",{

scale:0,

delay:1,

duration:1

});

// ===============================
// Gallery Animation
// ===============================

gsap.from(".photo",{

scrollTrigger:".gallery",

opacity:0,

y:100,

stagger:.3

});