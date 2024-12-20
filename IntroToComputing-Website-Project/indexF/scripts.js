document.querySelectorAll('.heart-button').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
    });
  });

  function filterMotorcycles() {
    const brandFilter = document.getElementById('brandFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;

    document.querySelectorAll('.motorcycle-card').forEach(card => {
      const brand = card.dataset.brand;
      const price = parseInt(card.dataset.price);
      const year = card.dataset.year;
      
      let showCard = true;

      if (brandFilter && brand !== brandFilter) showCard = false;
      
      if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(Number);
        if (max && (price < min || price > max)) showCard = false;
        if (!max && price < min) showCard = false;
      }

      if (yearFilter && year !== yearFilter) showCard = false;

      card.style.display = showCard ? 'block' : 'none';
    });
  }

  document.querySelectorAll('.filter-select').forEach(select => {
    select.addEventListener('change', filterMotorcycles);
  });

  const comparePanel = document.querySelector('.compare-panel');
  const compareGrid = document.querySelector('.compare-grid');
  
  document.querySelectorAll('.compare-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const card = checkbox.closest('.motorcycle-card');
      const img = card.querySelector('img').src;
      const title = card.querySelector('h3').textContent;
      const price = card.querySelector('.motorcycle-price').textContent;

      if (checkbox.checked) {
        const compareItem = document.createElement('div');
        compareItem.className = 'compare-item';
        compareItem.innerHTML = `
          <img src="${img}" alt="${title}">
          <h4>${title}</h4>
          <p>${price}</p>
        `;
        compareGrid.appendChild(compareItem);
      } else {
        const items = compareGrid.querySelectorAll('.compare-item');
        items.forEach(item => {
          if (item.querySelector('h4').textContent === title) {
            item.remove();
          }
        });
      }

      comparePanel.classList.toggle('active', compareGrid.children.length > 0);
    });
  });

  document.querySelector('.compare-close').addEventListener('click', () => {
    comparePanel.classList.remove('active');
    document.querySelectorAll('.compare-checkbox').forEach(checkbox => {
      checkbox.checked = false;
    });
    compareGrid.innerHTML = '';
  });

  document.querySelector('.search-button').addEventListener('click', () => {
    const searchTerm = document.querySelector('.search-input').value;
    if(searchTerm) {
      window.location.href = `https://roadtripready.com.ph/search?q=${encodeURIComponent(searchTerm)}`;
    }
  });

  document.querySelector('.search-input').addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
      document.querySelector('.search-button').click();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });