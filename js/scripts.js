// We need a way to get the current time and have that be updated each second.

// To do this, we are going to create a function that contains a timer to call itself again each second.


function showTime() {
    var date = new Date(); // This gets us the current date and time

    var hour = date.getHours(); // 0-23
    var minute = date.getMinutes(); // 0-59
    var seconds = date.getSeconds(); // 0-59
    /*
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    */
    var period = "AM"; // We're going to assume that we're in AM to start

    // We need to make sure the hour is properly represented in 12-hr time, and we also need to determine whether we should display AM or PM

    // With our hours being between 0 and 23, 0 would equal 12AM and everything 12 0r above is a PM hour

    if (hour === 0) {
        period = "AM";
    } else if (hour >= 12) {
        period = "PM";
    }

    if (hour === 0) {
        hour = 12; // If hour equals 0, change it to 12
    }

    if (hour > 12) {
        hour = hour - 12; // If hour is greater than 12, subtract 12 from it - 13 === 1
        period = "PM";
    }

    hour = (hour < 10) ? ("0" + hour) : hour; // If hour is less than 10, set hour equal to 0 plus the value of hour, otherwise, keep hour the same by setting it equal to itself

    minute = (minute < 10) ? ("0" + minute) : minute;

    seconds = (seconds < 10) ? ("0" + seconds) : seconds;

    // String to store the current time
    var time = hour + ":" + minute + ":" + seconds + " " + period;
    // var currentDate = month + "/" + day + "/" + year;

    document.getElementById("clockDisplay").innerText = time;
    // document.getElementById("dateDisplay").innerText = currentDate;

    // GETTING THE DATE

    var dayOfWeek = date.getDay(); // Returns a value between 0 and 6 that corresponds to the current day of the week
    var dayOfMonth = date.getDate(); // Returns the current day in the month (1 -31)
    var month = date.getMonth(); // Returns a value between 0 and 11 that corresponds to the current month

    var date = getDayOfTheWeek(dayOfWeek) + "," + getMonth(month) + " " + dayOfMonth

    document.getElementById("dateDisplay").innerText = date;
    

    setTimeout(showTime, 1000); // Schedule the showTime function to be called after 1000 ms (1 second)
}

// Function to take in a number from 0-6 and return the proper day name
function getDayOfTheWeek(dayNum) {
    switch (dayNum) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednseday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}

function getMonth(monthNum) {
    switch (monthNum) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
    }
}

showTime();

// JavaScript Clock Challenges:
// 1. Add a different font (of your choice) for your clock to use.
// 2. Display the current date below the time. For example: Today's date is: Tuesday, September 17th. *Hint - hours, minutes, and seconds aren't the only thing we can pull from a date object*
// 3. Add a header to your clock displaying your name, GitHub link, and LinkedIn profile link.