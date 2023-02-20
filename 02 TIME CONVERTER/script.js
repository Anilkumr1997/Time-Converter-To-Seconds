let input1 = document.getElementById("hoursInput");
let input2 = document.getElementById("minutesInput");
let button = document.getElementById("convertBtn");
let second = document.getElementById("timeInSeconds");
let error = document.getElementById("errorMsg");

button.addEventListener("click", function() {
    let user = input1.value;
    let user1 = input2.value;
    if (user === "") {
        second.textContent = '';
        error.textContent = "plese enter a valid number hours";
    } else if (user1 === "") {
        second.textContent = '';
        error.textContent = "please enter a valid number minuts";
    } else {
        error.textContent = '';
        let span = document.createElement("span");
        span.classList.add("output");
        span.textContent = parseInt(user) * 3600 + parseInt(user1) * 60 + ' Seconds';
        second.appendChild(span);
    }
});