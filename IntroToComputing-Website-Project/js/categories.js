const categories = [
    {
      name: "Fiction",
      icon: "📚",
      bookCount: "25,000+",
      tags: ["Novel", "Short Story", "Drama"],
      color: "#3498db"
    },
    {
      name: "Science Fiction",
      icon: "🚀",
      bookCount: "12,000+",
      tags: ["Space", "Future", "Technology"],
      color: "#9b59b6"
    },
    {
      name: "Mystery",
      icon: "🔍",
      bookCount: "15,000+",
      tags: ["Crime", "Thriller", "Detective"],
      color: "#34495e"
    },
    {
      name: "Romance",
      icon: "❤️",
      bookCount: "18,000+",
      tags: ["Love", "Contemporary", "Historical"],
      color: "#e74c3c"
    },
    {
      name: "Fantasy",
      icon: "🐉",
      bookCount: "13,000+",
      tags: ["Magic", "Adventure", "Epic"],
      color: "#2ecc71"
    },
    {
      name: "Non-Fiction",
      icon: "📖",
      bookCount: "20,000+",
      tags: ["Biography", "History", "Science"],
      color: "#f1c40f"
    },
    {
      name: "Children's",
      icon: "🎨",
      bookCount: "10,000+",
      tags: ["Picture Books", "Early Readers", "Middle Grade"],
      color: "#e67e22"
    },
    {
      name: "Self-Help",
      icon: "🌟",
      bookCount: "8,000+",
      tags: ["Personal Growth", "Motivation", "Success"],
      color: "#1abc9c"
    }
  ];

  const featuredBooks = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      category: "Fiction",
      cover: "📕"
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      category: "Science Fiction",
      cover: "📗"
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      category: "Mystery",
      cover: "📘"
    },
    {
      title: "Beach Read",
      author: "Emily Henry",
      category: "Romance",
      cover: "📙"
    }
  ];

  function createCategoryCard(category) {
    return `
      <div class="category-card">
        <div class="category-icon">${category.icon}</div>
        <h3 class="category-name">${category.name}</h3>
        <p class="book-count">${category.bookCount} Books</p>
        <div class="popular-tags">
          ${category.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="dead.html" class="explore-btn">
          Explore ${category.name}
        </a>
      </div>
    `;
  }

  function createFeaturedBook(book) {
    return `
      <div class="featured-book">
        <div class="book-cover">${book.cover}</div>
        <h4 class="book-title">${book.title}</h4>
        <p class="book-author">by ${book.author}</p>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const categoriesGrid = document.getElementById('categoriesGrid');
    categoriesGrid.innerHTML = categories.map(category => createCategoryCard(category)).join('');

    const featuredBooksGrid = document.getElementById('featuredBooksGrid');
    featuredBooksGrid.innerHTML = featuredBooks.map(book => createFeaturedBook(book)).join('');

    // Add hover effect to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  });