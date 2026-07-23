

document.addEventListener("DOMContentLoaded", function () {

 
  const toggles = document.querySelectorAll(".dropdown-toggle");

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const menu = toggle.nextElementSibling;
      const isOpen = menu.classList.contains("show");

      closeAllMenus();
      if (!isOpen) menu.classList.add("show");
    });
  });

  document.addEventListener("click", closeAllMenus);

  function closeAllMenus() {
    document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
      menu.classList.remove("show");
    });
  }

  
  const catalogBox = document.querySelector(".box1");
  if (catalogBox) {
    const catalogBtn = catalogBox.closest("button");
    catalogBtn.addEventListener("click", function () {
      alert("Catalog coming soon!");
     
    });
  }

 
  const callBtn = document.querySelector(".btn");
  if (callBtn) {
    callBtn.addEventListener("click", function () {
      window.location.href = "tel:+919113898065";
    });
  }

  
  document.querySelectorAll(".whatsapp").forEach(function (wa) {
    const button = wa.closest("button");
    if (button) {
      button.addEventListener("click", function () {
        const message = encodeURIComponent(
          "Hi, I'm interested in your corrugated boxes."
        );
        window.open("https://wa.me/918217209612?text=" + message, "_blank");
      });
    }
  });

  
  const dots = document.querySelectorAll(".dot i");
  let currentSlide = 0;

  function setActiveDot(index) {
    dots.forEach(function (dot, i) {
      dot.classList.toggle("fa-solid", i === index);
      dot.classList.toggle("fa-regular", i !== index);
    });
    currentSlide = index;
  }

  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      setActiveDot(index);
    });
  });

  if (dots.length > 0) {
    setActiveDot(0);
    setInterval(function () {
      setActiveDot((currentSlide + 1) % dots.length);
    }, 3000);
  }

  
  const leftImgBtn = document.querySelector(".box21 button");
  const rightImgBtn = document.querySelector(".box23 button");

  if (leftImgBtn) {
    leftImgBtn.addEventListener("click", function () {
      setActiveDot((currentSlide - 1 + dots.length) % dots.length);
    });
  }
  if (rightImgBtn) {
    rightImgBtn.addEventListener("click", function () {
      setActiveDot((currentSlide + 1) % dots.length);
    });
  }

 
  const cardLinks = {
    "STANDARD UNIVERSAL BOXES": "standard-universal-boxes.html",
    "SELF LOCKING MAILER BOXES": "self-locking-mailer-boxes.html",
    "RIGID GIFTING BOXES": "rigid-gifting-boxes.html",
    "PIZZA BOXES": "pizza-boxes.html",
    "FLAT & TALL BOXES": "flat-tall-boxes.html",
    "LARGE BOXES": "large-boxes.html",
    "STRONG BOXES": "strong-boxes.html",
    "RELOCATION BOXESL": "relocation-boxes.html",
    "E-COM CORNER": "ecom-corner.html"
  };

  document.querySelectorAll(".card").forEach(function (card) {
    card.style.cursor = "pointer";

    card.addEventListener("click", function () {
      
      const headings = card.querySelectorAll("h3");
      let title = "";
      headings.forEach(function (h) {
        title += h.innerText.trim() + " ";
      });
      title = title.trim().replace(/\s+/g, " "); 

      const url = cardLinks[title];

      if (url) {
        window.location.href = url; 
      } else {
        console.warn("No page mapped for card:", title);
      }
    });
  });

});