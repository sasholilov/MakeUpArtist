const firstName = document.querySelector("#firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("telephoneNumber");
const bookingDate = document.getElementById("bookingDate");
const bookingHour = document.getElementById("hour-input");
const bookingMinute = document.getElementById("minute-input");
const bookBtn = document.getElementById("btnBook");
const succesMsg = document.getElementById("succes-sent");
const errorMsg = document.getElementById("error-sent");
const product = document.querySelectorAll(".product");

product.forEach((pr) => {
  pr.addEventListener("mouseover", function () {
    pr.querySelector("p").style.color = "white";
    pr.querySelector("h3").style.color = "white";
    console.log("hover");
  });

  pr.addEventListener("mouseout", function () {
    pr.querySelector("p").style.color = "#ffddbf";
    pr.querySelector("h3").style.color = "#ffddbf";
    console.log("hover");
  });
});

window.addEventListener("load", function () {
  const today = new Date().toISOString().slice(0, 10);
  const bookingDate = document.getElementById("bookingDate");
  bookingDate.value = today;
});

function formatHour(input) {
  if (input.value.length === 1) {
    input.value = "0" + input.value;
  }
}

function formatMinute(input) {
  if (input.value.length === 1) {
    input.value = "0" + input.value;
  }
}

bookBtn.addEventListener("click", function () {
  if (firstName.value && lastName.value && phone.value) {
    const bookingObject = {
      FirstName: firstName.value,
      LastName: lastName.value,
      Telephone: phone.value,
      BookingDate: bookingDate.value,
      BookingHour: `${bookingHour.value}:${bookingMinute.value}`,
    };

    emailjs.send("service_ov8ybw8", "template_j0a6pxw", bookingObject).then(
      function (response) {
        console.log("Email sent successfully", response);
        succesMsg.style.display = "block";
        setTimeout(function () {
          succesMsg.style.display = "none";
        }, 3500);

        firstName.value = "";
        lastName.value = "";
        phone.value = "";
        bookingDate.value = "";
        bookingHour.value = "";
      },
      function (error) {
        console.error("Error sending email", error);
        alert("Възникна грешка в изпращането на писмото!");
      }
    );
  } else {
    errorMsg.style.display = "inline";
    setTimeout(function () {
      errorMsg.style.display = "none";
    }, 3500);
  }
});
