var count = 0;

document.getElementById("decrement").disabled = true;
document.getElementById("decrement").style.backgroundColor = "#258585";
document.getElementById("decrement").style.boxShadow = " 0 4px #260d0d";

// increment function

function increment() {


    document.getElementById("decrement").disabled = false;
    document.getElementById("decrement").style.backgroundColor = " #652525";
    document.getElementById("decrement").style.boxShadow = " 0 4px #999";


    count += 1;
    document.getElementById("counter").innerHTML = count;
}
// decrement function
function decrement() {

    if (count > 0) {
        count -= 1;
        document.getElementById("counter").innerHTML = count;
        document.getElementById("decrement").style.backgroundColor = " #652525";
        document.getElementById("decrement").style.boxShadow = " 0 4px #999";
    } else {
        document.getElementById("decrement").disabled = true;
        document.getElementById("decrement").style.backgroundColor = "#258585";
        document.getElementById("decrement").style.boxShadow = " 0 4px #260d0d";

    }
    if (count == 0) {
        document.getElementById("decrement").disabled = true;
        document.getElementById("decrement").style.backgroundColor = "#258585";
        document.getElementById("decrement").style.boxShadow = " 0 4px #260d0d";

    }
}