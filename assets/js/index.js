const card = document.querySelector('.card');
const container = document.querySelector('.container');
const titile = document.querySelector('.title');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');
const sneaker = document.querySelector('.sneaker img');

container.addEventListener('mousemove', (e) => {
    // console.log(e.pageX);
    // let xAxis = (window.innerWidth / 2 - e.pageX)/20;
    // let yAxis = (window.innerHeight / 2 - e.pageY)/20; dont neeed
    

    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
})
//Event in
container.addEventListener('mouseenter', e => {
    card.style.transition = "none";
    titile.style.transform = "translateZ(150px)";
    sizes.style.transform = "translateZ(150px)";
    purchase.style.transform = "translateZ(150px)";
    sneaker.style.transform = `translateZ(150px)`;
})
//Event out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 1s ease";
    titile.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px)";

    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
})