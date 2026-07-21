// ==========================
// EcoShell Paint
// SCRIPT.JS
// ==========================


// ANIMACIÓN AL HACER SCROLL

const elements = document.querySelectorAll(
    ".card, .step, .product, .review, .stat, .problem-box"
);


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});



elements.forEach(element=>{

    element.classList.add("fade");

    observer.observe(element);

});





// ==========================
// CONTADOR DE IMPACTO
// ==========================


const counters = document.querySelectorAll(".stat h3");


let started = false;


function startCounter(){


    const section = document.querySelector(".impact");


    const position = section.getBoundingClientRect().top;


    if(position < window.innerHeight && !started){


        started=true;


        counters.forEach(counter=>{


            let target = parseInt(counter.innerText);


            let number = 0;


            let speed = target / 80;



            let update = setInterval(()=>{


                number += speed;


                if(number >= target){


                    counter.innerText = target + "%";


                    clearInterval(update);


                }else{


                    counter.innerText = Math.floor(number)+"%";


                }



            },20);



        });


    }



}



window.addEventListener(
    "scroll",
    startCounter
);





// ==========================
// SCROLL SUAVE PARA LINKS
// ==========================


document.querySelectorAll("a[href^='#']")
.forEach(link=>{


    link.addEventListener("click",function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});





// ==========================
// EFECTO NAVBAR
// ==========================


window.addEventListener("scroll",()=>{


    const header=document.querySelector("header");


    if(window.scrollY>50){


        header.style.background=
        "rgba(15,25,40,.98)";


    }else{


        header.style.background=
        "rgba(25,35,52,.93)";


    }


});