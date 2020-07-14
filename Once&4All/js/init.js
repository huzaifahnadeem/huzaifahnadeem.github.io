M.AutoInit();

// Mobile site's side nav:
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

// drop down menus e.g. navbar's about us button
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {hover: true, 
                                          coverTrigger: false});
});

// Home page carousel:
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {fullWidth: true,
                                          indicators: true});
  

});

// carousel prev arrow:
document.querySelector('i#prev').addEventListener("click", (event) => { 
  var elems = document.querySelector('.carousel');
  var instance = M.Carousel.getInstance(elems);
  instance.prev();
});

// carousel next arrow:
document.querySelector('i#next').addEventListener("click", (event) => { 
  var elems = document.querySelector('.carousel');
  var instance = M.Carousel.getInstance(elems);
  instance.next();
});
