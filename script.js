// document ready function 
/** ensures that the HTML is fully loaded before trying to use any JS */
// $ = getElement or querySelector in jQuery syntax

/** in need to grad the doc (HTML) and check it is ready */
$(document).ready(function() {
    // all js placed inside of here - wrapper function, wraps all of js

    // ex - change color of all p tags to red once doc is ready
    $("p").css("color", "red"); // all p tags
    $("#one").css("color", "blue"); // first tag w/ id of one is now blue

    // ex - change all p colors using jQuery
    $("#two").css("color", "orange");
    $("#three").css("color", "yellow");
    $("#four").css("color", "pink");
    $("#five").css("color", "purple");

    // body bg color to black
    $("body").css("background-color", "black");

    // click events
    // click event for hide p tags
    $("#hideButton").click(function() {
        // my js for the click event here
        $("p").hide();
    });

    // click event for show button
    $("#showButton").click(function() {
        $("p").show();
    })

    // click event on the event button
    $("#alertButton").click(function() {
        alert("the alert button works!");
    })

    // on change of the username, update the user result p tag span
    $("#usernameInput").change(function(event) {
        $("#usernameResult").html(event.target.value); // change html inside p tag
    })

    $("#passwordInput").change(function(event) {
        $("#passwordResult").html(event.target.value);
    })

    // DATEPICKER EXAMPLE

    // initialise datepicker on the inputs - where datepicker will be opened
    $("#startDate").datepicker({
        // date format to dd-mm-yy
        dateFormat: "dd-mm-yy",
        onSelect: function() {
            const startDate = $("#startDate").datepicker("getDate");
            console.log(startDate);

            // run calculate function
            const diffDays = calculateDays();
            populateResults(diffDays);
        }

    });

    $("#endDate").datepicker({
        dateFormat: "dd-mm-yy",
        onSelect: function() {
            const endDate = $("#endDate").datepicker("getDate");
            console.log(endDate);

            // run calculate function
            const diffDays = calculateDays();
            populateResults(diffDays);
        }
    });

    // calculate the difference between the 2 dates - startDate and endDate
    function calculateDays() {
        const startDate = $("#startDate").datepicker("getDate");
        const endDate = $("#endDate").datepicker("getDate");

        // check if we have a start date and an end date
        if (startDate && endDate) {

            // calculate the difference between the 2 dates
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime()) // makes sure that the number is positive
            console.log(timeDiff);

            // 1000 milliseconds per second
            // 3600 seconds per hour
            // 24 hours in a day

            // 1000 * 3600 * 24 = number of milliseconds in a day

            // timeDiff / number of milliseconds in a day = number of days
            // number of days is a whole number (integer) - we use Math.ceil()

            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);

            // update the number of days in the span
            $("#numberOfDays").text(diffDays);

            // return the diffDays and make it accessible to the populate function
            return diffDays;

        } else {
            // make sure number of days is empty:
            $("#numberOfDays").text(""); // set it to empty when there are no start and end dates
        }
    }

    // example -  using date to filter
    const hotels = [
        {
            id: 1,
            name: "hotel 1",
            minStay: 3,
            maxStay: 10,
        },
        {
            id: 4,
            name: "hotel 4",
            minStay: 4,
            maxStay: 6,
        },
        {
            id: 3,
            name: "hotel 3",
            minStay: 5,
            maxStay: 8,
        },
        {
            id: 5,
            name: "hotel 5",
            minStay: 4,
            maxStay: 9,
        },
        {
            id: 2,
            name: "hotel 2",
            minStay: 1,
            maxStay: 5,
        },
    ]

    function populateResults(diffDays) {
        // clear out results div
        $("#results").html("");

        // run a for each loop over the hotel array to do this for each hotel
        hotels.forEach(hotel => {
            if (diffDays >= hotel.minStay && diffDays <= hotel.maxStay) {
                $("#results").append(`<p>${hotel.name}</p>`);
            } else {
                $("#results").append(``);
            }
        }) 
    }

})