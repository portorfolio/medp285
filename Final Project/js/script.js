function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
$(document).ready(function(){
  console.log("jQuery is working");
  $('header').fadeIn(1500);
  $('nav').fadeIn(1500);
  $('main').fadeIn(2000);
  $('footer').fadeIn(2000);
  $('table').fadeIn(2000);
})