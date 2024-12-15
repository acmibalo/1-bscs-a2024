// Sample authors data
const authors = [
    {
      name: "George R.R. Martin",
      genre: "Fantasy",
      books: 15,
      description: "Author of A Song of Ice and Fire series"
    },
    {
      name: "Margaret Atwood",
      genre: "Literary Fiction",
      books: 18,
      description: "Award-winning author of The Handmaid's Tale"
    },
    {
      name: "Dan Brown",
      genre: "Mystery",
      books: 7,
      description: "Author of The Da Vinci Code"
    },
    {
      name: "Agatha Christie",
      genre: "Mystery",
      books: 66,
      description: "Queen of Mystery"
    },
    {
      name: "Paulo Coelho",
      genre: "Fiction",
      books: 30,
      description: "Author of The Alchemist"
    },
    {
      name: "Haruki Murakami",
      genre: "Literary Fiction",
      books: 14,
      description: "Acclaimed Japanese author"
    }
  ];

  function createAuthorCard(author) {
    return `
      <div class="author-card">
        <div class="author-info">
          <h3>${author.name}</h3>
          <p>${author.genre}</p>
          <div class="author-books">
            <span>${author.books} Books Published</span>
          </div>
          <p>${author.description}</p>
        </div>
      </div>
    `;
  }

  function renderAuthors() {
    const authorsGrid = document.getElementById('authorsGrid');
    authorsGrid.innerHTML = authors.map(author => createAuthorCard(author)).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderAuthors();

    // Add search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredAuthors = authors.filter(author => 
        author.name.toLowerCase().includes(searchTerm) ||
        author.genre.toLowerCase().includes(searchTerm)
      );
      
      const authorsGrid = document.getElementById('authorsGrid');
      authorsGrid.innerHTML = filteredAuthors.map(author => createAuthorCard(author)).join('');
    });

    // Add filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.textContent;
        if (filter === 'All') {
          renderAuthors();
          return;
        }

        const filteredAuthors = authors.filter(author => 
          author.genre.includes(filter)
        );
        
        const authorsGrid = document.getElementById('authorsGrid');
        authorsGrid.innerHTML = filteredAuthors.map(author => createAuthorCard(author)).join('');
      });
    });

    // Load More functionality
    const loadMoreBtn = document.querySelector('.view-more-btn');
    loadMoreBtn.addEventListener('click', () => {
      // In a real application, this would load more authors from the server
      alert('Loading more authors...');
    });
  });