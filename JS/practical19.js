const f1 = document.getElementById("form1");
const f2 = document.getElementById("form2");
const f3 = document.getElementById("form3");

// for next and back button
const n1 = document.getElementById("next1");
const n2 = document.getElementById("next2");
const b1 = document.getElementById("back1");
const b2 = document.getElementById("back2");

const progress = document.getElementById("progress");


// Event Handler

n1.onclick = function() {
    f1.style.left = "-61.5vh";
    f2.style.left = "5.5vh";
    progress.style.width = "33vh";
}

b1.onclick = function() {
    f1.style.left = "5.5vh";
    f2.style.left = "61.5vh";
    progress.style.width = "16.4vh";

}
n2.onclick = function() {
    f2.style.left = "-61.5vh";
    f3.style.left = "5.5vh";
    progress.style.width = "49vh";
}

b2.onclick = function() {
    f2.style.left = "5.5vh";
    f3.style.left = "61.5vh";
    progress.style.width = "33vh";

}