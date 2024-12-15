document.addEventListener("DOMContentLoaded", () => {
    const primaryHeader = document.querySelector(".primary-header");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const primaryNav = document.querySelector(".primary-navigation");

    navToggle.addEventListener("click", () => {
        primaryNav.hasAttribute("data-visible") 
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);

        primaryNav.toggleAttribute("data-visible");
        primaryHeader.toggleAttribute("data-overlay");
    });
   
    
    const tabContent = document.querySelector(".tab-content");
    const closeButtons = document.querySelectorAll(".close-button");
    const tabToggles = document.querySelectorAll("[data-tab-target]");
    const contentContents = document.querySelectorAll("[data-tab-content]");
    
    function closeAllTabs() {
      contentContents.forEach((content) => content.removeAttribute("data-visible"));
      tabContent.removeAttribute("data-overlay");
      tabToggles.forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
    }
    
    closeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        closeAllTabs();
        e.stopPropagation(); 
      });
    });
    
    tabToggles.forEach((tabToggle) => {
      tabToggle.addEventListener("click", (e) => {
        const targetId = tabToggle.getAttribute("data-tab-target");
        const targetContent = document.querySelector(targetId);
    
        const isVisible = targetContent.hasAttribute("data-visible");
    
        closeAllTabs();
    
        if (!isVisible) {
          targetContent.setAttribute("data-visible", "");
          tabContent.setAttribute("data-overlay", "");
          tabToggle.setAttribute("aria-expanded", "true");
        }
    
        e.stopPropagation(); 
      });
    });


    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]'); 


    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            });

          target.classList.add('active');
      });
  });

  
});




document.addEventListener("DOMContentLoaded", () => {
  const books = document.querySelectorAll(".pop-details");
  const tabs = document.querySelectorAll(".new-tab");
  const closeButtons = document.querySelectorAll(".close-no-01");

  function closeAllTabs() {
      tabs.forEach((tab) => {
          console.log("Closing tab: ", tab); 
          tab.style.display = "none"; 
      });
      document.body.style.overflow = ""; 
  }

  books.forEach((book) => {
      book.addEventListener("click", () => {
          const targetId = book.getAttribute("data-target-tab");
          const targetTab = document.querySelector(targetId);

          console.log("Book clicked, showing tab: ", targetId); 

          if (targetTab) {
              closeAllTabs(); 
              targetTab.style.display = "block"; 
              document.body.style.overflow = "hidden"; 
          }
      });
  });

  closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
          console.log("Close button clicked"); 
          closeAllTabs();
      });
  });

  tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
          if (e.target === tab) {
              console.log("Click outside content, closing tab"); 
              closeAllTabs();
          }
      });
  });
});

