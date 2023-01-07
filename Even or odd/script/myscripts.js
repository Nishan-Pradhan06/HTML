

var num, temp;
function even_odd() {
    var num = parseInt(document.getElementById("num").value);
    if (num) {
        temp = document.getElementById("results");
        temp.style.display = "block";
        if (num % 2 == 0) {
            document.getElementById("res").innerHTML = "Even";
        }
        else {
            document.getElementById("res").innerHTML = "Odd";
        }
    }
}