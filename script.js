/*==========================================
FOR NAFISA WEBSITE
VERSION 5
==========================================*/

const openingScreen = document.getElementById("openingScreen");
const openBtn = document.getElementById("openBtn");
const mainCard = document.getElementById("mainCard");

const showMore = document.getElementById("showMore");
const secretBox = document.getElementById("secretBox");

const showEnding = document.getElementById("showEnding");
const endingPage = document.getElementById("endingPage");

const backBtn = document.getElementById("backBtn");

const secretBtn = document.getElementById("secretBtn");
const secretPage = document.getElementById("secretPage");

const music = document.getElementById("bgMusic");


/*==========================================
OPEN WEBSITE
==========================================*/

openBtn.addEventListener("click", () => {

    openingScreen.style.opacity = "0";

    setTimeout(() => {

        openingScreen.style.display = "none";

        mainCard.classList.remove("hidden");

    }, 700);

    music.play().catch(() => {});

});


/*==========================================
SHOW SECRET MESSAGE
==========================================*/

showMore.addEventListener("click", () => {

    secretBox.classList.remove("hidden");

    secretBox.scrollIntoView({

        behavior: "smooth"

    });

});


/*==========================================
SHOW ENDING
==========================================*/

showEnding.addEventListener("click", () => {

    endingPage.classList.remove("hidden");

    endingPage.scrollIntoView({

        behavior: "smooth"

    });

});


/*==========================================
BACK TO TOP
==========================================*/

backBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==========================================
SECRET WORLD
==========================================*/

secretBtn.addEventListener("click", () => {

    mainCard.classList.add("hidden");
    secretPage.classList.remove("hidden");
    secretEffect();
    fadeMusic(0.35);
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/*==========================================
SCROLL REVEAL
==========================================*/

const revealItems = document.querySelectorAll(".fade-section");

function revealOnScroll(){

    revealItems.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


/*==========================================
LOVE GENERATOR
==========================================*/
const heartsContainer = document.querySelector(".hearts");

function createLove(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "🤍";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (18+Math.random()*20)+"px";

    heart.style.animationDuration =
    (7+Math.random()*5)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createLove,700);
/*==========================================
SPARKLE GENERATOR
==========================================*/

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML="✦";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.fontSize=(8+Math.random()*10)+"px";

    sparkle.style.animationDuration=(4+Math.random()*3)+"s";

    const sparklesContainer =
    document.querySelector(".sparkles");

    sparklesContainer.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },7000);

}

setInterval(createSparkle,800);


/*==========================================
LIGHTBOX GALLERY
==========================================*/

const photos = document.querySelectorAll(".photo img");
console.log(photos.length);

// Membuat lightbox
const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span id="closeLightbox">&times;</span>
    <img id="lightboxImg" src="">
`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

// Klik foto
photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImg.src = photo.src;

    });

});

// Tombol X
closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

// Klik background hitam
lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

// Tombol ESC (untuk PC)
document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});

/*==========================================
SECRET EFFECT
==========================================*/

function secretEffect(){

    for(let i=0;i<30;i++){

        setTimeout(()=>{

            createLove();

            createSparkle();

        },i*100);

    }

}

/*==========================================
SAKURA
==========================================*/

const sakuraContainer = document.createElement("div");

sakuraContainer.className = "sakura-container";

document.body.appendChild(sakuraContainer);

function createSakura(){

    const sakura = document.createElement("div");

    sakura.className = "sakura";

    sakura.innerHTML = "🌸";

    sakura.style.left = Math.random()*100+"vw";

    sakura.style.fontSize = (18+Math.random()*12)+"px";

    sakura.style.animationDuration =
    (8+Math.random()*6)+"s";

    sakuraContainer.appendChild(sakura);

    setTimeout(()=>{

        sakura.remove();

    },15000);

}

setInterval(createSakura,1800);

/*==========================================
MUSIC FADE
==========================================*/

function fadeMusic(target){

    const interval = setInterval(()=>{

        if(Math.abs(music.volume-target)<0.05){

            music.volume=target;

            clearInterval(interval);

        }else{

            if(music.volume>target){

                music.volume-=0.05;

            }else{

                music.volume+=0.05;

            }

        }

    },100);

}