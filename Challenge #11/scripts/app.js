// Accordion functionality
        const accordions = document.querySelectorAll(".accordion");
        accordions.forEach(accordion => {
            accordion.addEventListener("click", () => {
                accordion.classList.toggle("active");
                const panel = accordion.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        });
