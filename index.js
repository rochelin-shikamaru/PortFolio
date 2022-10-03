const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");
const container = document.querySelector(".container");
const scrollElement = document.querySelectorAll(".js-scroll");
const loading = document.querySelector(".box-loading");
const mainLoad = document.querySelector(".main-load");
const navA = document.querySelectorAll("nav a");


// loading

window.addEventListener("load", () => {
  loading.style.opacity = "0";
  mainLoad.style.display = "block";
});

// hanburger toggle
burger.onclick = () => {
  burger.classList.toggle("active");

  if (burger.classList.contains("active")) {
    burger.children[1].style.display = "none";
    burger.children[0].style.display = "block";
    navigation.style.transform = "translateX(0)";
  } else {
    burger.children[1].style.display = "block";
    burger.children[0].style.display = "none";
    navigation.style.transform = "translateX(-100%)";
  }
};

// function to translate nav to left
const translateNav = () => {
  if (burger.classList.contains("active")) {
    burger.classList.remove("active");
    navigation.style.transform = "translateX(-100%)";
    burger.children[1].style.display = "block";
    burger.children[0].style.display = "none";
  }
}
container.addEventListener("click", translateNav);
navA.forEach(item => {
  item.addEventListener("click", translateNav);
})

// function animation scroll

function elementInView(item, percentageScroll = 100) {
  const distanceElement = item.getBoundingClientRect().top + 100;
  return distanceElement <= window.innerHeight * (percentageScroll / 110);
}

function displayScrollElement(item) {
  item.classList.add("scrolled");
}

function handleScrollAnimation() {
  scrollElement.forEach((item) => {
    if (elementInView(item, 100)) {
      displayScrollElement(item);
    }
  });
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// resize nav when width >= 768

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navigation.style.transform = "translateX(0)";
  } else {
    navigation.style.transform = "translateX(-100%)";
  }
});

// function to remove and add class active--navLink

const navLink = () => {
  const a = document.querySelectorAll("nav a");
  a.forEach((item) => {
    item.onclick = () => {
      document
        .querySelector(".active--navLink")
        .classList.remove("active--navLink");
      item.classList.add("active--navLink");
    };
  });
};
navLink();

// event to change active link in nav link when scroll is active

window.addEventListener("scroll", () => {
 
  let scrollNav = document
    .querySelector(".js-scroll-nav")
    .getBoundingClientRect().top;
    console.log(scrollNav);
  if (window.innerWidth > 490) {
   // navigation.style.transform = "translateX(0)";
  
    if (scrollNav > -750 && scrollNav <= 0) {
      document
        .querySelector(".active--navLink")
        .classList.remove("active--navLink");
      document.querySelector(".scroll--accueil").classList.add("active--navLink");
    } else if (scrollNav > -2346 && scrollNav <= -751) {
      document
        .querySelector(".active--navLink")
        .classList.remove("active--navLink");
      document.querySelector(".scroll--about").classList.add("active--navLink");
    } else if (scrollNav > -9324 && scrollNav <= -2347) {
      document
        .querySelector(".active--navLink")
        .classList.remove("active--navLink");
      document
        .querySelector(".scroll--projects")
        .classList.add("active--navLink");
    } else {
      document
        .querySelector(".active--navLink")
        .classList.remove("active--navLink");
      document
        .querySelector(".scroll--contact")
        .classList.add("active--navLink");
    }
  } else {
    
    if (scrollNav > -228 && scrollNav <= 0) {
      document
        .querySelector(".active--navLink")
        .classList.remove("active--navLink");
      document
        .querySelector(".scroll--accueil")
        .classList.add("active--navLink");
    } else if (scrollNav > -3536 && scrollNav <= -229) {
      document
        .querySelector(".active--navLink")
        .classList.remove("active--navLink");
      document.querySelector(".scroll--about").classList.add("active--navLink");
    } else if (scrollNav > -8202 && scrollNav <= -3536) {
      document
        .querySelector(".active--navLink")
        .classList.remove("active--navLink");
      document
        .querySelector(".scroll--projects")
        .classList.add("active--navLink");
    } else {
      document
        .querySelector(".active--navLink")
        .classList.remove("active--navLink");
      document
        .querySelector(".scroll--contact")
        .classList.add("active--navLink");
    }
  }
});

// function to show more description

const handleClickShowMore = () => {
  const backdrop = document.querySelector(".lightBox");
  backdrop.style.display = "flex";
  burger.children[1].style.display = "none";


}

// function to close show more

const handleClickcross = () => {
  const backdrop = document.querySelector(".lightBox");
  backdrop.style.display = "none";
  burger.children[1].style.display = "block";
 
}


/// ends
