// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {
  // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
  // console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty("--primary-color", mainColors);

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

let bachGround = true;
let setinter;

// Check If There's Local Storage Color Option
let backgroundLocalItem = localStorage.getItem("BackGround_option");

// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {
  // Remove Active Class From All Spans
  document.querySelectorAll(".background-list span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    bachGround = true;
    document.querySelector(".background-list .yes").classList.add("active");
  } else {
    bachGround = false;
    document.querySelector(".background-list .no").classList.add("active");
  }
}

let Background = document.querySelector(".laning-page");

let imgs = ["02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.png", "07.jpg"];

function normalize() {
  if (bachGround === true) {
    setinter = setInterval(() => {
      let randomnum = Math.floor(Math.random() * imgs.length);
      Background.style.backgroundImage = `url("imgs/${imgs[randomnum]}")`;
    }, 5000);
  }
}

// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin For Rotation on Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach((li) => {
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--primary-color",
      e.target.dataset.color
    );
    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);
  });
});

// Switch Colors
const bachGroundEl = document.querySelectorAll(".background-list span");

// Loop On All List span
bachGroundEl.forEach((span) => {
  // Click On Every List Items
  span.addEventListener("click", (e) => {
    handleActive(e);

    if (bachGroundEl.classList === "yes") {
      bachGround = true;
      normalize();
      localStorage.setItem("background_option", true);
    } else {
      bachGround = false;
      clearInterval(setinter);
      localStorage.setItem("background_option", false);
    }
  });
});

// Handle Active State
function handleActive(ev) {
  // Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  // Add Active Class On Self
  ev.target.classList.add("active");
}
normalize();

////////////////// Our Skills //////////////////

let Skills = document.querySelector(".skills");
// console.log(Skills);

window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = Skills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = Skills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  let cal = skillsOffsetTop + skillsOuterHeight - windowHeight;

  if (windowScrollTop < cal) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

/////////////// Our Gallary
let ourGallary = document.querySelectorAll(".gallary img");

ourGallary.forEach((img) => {
  img.addEventListener("click", (e) => {
    //  Create Popup Overlay
    let PopupOverlay = document.createElement("div");

    //  Add class to Popup Overlay
    PopupOverlay.className = "overlay";

    //  Append Popup Overlay To body
    document.body.appendChild(PopupOverlay);

    //  Create Popup Box
    let PopupBox = document.createElement("div");

    //  Add class to Popup Overlay
    PopupBox.className = "PopupBox";

    if (img.alt !== null) {
      let subheading = document.createElement("h2");

      let subheadingText = document.createTextNode(img.alt);

      subheading.appendChild(subheadingText);

      PopupBox.appendChild(subheading);
    }

    let popupimg = document.createElement("img");

    popupimg.src = img.src;

    PopupBox.appendChild(popupimg);

    document.body.appendChild(PopupBox);

    // Create Close btn

    let btn = document.createElement("span");

    btn.className = "close";

    let btnText = document.createTextNode("x");

    btn.appendChild(btnText);

    PopupBox.appendChild(btn);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentNode.remove();

    document.querySelector(".overlay").remove();
    console.log(document.querySelector(".overlay").remove());
  }
});

// Bullets

let bullets = document.querySelectorAll(".bullets .bullet");

bullets.forEach((bullet) => {
  bullet.addEventListener("click", function (e) {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let links = document.querySelectorAll(".links a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletLocalItem === "block") {
    bulletsContainer.style.display = "block";

    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";

    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";

      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";

      localStorage.setItem("bullets_option", "none");
    }

    handleActive(e);
  });
});

document.querySelector(".btn").onclick = function () {
  localStorage.clear();
  window.location.reload();
};

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  e.stopPropagation();

  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");

      tLinks.classList.toggle("open");
    }
  }
});
tLinks.onclick = function (e) {
  e.stopPropagation();
};
