
function clicked(event) {
	console.log(event.target.innerHTML);
}

// #link is from <a> #element_target is id of the target elt
$("#pastExp").click(function() {
  $('html, body').animate({
    scrollTop: $("#pastExpTarget").offset().top - 65
  }, 1000);
});

$("#techSkill").click(function() {
  $('html, body').animate({
    scrollTop: $("#techSkillTarget").offset().top - 65
  }, 1000);
});

$("#education").click(function() {
  $('html, body').animate({
    scrollTop: $("#educationTarget").offset().top - 65
  }, 1000);
});

$("#contact").click(function() {
  $('html, body').animate({
    scrollTop: $("#contactTarget").offset().top
  }, 1000);
	$.ajax({
		url: 'http://localhost:3000/hotel-search-response',
		dataType: 'jsonp',
		success:  function (res) {
			let o = res.hotels;
			// console.log(o["basic-info"]["hotel-info:hotel-name"]);
			// console.log(o);
			console.log(o.hotel);
			// console.log(o.hotel[0]["room-rates"]["room-rate"]);
			let roomRateArr = o.hotel[0]["room-rates"]["room-rate"]; // to get common:pricing-element
			// console.log(roomRateArr[0]["rate-breakdown"]["common:rate"]["common:pricing-elements"]);
			let commonPricing = roomRateArr[0]["rate-breakdown"]["common:rate"]["common:pricing-elements"];
			// console.log(commonPricing);
			let thumbnailimg = o.hotel[0]["basic-info"]["thumb-nail-image"];
		}

	});

	})


function logresults(response) {
	console.log(response);
}


//loads when the document attains 'ready' state
$(document).ready(function () {
	// for (key in data ) {
	// 	// console.log(key, data[key]);
	// }

	let fullName = internationalize(data.firstName) + ' ' + internationalize(data.lastName);
	// console.log(fullName);
	document.getElementById('displayName').innerHTML = fullName;


	let detailArr = document.getElementsByClassName('detail');
	console.log(detailArr[0], detailArr[1], detailArr[2]);

});

function internationalize (val) {
	let retVal = '';
	// loop through the string and capitalize first letter of each word.
	// trim() is used to remove the extra space added at the end by the forEach function
 	val.split(' ').forEach(str => {
 		retVal += str.charAt(0).toUpperCase() + str.slice(1) + ' ';
 	});
 	retVal = retVal.trim();
 	return retVal;
 }

 function getDetails() {
 	return data.email;
 }
