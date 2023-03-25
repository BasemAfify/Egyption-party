// $("#id").click(function () {
//   $(".singer div:not(.template)").fadeOut("fast");
// });

// $(".par").slideDown(1000);
$(".one").next().show("500");

$("h3").click(function () {
  console.log("hi");

  let e = $(this).next();
  $(this).next().slideToggle(1000);  
  $("h3").next().not(e).slideUp(1000);  
});







let end = new Date("03/25/2024 10:1 AM").getTime();

let counter = setInterval(() => {
  let datenow = new Date().getTime();
  let datediff = end - datenow;

  let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((datediff % (1000 * 60)) / 1000);

  document.getElementById("countdown-days").innerHTML = days + "D";
  document.getElementById("countdown-hours").innerHTML = hours + "h";
  document.getElementById("countdown-minutes").innerHTML = minutes + "m";
  document.getElementById("countdown-seconds").innerHTML = seconds + "s";

  if (datediff <= 0) {
    clearInterval(counter);
  }
}, 1000);
