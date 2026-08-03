// ============================================================
// ============================================================
//                 PREMIUM NAVIGATION SCRIPT START
// ============================================================
// ============================================================


// ==========================================================
// SELECT THE NAVIGATION ELEMENTS
// ==========================================================

// This selects the mobile hamburger menu button.
const menuButton = document.getElementById("menu-btn");

// This selects the mobile navigation menu.
const mobileMenu = document.getElementById("mobile-menu");

// This selects the Font Awesome icon inside the menu button.
const menuIcon = menuButton
  ? menuButton.querySelector("i")
  : null;

// This selects every link inside the mobile navigation menu.
const mobileLinks = document.querySelectorAll(".mobile-link");


// ==========================================================
// FUNCTION: OPEN THE MOBILE MENU
// ==========================================================

// This function opens the mobile navigation menu.
function openMobileMenu() {

  // Stop the function if any required element is missing.
  if (!menuButton || !mobileMenu || !menuIcon) {
    return;
  }

  // Remove the hidden class so that the menu becomes visible.
  mobileMenu.classList.remove("hidden");

  // Tell screen readers that the menu is now open.
  menuButton.setAttribute("aria-expanded", "true");

  // Update the accessibility description of the button.
  menuButton.setAttribute(
    "aria-label",
    "Close navigation menu"
  );

  // Remove the hamburger icon.
  menuIcon.classList.remove("fa-bars");

  // Add the X icon.
  menuIcon.classList.add("fa-xmark");

}


// ==========================================================
// FUNCTION: CLOSE THE MOBILE MENU
// ==========================================================

// This function closes the mobile navigation menu.
function closeMobileMenu() {

  // Stop the function if any required element is missing.
  if (!menuButton || !mobileMenu || !menuIcon) {
    return;
  }

  // Add the hidden class so that the menu disappears.
  mobileMenu.classList.add("hidden");

  // Tell screen readers that the menu is now closed.
  menuButton.setAttribute("aria-expanded", "false");

  // Reset the accessibility description of the button.
  menuButton.setAttribute(
    "aria-label",
    "Open navigation menu"
  );

  // Remove the X icon.
  menuIcon.classList.remove("fa-xmark");

  // Restore the hamburger icon.
  menuIcon.classList.add("fa-bars");

}


// ==========================================================
// OPEN OR CLOSE THE MENU WHEN THE BUTTON IS CLICKED
// ==========================================================

if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", function () {

    // Check whether the menu currently contains the hidden class.
    const menuIsHidden =
      mobileMenu.classList.contains("hidden");


    // If the menu is hidden, open it.
    if (menuIsHidden) {

      openMobileMenu();

    } else {

      // Otherwise, close it.
      closeMobileMenu();

    }

  });

}


// ==========================================================
// CLOSE THE MOBILE MENU AFTER A LINK IS CLICKED
// ==========================================================

// This prevents the menu from remaining open after the user
// chooses Home, About, Skills, Projects or Contact.

mobileLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    closeMobileMenu();

  });

});


// ==========================================================
// CLOSE THE MENU WHEN THE SCREEN BECOMES DESKTOP SIZE
// ==========================================================

// Tailwind's md breakpoint begins at 768 pixels.
//
// When the browser becomes 768 pixels wide or wider,
// the desktop menu becomes visible.
//
// Therefore, we close and reset the mobile menu.

window.addEventListener("resize", function () {

  if (window.innerWidth >= 768) {

    closeMobileMenu();

  }

});


// ==========================================================
// CLOSE THE MOBILE MENU WHEN ESCAPE IS PRESSED
// ==========================================================

// This gives keyboard users an easy way to close the menu.

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {

    closeMobileMenu();

  }

});


// ==========================================================
// CLOSE THE MOBILE MENU WHEN CLICKING OUTSIDE IT
// ==========================================================

// This makes the mobile navigation behave like a modern menu.
//
// If the menu is open and the user clicks outside the menu
// and outside the menu button, the menu closes automatically.

document.addEventListener("click", function (event) {

  // Stop if the required elements do not exist.
  if (!menuButton || !mobileMenu) {
    return;
  }

  // Check whether the menu is currently open.
  const menuIsOpen =
    !mobileMenu.classList.contains("hidden");

  // Check whether the click happened inside the mobile menu.
  const clickedInsideMenu =
    mobileMenu.contains(event.target);

  // Check whether the click happened on the menu button.
  const clickedMenuButton =
    menuButton.contains(event.target);


  // Close the menu only when:
  // 1. The menu is open.
  // 2. The click is outside the menu.
  // 3. The click is outside the menu button.

  if (
    menuIsOpen &&
    !clickedInsideMenu &&
    !clickedMenuButton
  ) {

    closeMobileMenu();

  }

});


// ==========================================================
// SMOOTH SCROLLING FOR INTERNAL PAGE LINKS
// ==========================================================

// This selects links whose href begins with #.
//
// Examples:
// #home
// #about
// #skills
// #projects
// #contact

const internalLinks =
  document.querySelectorAll('a[href^="#"]');


internalLinks.forEach(function (link) {

  link.addEventListener("click", function (event) {

    // Get the href value from the link.
    const targetId = link.getAttribute("href");


    // Ignore links that only contain #.
    if (!targetId || targetId === "#") {
      return;
    }


    // Find the matching section on the page.
    const targetSection =
      document.querySelector(targetId);


    // Continue only when the target section exists.
    if (targetSection) {

      // Prevent the browser's normal instant jump.
      event.preventDefault();


      // Scroll smoothly to the selected section.
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  });

});


// ============================================================
// ============================================================
//                  PREMIUM NAVIGATION SCRIPT END
// ============================================================
// ============================================================


// ============================================================
// ============================================================
//                 PROJECT VIDEO MODAL SCRIPT START
// ============================================================
// ============================================================


// ==========================================================
// SELECT THE REUSABLE VIDEO MODAL ELEMENTS
// ==========================================================

// Selects the complete video modal overlay.
const videoModal = document.getElementById("video-modal");

// Selects the button used to close the modal.
const closeVideoModalButton =
  document.getElementById("close-video-modal");

// Selects the reusable video player.
const projectVideo = document.getElementById("project-video");

// Selects the title displayed inside the modal.
const videoModalTitle =
  document.getElementById("video-modal-title");

// Selects the description displayed inside the modal.
const videoModalDescription =
  document.getElementById("video-modal-description");


// ==========================================================
// PROJECT VIDEO LIBRARY
// ==========================================================

// This object stores the information for all seven projects.

const projectVideoLibrary = {
  canada: {
    title: "Canada Travel Guide Demo",
    description:
      "Watch a short walkthrough of this AI-assisted eBook publishing project.",
    video: "./assets/videos/canada-travel-guide-demo.mp4",
  },

  podcast: {
    title: "AI Podcast Demo",
    description:
      "Watch a short demonstration of this AI-powered podcast project.",
    video: "./assets/videos/ai-podcast-demo.mp4",
  },

  blog: {
    title: "AI Blog Demo",
    description:
      "Watch a short demonstration of this AI-assisted blog project.",
    video: "./assets/videos/ai-blog-demo.mp4",
  },

  translation: {
    title: "AI Translation Project Demo",
    description:
      "Watch a short demonstration of this AI-assisted translation project.",
    video: "./assets/videos/translation-project-demo.mp4",
  },

  sentiment: {
    title: "Mega Chicken Sentiment Analysis Demo",
    description:
      "Watch a short demonstration of this AI-powered customer sentiment and brand analysis project.",
    video: "./assets/videos/sentiment-analysis-demo.mp4",
  },

  nexus: {
    title: "Nexus Landing Page Demo",
    description:
      "Watch a short walkthrough of this fully responsive landing page built manually using HTML and Tailwind CSS.",
    video: "./assets/videos/nexus-landing-page-demo.mp4",
  },

  "travel-agency": {
  title: "Travel Agency Website Demo",
  description:
    "Watch a short walkthrough of this responsive Travel Agency website built using HTML5, CSS3 and JavaScript.",
  video: "./assets/videos/travel-agency-demo.mp4",
},
};


// ==========================================================
// CONNECT TEXT BUTTON IDS TO PROJECT NAMES
// ==========================================================

const projectButtonLibrary = {
  "canada-video-btn": "canada",
  "podcast-video-btn": "podcast",
  "blog-video-btn": "blog",
  "translation-video-btn": "translation",
  "sentiment-video-btn": "sentiment",
  "nexus-video-btn": "nexus",
  "travel-agency-video-btn": "travel-agency",
};


// ==========================================================
// FUNCTION: OPEN THE PROJECT VIDEO MODAL
// ==========================================================

function openProjectVideoModal(projectName) {
  // Find the selected project's information.
  const selectedProject = projectVideoLibrary[projectName];

  // Stop if the project or modal elements cannot be found.
  if (
    !selectedProject ||
    !videoModal ||
    !projectVideo ||
    !videoModalTitle ||
    !videoModalDescription
  ) {
    return;
  }

  // Insert the selected project's title.
  videoModalTitle.textContent = selectedProject.title;

  // Insert the selected project's description.
  videoModalDescription.textContent =
    selectedProject.description;

  // Insert the selected project's video file.
  projectVideo.src = selectedProject.video;

  // Prepare the newly inserted video.
  projectVideo.load();

  // Display the modal.
  videoModal.classList.remove("hidden");
  videoModal.classList.add("flex");

  // Start the fade-in animation.
  requestAnimationFrame(function () {
    videoModal.classList.remove("opacity-0");
    videoModal.classList.add("opacity-100");
  });

  // Prevent the page behind the modal from scrolling.
  document.body.classList.add("overflow-hidden");
}


// ==========================================================
// CONNECT THE WATCH DEMO BUTTONS
// ==========================================================

Object.entries(projectButtonLibrary).forEach(function (
  [buttonId, projectName]
) {
  // Find the current project button.
  const projectButton = document.getElementById(buttonId);

  // Continue only if the button exists.
  if (projectButton) {
    projectButton.addEventListener("click", function () {
      openProjectVideoModal(projectName);
    });
  }
});


// ==========================================================
// CONNECT THE ROUND PLAY BUTTONS
// ==========================================================

// Select every round button with the project-play-button class.
const roundPlayButtons =
  document.querySelectorAll(".project-play-button");

roundPlayButtons.forEach(function (playButton) {
  playButton.addEventListener("click", function () {
    // Read the project's name from data-project.
    const projectName =
      playButton.getAttribute("data-project");

    // Open the correct project video.
    openProjectVideoModal(projectName);
  });
});


// ==========================================================
// FUNCTION: CLOSE THE PROJECT VIDEO MODAL
// ==========================================================

function closeProjectVideoModal() {
  // Stop if the modal or video player cannot be found.
  if (!videoModal || !projectVideo) {
    return;
  }

  // Start the fade-out animation.
  videoModal.classList.remove("opacity-100");
  videoModal.classList.add("opacity-0");

  // Pause the current video.
  projectVideo.pause();

  // Return the video to the beginning.
  projectVideo.currentTime = 0;

  // Wait for the fade-out animation before hiding the modal.
  window.setTimeout(function () {
    videoModal.classList.add("hidden");
    videoModal.classList.remove("flex");

    // Remove the previous video path.
    projectVideo.removeAttribute("src");

    // Reset the video player.
    projectVideo.load();
  }, 300);

  // Allow the webpage to scroll again.
  document.body.classList.remove("overflow-hidden");
}


// ==========================================================
// CLOSE THE MODAL USING THE CLOSE BUTTON
// ==========================================================

if (closeVideoModalButton) {
  closeVideoModalButton.addEventListener(
    "click",
    closeProjectVideoModal
  );
}


// ==========================================================
// CLOSE THE MODAL BY CLICKING THE DARK BACKGROUND
// ==========================================================

if (videoModal) {
  videoModal.addEventListener("click", function (event) {
    if (event.target === videoModal) {
      closeProjectVideoModal();
    }
  });
}


// ==========================================================
// CLOSE THE MODAL USING THE ESCAPE KEY
// ==========================================================

document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    videoModal &&
    !videoModal.classList.contains("hidden")
  ) {
    closeProjectVideoModal();
  }
});


// ============================================================
// ============================================================
//                  PROJECT VIDEO MODAL SCRIPT END
// ============================================================
// ============================================================