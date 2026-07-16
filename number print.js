function generateGrid() {
    let container = document.getElementById("gridContainer");
    let value = Number(document.getElementById("input").value);
    
    // Pehle container ko saaf kar lo
    container.innerHTML = ""; 
    
    // 1 se 100 tak normal loop chalaya
    for (let i = 1; i <= value; i++) {
        // Har round me ek HTML ka chota dibba (div) banaya aur usme i daal diya aur += se joda
        container.innerHTML += "<div class='box'>" + i + "</div>";
    }
}