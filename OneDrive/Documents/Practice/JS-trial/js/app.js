/** code by webdevtrick ( https://webdevtrick.com ) **/
// (function($) { 
//   $(function() { 
//     $('nav ul li a:not(:only-child)').click(function(e) {
//       $(this).siblings('.nav-dropdown').toggle();
//       $('.dropdown').not($(this).siblings()).hide();
//       e.stopPropagation();
//     });
//     $('html').click(function() {
//       $('.nav-dropdown').hide();
//     });
//     $('#nav-toggle').click(function() {
//       $('nav ul').slideToggle();
//     });
//     $('#nav-toggle').on('click', function() {
//       this.classList.toggle('active');
//     });
//   }); 
// })(jQuery);


// function getEventTarget(e) {
//     e = e || window.event;
//     return e.target || e.srcElement; 
// }

// count = 0;
// function clicked(event) {
	
// 	count++;
	
// 	let val = event.target.innerHTML;
	
// 	var para = document.createElement("p");
// 	para.id = "dynChild";
// 	var element = document.getElementById("infoContent");
// 	var child = document.getElementById("child");

// 	if (val === "Professional Exp") {
// 		 var node = document.createTextNode("just created prof exp");
// 		 para.appendChild(node);	 
// 	}
// 	else if (val === "Contact") {
// 			 var node = document.createTextNode("This is new contact.");
// 			 para.appendChild(node);	 
// 	}


// 	if (count>1) {
// 			 let child = document.getElementById("dynChild");
// 			 element.removeChild(child);
// 	}
// 	element.insertBefore(para, child);

// }

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementsByClassName("nav-bar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.addClass("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// var ul = document.getElementsByClassName('nav-list');
// ul.onclick = function(event) {
//     var target = getEventTarget(event);
//     console.log('ul clicked');
// };




