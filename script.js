document.addEventListener("DOMContentLoaded", function() {
    var progress = document.querySelector(".loading-progress");
    var width = 0;
    var interval = setInterval(updateProgress, 1000);
  
    function updateProgress() {
      width += 20;
      progress.style.width = width + "%";
      progress.innerHTML = width + "%";
  
      if (width >= 100) {
        clearInterval(interval);
      }
    }
  });
  