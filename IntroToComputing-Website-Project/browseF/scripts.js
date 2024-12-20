const motorcycles = [
    {
      id: 1,
      brand: 'honda',
      model: 'ADV 160',
      year: 2024,
      price: 166900,
      type: 'scooter',
      image: 'browseF/images/honda/honda-adv160.webp'
    },
    {
      id: 2,
      brand: 'honda',
      model: 'PCX 160',
      year: 2022,
      price: 131900,
      type: 'scooter',
      image: 'https://motortrade.com.ph/wp-content/uploads/2021/06/1-2.jpg'
    },
    {
      id: 3,
      brand: 'honda',
      model: 'CB650R',
      year: 2024,
      price: 524000,
      type: 'naked',
      image: 'browseF/images/honda/honda-cb650r-right-side-viewfull-image-756849.webp'
    },
    {
      id: 4,
      brand: 'honda',
      model: 'Rebel 500',
      year: 2019,
      price: 399000,
      type: 'cruiser',
      image: 'browseF/images/honda/honda-rebel-500.jpg'
    },
    {
      id: 5,
      brand: 'honda',
      model: 'CBR500R',
      year: 2022,
      price: 389000,
      type: 'sport',
      image: 'browseF/images/honda/honda-cbr500r.avif'
    },
    {
      id: 6,
      brand: 'honda',
      model: 'CRF300L',
      year: 2024,
      price: 259900,
      type: 'adventure',
      image: 'browseF/images/honda/honada-crf300l.avif'
    },
    {
      id: 7,
      brand: 'honda',
      model: 'Gold Wing',
      year: 2024,
      price: 1880000,
      type: 'touring',
      image: 'browseF/images/honda/honda-gold-wing.avif'
    },
    {
      id: 8,
      brand: 'honda',
      model: 'Click 160',
      year: 2023,
      price: 116900,
      type: 'scooter',
      image: 'browseF/images/honda/honda-click-160.jpg'
    },
    {
      id: 9,
      brand: 'honda',
      model: 'CBR1000RR-R',
      year: 2024,
      price: 1699000,
      type: 'sport',
      image: 'browseF/images/honda/honda-CBR1000RR-R.jpg'
    },
    {
      id: 10,
      brand: 'honda',
      model: 'CB150R',
      year: 2024,
      price: 116800,
      type: 'naked',
      image: 'browseF/images/honda/honda-cb150r.webp'
    },
    {
      id: 11,
      brand: 'yamaha',
      model: 'NMAX 155',
      year: 2022,
      price: 151900,
      type: 'scooter',
      image: 'browseF/images/yamaha/yamaha-nmax.jpg'
    },
    {
      id: 12,
      brand: 'yamaha',
      model: 'MT-15',
      year: 2024,
      price: 159000,
      type: 'naked',
      image: 'browseF/images/yamaha/yamaha-mt-15.webp'
    },
    {
      id: 13,
      brand: 'yamaha',
      model: 'YZF-R15',
      year: 2024,
      price: 164000,
      type: 'sport',
      image: 'browseF/images/yamaha/yamaha-yzf-r15m.webp'
    },
    {
      id: 14,
      brand: 'yamaha',
      model: 'TMAX 560',
      year: 2024,
      price: 779000,
      type: 'scooter',
      image: 'browseF/images/yamaha/yamaha-tmax-560.jpeg'
    },
    {
      id: 15,
      brand: 'yamaha',
      model: 'FZ25',
      year: 2020,
      price: 105000,
      type: 'naked',
      image: 'browseF/images/yamaha/yamaha-fz25.webp'
    },
    {
      id: 16,
      brand: 'yamaha',
      model: 'MT-03',
      year: 2024,
      price: 258000,
      type: 'naked',
      image: 'browseF/images/yamaha/yamaha-mt-03.webp'
    },
    {
      id: 17,
      brand: 'yamaha',
      model: 'FZ6',
      year: 2009,
      price: 99800 ,
      type: 'naked',
      image: 'browseF/images/yamaha/yamaha-fz6.jpg'
    },
    {
      id: 18,
      brand: 'yamaha',
      model: 'R1',
      year: 2020,
      price: 1099000,
      type: 'sport',
      image: 'browseF/images/yamaha/yamaha-r1.jpg'
    },
    {
      id: 19,
      brand: 'yamaha',
      model: 'XSR155',
      year: 2020,
      price: 182000,
      type: 'naked',
      image: 'browseF/images/yamaha/yamaha-xsr155.jpg'
    },
    {
      id: 20,
      brand: 'yamaha',
      model: 'R3',
      year: 2017,
      price: 290000,
      type: 'sport',
      image: 'browseF/images/yamaha/yamaha-r3.webp'
    },
    {
      id: 21,
      brand: 'suzuki',
      model: 'GSX-R1000',
      year: 2022,
      price: 1099000,
      type: 'sport',
      image: 'browseF/images/suzuki/suzuki-GSX-R1000.jpg'
    },
    {
      id: 22,
      brand: 'suzuki',
      model: 'GSX-S750',
      year: 2024,
      price: 568000,
      type: 'naked',
      image: 'browseF/images/suzuki/suzuki-gsx-s750.jpg'
    },
    {
      id: 23,
      brand: 'suzuki',
      model: 'V-Strom 650',
      year: 2023,
      price: 489000,
      type: 'adventure',
      image: 'browseF/images/suzuki/suzuki-v-strom-650.webp'
    },
    {
      id: 24,
      brand: 'suzuki',
      model: 'Burgman 400',
      year: 2024,
      price: 529000,
      type: 'scooter',
      image: 'browseF/images/suzuki/suzuki-burgman-400.webp'
    },
    {
      id: 25,
      brand: 'suzuki',
      model: 'GSX-R125',
      year: 2020,
      price: 185000,
      type: 'sport',
      image: 'browseF/images/suzuki/suzuki-gsx-r125.webp'
    },
    {
      id: 26,
      brand: 'suzuki',
      model: 'Intruder 150',
      year: 2019,
      price: 115000,
      type: 'cruiser',
      image: 'browseF/images/suzuki/suzuki_Intruder_150.webp'
    },
    {
      id: 27,
      brand: 'suzuki',
      model: 'GSR750',
      year: 2015,
      price: 499000,
      image: 'browseF/images/suzuki/suzuki-gsx-s750.jpg'
    },
    {
      id: 28,
      brand: 'suzuki',
      model: 'Hayabusa',
      year: 2022,
      price: 1225000,
      type: 'sport',
      image: 'browseF/images/suzuki/suzuki-hayabusa.jpg'
    },
    {
      id: 29,
      brand: 'suzuki',
      model: 'SV650',
      year: 2024,
      price: 429000,
      type: 'naked',
      image: 'browseF/images/suzuki/suzuki-sv650.jpg'
    },
    {
      id: 30,
      brand: 'suzuki',
      model: 'Address 125',
      year: 2023,
      price: 66900,
      type: 'scooter',
      image: 'browseF/images/suzuki/suzuki-Address125.png'
    },
    {
      id: 31,
      brand: 'kawasaki',
      model: 'Ninja 1000',
      year: 2024,
      price: 718000,
      type: 'sport',
      image: 'browseF/images/kawasaki/kawasaki-ninja1000.jpg'
    },
    {
      id: 32,
      brand: 'kawasaki',
      model: 'Z900',
      year: 2024,
      price: 618000,
      type: 'naked',
      image: 'browseF/images/kawasaki/kawasaki-Z900.jpg'
    },
    {
      id: 33,
      brand: 'kawasaki',
      model: 'Versys 650',
      year: 2024,
      price: 450000,
      type: 'adventure',
      image: 'browseF/images/kawasaki/kawasaki-versys-650.avif'
    },
    {
      id: 34,
      brand: 'kawasaki',
      model: 'Ninja H2',
      year: 2024,
      price: 1500000,
      type: 'sport',
      image: 'browseF/images/kawasaki/kawasaki-ninjah2.webp'
    },
    {
      id: 35,
      brand: 'kawasaki',
      model: 'Z650',
      year: 2024,
      price: 433000,
      type: 'naked',
      image: 'browseF/images/kawasaki/kasaki-z650.jpg'
    },
    {
      id: 36,
      brand: 'kawasaki',
      model: 'KLR650',
      year: 2021,
      price: 220000,
      type: 'adventure',
      image: 'browseF/images/kawasaki/kawasaki-klr650.jpg'
    },
    {
      id: 37,
      brand: 'kawasaki',
      model: 'Z125 Pro',
      year: 2023,
      price: 120000,
      type: 'scooter',
      image: 'browseF/images/kawasaki/kawasaki_z125 pro.jpg'
    },
    {
      id: 38,
      brand: 'kawasaki',
      model: 'Ninja ZX-10R',
      year: 2023,
      price: 1525000,
      type: 'sport',
      image: 'browseF/images/kawasaki/kawasaki-ninja-ZX-10r.webp'
    },
    {
      id: 39,
      brand: 'kawasaki',
      model: 'Versys 1000',
      year: 2024,
      price: 959000,
      type: 'adventure',
      image: 'browseF/images/kawasaki/kawasaki-versys-1000.webp'
    },
    {
      id: 40,
      brand: 'kawasaki',
      model: 'Ninja 400',
      year: 2024,
      price: 340900,
      type: 'sport',
      image: 'browseF/images/kawasaki/Kawasaki_Ninja_400.jpg'
    },
    {
      id: 41,
      brand: 'ktm',
      model: '390 Duke',
      year: 2024,
      price: 318000,
      type: 'naked',
      image: 'browseF/images/ktm/ktm-390-duke.avif'
    },
    {
      id: 42,
      brand: 'ktm',
      model: '1290 Super Duke R',
      year: 2024,
      price: 1250000,
      type: 'naked',
      image: 'browseF/images/ktm/ktm-super-duke-1290-R.avif'
    },
    {
      id: 43,
      brand: 'ktm',
      model: '390 Adventure',
      year: 2024,
      price: 338000,
      type: 'adventure',
      image: 'browseF/images/ktm/ktm-390-adventure.webp'
    },
    {
      id: 44,
      brand: 'ktm',
      model: '250 Duke',
      year: 2024,
      price: 180000,
      type: 'naked',
      image: 'browseF/images/ktm/KTM-Duke-250.webp'
    },
    {
      id: 45,
      brand: 'ktm',
      model: '690 Enduro R',
      year: 2024,
      price: 790000,
      type: 'adventure',
      image: 'browseF/images/ktm/ktm-690 enduro r.webp'
    },
    {
      id: 46,
      brand: 'ktm',
      model: '890 Duke',
      year: 2023,
      price: 599000,
      type: 'naked',
      image: 'browseF/images/ktm/ktm-890-duke.jpg'
    },
    {
      id: 47,
      brand: 'ktm',
      model: '1290 Adventure',
      year: 2024,
      price: 1390000,
      type: 'adventure',
      image: 'browseF/images/ktm/ktm-1290-adventure.avif'
    },
    {
      id: 48,
      brand: 'ktm',
      model: '250 Adventure',
      year: 2024,
      price: 168000,
      type: 'adventure',
      image: 'browseF/images/ktm/ktm-250 adventure.webp'
    },
    {
      id: 49,
      brand: 'ktm',
      model: '390 RC',
      year: 2018,
      price: 330000,
      type: 'sport',
      image: 'browseF/images/ktm/ktm-390 rc.jpg'
    },
    {
      id: 50,
      brand: 'ktm',
      model: '125 Duke',
      year: 2024,
      price: 119000,
      type: 'naked',
      image: 'browseF/images/ktm/ktm-125-duke.jpg'
    },
    {
      id: 51,
      brand: 'yamaha',
      model: 'FJR1300',
      year: 2023,
      price: 989000,
      type: 'touring',
      image: 'browseF/images/yamaha/yamha-fjr1300.avif'
    },
    {
      id: 52,
      brand: 'kawasaki',
      model: 'Concours 14',
      year: 2023,
      price: 899000,
      type: 'touring',
      image: 'browseF/images/kawasaki/kawasaki-concours 14.jpg'
    },
    {
      id: 53,
      brand: 'ktm',
      model: '1290 Super Adventure T',
      year: 2023,
      price: 1490000,
      type: 'touring',
      image: 'browseF/images/ktm/ktm-1290-super-adventure-t.avif'
    },
    {
      id: 54,
      brand: 'honda',
      model: 'VFR1200F',
      year: 2023,
      price: 890000,
      type: 'touring',
      image: 'browseF/images/honda/honda-vfr1200f.jpg'
    },
    {
      id: 55,
      brand: 'suzuki',
      model: 'GSX1250FA',
      year: 2023,
      price: 759000,
      type: 'touring',
      image: 'browseF/images/suzuki/suzukigsx1250fa.jpg'
    }
  ];

  // Modify the renderMotorcycles function to handle pagination
  function renderMotorcycles(motorcyclesToRender, page = 1) {
    const itemsPerPage = 6;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedMotorcycles = motorcyclesToRender.slice(startIndex, endIndex);
    
    const grid = document.querySelector('.motorcycle-grid');
    grid.innerHTML = paginatedMotorcycles.map(moto => `
      <div class="motorcycle-card" data-id="${moto.id}">
        <button class="heart-button" aria-label="Add to favorites">
          <svg viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <img src="${moto.image}" alt="${moto.brand} ${moto.model}" class="motorcycle-image">
        <div class="motorcycle-details">
          <h3 class="motorcycle-title">${moto.brand} ${moto.model}</h3>
          <p class="motorcycle-meta">${moto.year}</p>
          <p class="motorcycle-price">₱${moto.price.toLocaleString()}</p>
        </div>
      </div>
    `).join('');

    // Add event listeners to heart buttons
    document.querySelectorAll('.heart-button').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        button.classList.toggle('active');
      });
    });

    // Update pagination
    updatePagination(motorcyclesToRender.length, page);
  }

  // Add function to update pagination
  function updatePagination(totalItems, currentPage) {
    const totalPages = Math.ceil(totalItems / 6);
    const pagination = document.querySelector('.pagination');
    
    pagination.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.className = `page-button ${i === currentPage ? 'active' : ''}`;
      button.textContent = i;
      button.addEventListener('click', () => {
        const filtered = getFilteredMotorcycles();
        renderMotorcycles(filtered, i);
        window.scrollTo({top: 0, behavior: 'smooth'});
      });
      pagination.appendChild(button);
    }
  }

  // Helper function to get filtered motorcycles
  function getFilteredMotorcycles() {
    let filtered = [...motorcycles];
    
    // Get search term
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(moto => 
        moto.brand.toLowerCase().includes(searchTerm) ||
        moto.model.toLowerCase().includes(searchTerm) ||
        `${moto.brand} ${moto.model}`.toLowerCase().includes(searchTerm)
      );
    }

    // Apply all existing filters
    // Brand filters
    const selectedBrands = [...document.querySelectorAll('input[name="brand"]:checked')]
      .map(input => input.value);
    if (selectedBrands.length) {
      filtered = filtered.filter(moto => selectedBrands.includes(moto.brand));
    }
    
    // Price range
    const minPrice = document.querySelector('.price-input[placeholder="Min"]').value;
    const maxPrice = document.querySelector('.price-input[placeholder="Max"]').value;
    if (minPrice) filtered = filtered.filter(moto => moto.price >= minPrice);
    if (maxPrice) filtered = filtered.filter(moto => moto.price <= maxPrice);

    // Type filters
    const selectedTypes = [...document.querySelectorAll('input[name="type"]:checked')]
      .map(input => input.value);
    if (selectedTypes.length) {
      filtered = filtered.filter(moto => selectedTypes.includes(moto.type));
    }

    return filtered;
  }

  function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let filtered = getFilteredMotorcycles();
    
    if (searchTerm) {
      filtered = filtered.filter(moto => 
        moto.brand.toLowerCase().includes(searchTerm) ||
        moto.model.toLowerCase().includes(searchTerm) ||
        `${moto.brand} ${moto.model}`.toLowerCase().includes(searchTerm)
      );
    }
    
    renderMotorcycles(filtered, 1);
  }


  document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });

  document.querySelectorAll('input[type="checkbox"], input[type="number"]')
    .forEach(input => input.addEventListener('change', () => {
      const filtered = getFilteredMotorcycles();
      renderMotorcycles(filtered, 1);
    }));

  document.querySelector('.sort-select').addEventListener('change', (e) => {
    const sortValue = e.target.value;
    let sorted = getFilteredMotorcycles();

    switch (sortValue) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sorted.sort((a, b) => b.year - a.year);
        break;
    }

    renderMotorcycles(sorted, 1);
  });

  renderMotorcycles(motorcycles, 1);