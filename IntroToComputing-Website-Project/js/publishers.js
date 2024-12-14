// Sample publishers data
const publishers = [
  { name: 'Penguin Random House', category: 'Fiction' },
  { name: 'Springer', category: 'Academic' },
  { name: 'Scholastic', category: 'Children\'s' },
  { name: 'O\'Reilly Media', category: 'Technical' },
  { name: 'Oxford University Press', category: 'Academic' },
  { name: 'HarperCollins', category: 'Fiction' },
];

function createPublisherCard(publisher) {
  return `
    <div class="publisher-card">
      <h3>${publisher.name}</h3>
      <p>Category: ${publisher.category}</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const publishersGrid = document.getElementById('publishersGrid');


// Add search functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredPublishers = publishers.filter(publisher => 
        publisher.name.toLowerCase().includes(searchTerm) ||
        publisher.category.toLowerCase().includes(searchTerm)
      );
      
      const publishersGrid = document.getElementById('publishersGrid');
      publishersGrid.innerHTML = filteredPublishers.map(publisher => createPublisherCard(publisher)).join('');
    });

    // Add filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.textContent;
        if (filter === 'All') {
          renderPublishers();
          return;
        }

        const filteredPublishers = publishers.filter(publisher => 
          publisher.category === filter
        );
        
        const publishersGrid = document.getElementById('publishersGrid');
        publishersGrid.innerHTML = filteredPublishers.map(publisher => createPublisherCard(publisher)).join('');
      });
    });

    // Add pagination functionality
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.textContent !== 'Previous' && button.textContent !== 'Next') {
          pageButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          // In a real application, this would fetch the corresponding page of publishers
          alert(`Loading page ${button.textContent}...`);
        }
      });
    });
  }});