// Sample books data
const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 15.99,
      genre: "Fiction",
      rating: 4.5
    },
    {
      title: "1984",
      author: "George Orwell",
      price: 12.99,
      genre: "Fiction",
      rating: 4.8
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 14.99,
      genre: "Fiction",
      rating: 4.9
    },
    // Add more books as needed
  ];

  function createBookCard(book) {
    return `
      <div class="book-card">
        <div class="book-cover">
          <img class="book-cover-size" src="images/favicon.png" alt="book">
        </div>
        <div class="book-info">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">by ${book.author}</p>
          <p class="book-price">$${book.price}</p>
        </div>
      </div>
    `;
  }

  function renderBooks() {
    const booksGrid = document.getElementById('booksGrid');
    booksGrid.innerHTML = books.map(book => createBookCard(book)).join('');
  }

  // Initial render
  document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    
    // Add search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
      );
      
      const booksGrid = document.getElementById('booksGrid');
      booksGrid.innerHTML = filteredBooks.map(book => createBookCard(book)).join('');
    });

    // Add filter functionality
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
      select.addEventListener('change', () => {
        // Implement filter logic here
        console.log('Filter changed:', select.id, select.value);
      });
    });
  });