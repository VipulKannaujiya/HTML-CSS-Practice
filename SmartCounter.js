// Pehle se cart me 1 item hai (Number data type)
let count = 1; 

function plusLocha() {
    count++; // Increment Operator: count ko 1 se badha diya
    document.getElementById("quantityBox").innerHTML = count;
}

function minusLocha() {
    // Yahan hum Comparison Operator (<) ka use karenge taaki quantity 0 ya minus me na chali jaye
    if (count > 1) {
        count--; // Decrement Operator: count ko 1 se ghata diya
        document.getElementById("quantityBox").innerHTML = count;
    } else {
        alert("Abe kam se kam 1 item toh kharidna padega! 🛒");
    }
}