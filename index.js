const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");
const container = document.querySelector(".container");
const scrollElement = document.querySelectorAll('.js-scroll');
const loading = document.querySelector('.box-loading');
const mainLoad = document.querySelector('.main-load');

// loading

window.addEventListener('load', ()=>{
    loading.style.opacity = "0";
    loading.style.zIndex = "-1";
    mainLoad.style.display = "block";
});

// hanburger toggle
burger.onclick=()=>{
    burger.classList.toggle('active');

    if(burger.classList.contains("active")){
        burger.children[1].style.display = "none";
        burger.children[0].style.display = "block";
        navigation.style.transform = "translateX(0)";
    }
    else{
        burger.children[1].style.display = "block";
        burger.children[0].style.display = "none";
        navigation.style.transform = "translateX(-100%)";
    }
}

// function to translate nav 
container.onclick=()=>{
    if(burger.classList.contains('active')){
        burger.classList.remove('active');
        navigation.style.transform = "translateX(-100%)";
        burger.children[1].style.display = "block";
        burger.children[0].style.display = "none";
    }

}

// function animation scroll

function elementInView (item, percentageScroll = 100){
    const distanceElement = item.getBoundingClientRect().top;
    return (
        distanceElement <= (window.innerHeight * (percentageScroll/100))
    );
};

function displayScrollElement(item){
    item.classList.add('scrolled');
}

function handleScrollAnimation (){
    scrollElement.forEach(item =>{
        if(elementInView(item, 100)){
            displayScrollElement(item);
        }
        else{
            hideScrollAnimation(item);
        }
    })
}

function hideScrollAnimation(item){
    item.classList.remove('scrolled');
}

window.addEventListener('scroll', ()=>{
    handleScrollAnimation();
})