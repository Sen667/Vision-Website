
const letters = "#+©-&*0KIR1L2345"
const lettersLength = letters.length
const regex = /\s/

function applyRDMEffect(element) {
  element.addEventListener("mouseover", (event) => {
    let iterations = 0;
    
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
          if (regex.test(letter)) return letter;
          if(index < iterations) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * lettersLength)]
        })
        .join("");
      
      if(iterations >= event.target.dataset.value.length) clearInterval(interval);
      
      iterations += 1 / 3;
    }, 30);
  });

  // Set the data-value attribute
  element.dataset.value = element.innerText;
}

export function initializeRDMEffect() {
  const title = document.getElementById('visionTitle')
  const navItems = document.querySelectorAll('ul')
  
  if (title) {
    applyRDMEffect(title);
  } else {
    console.warn("Element with ID 'visionTitle' not found for RDM effect");
  }

  navItems.forEach(item => {
    applyRDMEffect(item);
  });
}