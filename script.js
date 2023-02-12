// ------ scripting for the image carousel ------ 

// make necessary global variables to run the image carousel
var timer = null;
var slideIndex = 0;
showSlides();

/**
* showSlides() runs the automatic image carousel
**/
function showSlides() {
	// retrieve the slides (carousel images) and status buttons to show which slide is showing from the HTML file
	let slides = document.getElementsByClassName("carouselImage");
	let buttons = document.getElementsByClassName("carouselButton");
	
	// if the index of the slide is greater or equal to the number of images, reset the slideIndex to 0 (first image)
	// note that greater than this number should never occur, but it is precautionary
	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}
	
	// do not allow any of the slides to be displayed by adding inactive class and removing active class
	for (i = 0; i < slides.length; i++) {
		slides[i].classList.add("slideInactive");
		slides[i].classList.remove("slideActive");
	}
	// remove the styling for an active button from all buttons
	for (i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("buttonActive");
	}
	
	// display the current slide by removing inactive class and adding active class
	slides[slideIndex].classList.remove("slideInactive");
	slides[slideIndex].classList.add("slideActive");
	// activate the corresponding button
	buttons[slideIndex].classList.add("buttonActive");
	// increase slideIndex and set timeout to call the function again after 3.5 seconds
	slideIndex++;
	timer = setTimeout(showSlides, 3500);
}

/**
* manualChange(newSlide) changes the slide on the image carousel given an index
* 	newSlide: the index of the slide to show
**/
function manualChange(newSlide) {
	clearInterval(timer);
	slideIndex = newSlide;
	showSlides();
}

// event listeners for the image carousel buttons. when one of the buttons is clicked, the slide 
// will change to the index of the button by calling manualChange(index)
document.getElementById("carouselButton1").addEventListener("click", function() {
	manualChange(0);
});
document.getElementById("carouselButton2").addEventListener("click", function() {
	manualChange(1);
});
document.getElementById("carouselButton3").addEventListener("click", function() {
	manualChange(2);
});


// ------ event listeners for page redirection buttons ------

// for each button, ensure it exists on current page to avoid error, then add event listener and redirect on click
let dentistButton = document.getElementById("dentistsButton");
if (dentistButton) {
	dentistButton.addEventListener("click", function() {
		location.href = "./dentists.html";
	});
}

let servicesButton = document.getElementById("servicesButton");
if (servicesButton) {
	servicesButton.addEventListener("click", function() {
		location.href = "./services.html";
	});
}

let practiceButton = document.getElementById("practiceButton");
if (practiceButton) {
	practiceButton.addEventListener("click", function() {
		location.href = "./practice.html";
	});
}

let bookButtons = document.getElementsByClassName("bookButton");
for (let i=0; i<bookButtons.length; i++) {
	bookButtons[i].addEventListener("click", function() {
		location.href = "./book.html";
	});
}

// ------ contact form validation ------

let contactForm = document.getElementById("contactForm");
// ensure form exists on current page
if (contactForm) {
	// get the values the user inputted for each mandatory field
	const firstName = document.getElementById("firstName");
	const lastName = document.getElementById("lastName");
	const phoneNumber = document.getElementById("phoneNumber");
	const emailAddress = document.getElementById("emailAddress");
	const message = document.getElementById("message");
	// check mandatory fields on submit
	contactForm.addEventListener("submit", function(event) {
		// use an error count to count the number of unfilled mandatory fields
		let errorCount = 0;		
		// check every mandatory field, if null or empty, prevent submission and add to error count
		if (firstName.value === "" || firstName.value == null) {
			event.preventDefault();
			errorCount++;
		}
		if (lastName.value === "" || lastName.value == null) {
			event.preventDefault();
			errorCount++;
		}
		if (phoneNumber.value === "" || phoneNumber.value == null) {
			event.preventDefault();
			errorCount++;
		}
		if (emailAddress.value === "" || emailAddress.value == null) {
			event.preventDefault();
			errorCount++;
		}
		if (message.value === "" || message.value == null) {
			event.preventDefault();
			errorCount++;
		}
		// if total number of errors (unfilled mandatory fields) are 0, "submit"
		if (errorCount == 0) {
			// prevent page refresh
			event.preventDefault();
			// reset form to mimic submission on user end
			contactForm.reset();
		}
	});
}

// ------ booking form validation ------

let bookingForm = document.getElementById("bookingForm");
// ensure form exists on current page
if (bookingForm) {
	// get the values the user inputted for each mandatory field
	const firstName = document.getElementById("firstName");
	const lastName = document.getElementById("lastName");
	const phoneNumber = document.getElementById("phoneNumber");
	const emailAddress = document.getElementById("emailAddress");
	const patientType = document.getElementById("patientType");
	const appointmentType = document.getElementById("appointmentType");
	// check mandatory fields on submit
	bookingForm.addEventListener("submit", function(event) {
		// use an error count to count the number of unfilled mandatory fields
		let errorCount = 0;
		// check every mandatory field, if null or empty, prevent submission and add to error count
		if (firstName.value === "" || firstName.value == null) {
			event.preventDefault();
			errorCount++;
		}
		if (lastName.value === "" || lastName.value == null) {
			event.preventDefault();
			errorCount++;
		}
		if (phoneNumber.value === "" || phoneNumber.value == null) {
			event.preventDefault();
			errorCount++;
		}
		if (emailAddress.value === "" || emailAddress.value == null) {
			event.preventDefault();
			errorCount++;
		}
		if (patientType.value === "" || patientType.value == null) {
			event.preventDefault();
			errorCount++;
		}
		if (appointmentType.value === "" || appointmentType.value == null) {
			event.preventDefault();
			errorCount++;
		}
		// if total number of errors (unfilled mandatory fields) are 0, "submit"
		if (errorCount == 0) {
			// prevent page refresh
			event.preventDefault();
			// reset form to mimic submission on user end
			bookingForm.reset();
		}
	});
}