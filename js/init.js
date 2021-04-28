// Floating Action Button:
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top',
      hoverEnabled: false
    });
  });

// Overlay form:
function show_contact_form() {
  document.getElementById("overlay").style.display = "block";
}
function close_contact_form() {
  document.getElementById("overlay").style.display = "none";
}
document.querySelector('#form_button').addEventListener("click", (event) => { 
  show_contact_form();
});
document.querySelector('#close_form_btn').addEventListener("click", (event) => { 
  close_contact_form();
});

//gForm:
// var submitted=false;
// // document.getElementById("myForm").submit();
// $('#gform').on('submit', function(e) {
//   $('#gform *').fadeOut(2000);
//   $('#gform').prepend('Thank you! Your message has been recorded.');
//   });
function sendToGForm() {
  $('#gform *').fadeOut(2000);
  $('#gform').prepend('Thank you! Your message has been recorded.');
}