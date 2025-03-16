$(document).ready(function () {
  // Initialize primary and secondary filter buttons
  var $btns = $('.btn');
  var $btns2 = $('.btn2');

  // Generic function for filtering
  function filterEntries(filter) {
      if (filter === 'all') {
          // Show all entries if 'all' is selected
          $('.contain > div').stop().fadeIn(450);
      } else {
          // Escape special characters in filter for class matching
          filter = filter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          var $filteredElements = $('.' + filter);

          // Hide non-matching elements and show matching elements
          $('.contain > div').stop().hide();
          $filteredElements.stop().fadeIn(450);
      }
  }

  // Click handler for primary buttons
  $btns.click(function () {
      var filter = this.id;

      // Filter entries
      filterEntries(filter);

      // Update active button state
      $btns.removeClass('active');
      $(this).addClass('active');
  });

  // Click handler for secondary buttons
  $btns2.click(function () {
      var filter = this.id;

      // Filter entries
      filterEntries(filter);

      // Smooth scroll to results container
      $('html, body').animate({ scrollTop: $('.contain').offset().top - 10 }, 500);

      // Update active button state for secondary buttons
      $btns2.removeClass('active');
      $(this).addClass('active');
  });

  // Collapsible logic for sort entries section
  var coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
          this.classList.toggle("activated");
          var content = this.nextElementSibling;
          if (content.style.maxHeight) {
              content.style.maxHeight = null;
          } else {
              content.style.maxHeight = content.scrollHeight + "px";
          }
      });
  }
});
