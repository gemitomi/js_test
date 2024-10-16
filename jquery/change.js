document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById('color-changer');
    var container = document.getElementById('container');
  
    button.addEventListener('click', function(){
      container.classList.toggle('blue');
    });
  });
