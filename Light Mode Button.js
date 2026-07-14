let isDark = false;
function btn(){
    if(isDark == true){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        isDark = false; // 🔄 State badli: Ab light mode ho gaya hai
        console.log("Vibe: Light Mode ☀️");
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        isDark = true; // 🔄 State badli: Ab dark mode ho gaya hai
        console.log("Vibe: Dark Mode 🌙");
    }
}
function cbtn(){
    color1 = document.getElementById("color").value;
    document.body.style.backgroundColor = color1;
}