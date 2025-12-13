const projectHighlights = [
  "Automated ETL pipelines.",
  "High-performance APIs.",
  "Cloud-native analytics.",
  "Real-time job support.",
  "Data-driven dashboards.",
];

const phrases = [
  "data-driven solutions.",
  "scalable data pipelines.",
  "intelligent APIs.",
  "cloud-native architectures.",
  "automated machine learning workflows.",
  "end-to-end analytics systems.",
];

// Initialize Materialize Components
function initMaterialize() {
  // Mobile sidenav initialization
  const sideNavElements = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sideNavElements, {
    edge: "left",
    inDuration: 250,
  });

  // Dropdown initialization
  var navDropDown = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(navDropDown, {
    coverTrigger: false, // dropdown appears below the trigger
    constrainWidth: false, // allow width to fit content
  });

  // Modal initialization
  const modalElems = document.querySelectorAll(".modal");
  M.Modal.init(modalElems, {
    opacity: 0.9,
    inDuration: 300,
  });

  // Tabs initialization
  const tabElems = document.querySelectorAll(".tabs");
  M.Tabs.init(tabElems, {
    swipeable: true,
    duration: 200,
  });

  // Carousel initialization
  const carouselElems = document.querySelectorAll(".carousel");
  const carouselInstances = M.Carousel.init(carouselElems, {
    indicators: true,
    duration: 200,
  });

  // Guard: no carousel found
  if (!carouselInstances || carouselInstances.length === 0) return;

  const carouselInstance = carouselInstances[0];
  const carouselElem = carouselElems[0];

  // Auto rotate
  let autoRotate = setInterval(() => {
    carouselInstance.next();
  }, 3000);

  // Pause on hover
  carouselElem.addEventListener("mouseenter", () => {
    clearInterval(autoRotate);
  });

  // Resume on leave
  carouselElem.addEventListener("mouseleave", () => {
    autoRotate = setInterval(() => {
      carouselInstance.next();
    }, 3000);
  });
}

function animateText(phrases, targetId) {
  const animatedText = document.getElementById(targetId);
  if (!animatedText) return;

  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    animatedText.textContent = isDeleting
      ? currentPhrase.substring(0, letterIndex--)
      : currentPhrase.substring(0, letterIndex++);

    let typingSpeed = isDeleting ? 60 : 100;

    if (!isDeleting && letterIndex === currentPhrase.length) {
      typingSpeed = 1500;
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
  animateText(phrases, "animated-text");
  animateText(projectHighlights, "dynamic-project-text");
  animateProjects();
}

document.addEventListener("DOMContentLoaded", initAfterDOMLoad);
