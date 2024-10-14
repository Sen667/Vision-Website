import gsap from 'gsap';

export function initializeProjectEffects() {
  const imageSources = [
    "/images/Frame.png",
    "/images/Frame.png",
    "/images/Frame.png",
    "/images/Frame.png",
    
  ];

  const menuItems = document.querySelectorAll(".menu-item");


  const appendImages = (src) => {
    const preview1 = document.querySelector(".preview-img-1");
    const preview2 = document.querySelector(".preview-img-2");

    const img1 = document.createElement("img");
    const img2 = document.createElement("img");

    img1.src = src;
    img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
    img2.src = src;
    img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

    preview1.appendChild(img1);
    preview2.appendChild(img2);

    gsap.to([img1, img2], {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "power3.out",
      onComplete: function () {
        removeExtraImages(preview1);
        removeExtraImages(preview2);
      },
    });
  };

  function removeExtraImages(container) {
    while (container.children.length > 10) {
      container.removeChild(container.firstChild);
    }
  }

  menuItems.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      mouseOverAnimation(item);
      appendImages(imageSources[index]);
    });

    item.addEventListener("mouseout", () => {
      mouseOutAnimation(item);
    });
  });

  const mouseOverAnimation = (elem) => {
    gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
      top: "-100%",
      duration: 0.3,
    });
    gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
      top: "0%",
      duration: 0.3,
    });
  };

  const mouseOutAnimation = (elem) => {
    gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
      top: "0%",
      duration: 0.3,
    });
    gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
      top: "100%",
      duration: 0.3,
    });
  };

  const menu = document.querySelector(".menu");
  if (menu) {
    menu.addEventListener("mouseout", function () {
      gsap.to(".preview-img img", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.out",
      });
    });
  }

  document.addEventListener("mousemove", function (e) {
    const preview = document.querySelector(".preview");
    const projectSection = document.querySelector(".Project-page");
    if (preview && projectSection) {
      const rect = projectSection.getBoundingClientRect();
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        const offsetX = 250; // Moitié de la largeur de l'image
        const offsetY = 250; // Moitié de la hauteur de l'image
        gsap.to(preview, {
          x: e.clientX - offsetX,
          y: e.clientY - offsetY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  });
}
