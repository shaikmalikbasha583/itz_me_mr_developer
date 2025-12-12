// Initialize Materialize Components
function initMaterialize() {
  // Mobile sidenav initialisation
  const sideNaveElements = document.querySelectorAll(".sidenav");
  const sideNaveOptions = {
    edge: "right", // opens from right
    inDuration: 250,
  };
  M.Sidenav.init(sideNaveElements, sideNaveOptions);

  // Modal initialisation
  const modalElems = document.querySelectorAll(".modal");
  const modalOptions = {
    opacity: 0.9,
    inDuration: 300,
  };
  M.Modal.init(modalElems, modalOptions);

  // Tabs initialisation
  const tabElems = document.querySelectorAll(".tabs");
  const tabOptions = {
    swipeable: true,
    duration: 200,
  };
  M.Tabs.init(tabElems, tabOptions);

  // Carousel initialisation
  var carouselElems = document.querySelectorAll(".carousel");
  const carouselOptions = {
    indicators: true,
    duration: 200,
  };

  carouselInstances = M.Carousel.init(carouselElems, carouselOptions);

  // Auto rotate
  setInterval(() => {
    instances[0].next();
  }, 3000);

  let autoRotate = setInterval(() => instance.next(), 3000);

  // Pause on hover
  elem.addEventListener("mouseenter", () => {
    clearInterval(autoRotate);
  });

  // Resume on leave
  elem.addEventListener("mouseleave", () => {
    autoRotate = setInterval(() => instance.next(), 3000);
  });
}

function animateText() {
  // ================= Typing / Rotating Text Animation =================
  const phrases = [
    "data-driven solutions",
    "scalable data pipelines",
    "intelligent APIs",
    "cloud-native architectures",
    "automated machine learning workflows",
    "end-to-end analytics systems",
  ];

  const animatedText = document.getElementById("animated-text");
  let phraseIndex = 0;
  let letterIndex = 0;
  let currentPhrase = "";
  let isDeleting = false;

  function typeEffect() {
    currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      animatedText.textContent = currentPhrase.substring(0, letterIndex--);
    } else {
      animatedText.textContent = currentPhrase.substring(0, letterIndex++);
    }

    let typingSpeed = isDeleting ? 60 : 100;

    if (!isDeleting && letterIndex === currentPhrase.length) {
      typingSpeed = 1500; // pause at full text
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 300;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();
}

function initAfterDOMLoad() {
  initMaterialize();
  animateText();
}

document.addEventListener("DOMContentLoaded", initAfterDOMLoad);

// GitHub Calendar Initialization
GitHubCalendar(".calendar", "malik-shaik-cos", {
  responsive: true,
  summary_text: "Contributions in the last year",
});
