;(function () {

// Set the date we're counting down to
var countDownDate = new Date("October 26, 2019 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="demo"
    // document.getElementById("demo").innerHTML = days + "Days " + hours + "Hours "
    // + minutes + "Minutes " + seconds + "Seconds ";

    // Display the result in an element with id="demo"
    document.getElementById("days").innerHTML = days + " <small>days</small>";
    document.getElementById("hours").innerHTML = hours + " <small>hours</small> ";
    document.getElementById("minutes").innerHTML = minutes + " <small>minutes</small> ";
    document.getElementById("seconds").innerHTML = seconds + " <small>seconds</small> ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "That's all folks!!";
    }
}, 1000);
}());