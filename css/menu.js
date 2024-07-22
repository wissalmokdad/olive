document.addEventListener("DOMContentLoaded", function() {
  const contents = document.querySelectorAll(".content, .contact");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("animate");
          }
      });
  }, {
      threshold: 0.1
  });

  contents.forEach(content => {
      observer.observe(content);
  });
});
