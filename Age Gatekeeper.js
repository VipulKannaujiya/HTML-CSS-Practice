let currentYear = 2026; // Hamara current year

function checkAccess() {
    // Input se saaman nikala aur number me badla
    let userYear = Number(document.getElementById("birthYear").value);
    
    // Age nikaali
    let age = currentYear - userYear;
    
    // Screen par badlaav karne ke liye element ko pakda
    let status = document.getElementById("statusMessage");

    // Web Conditional Locha
    if (age >= 18) {
        status.innerHTML = "🎉 Welcome Bhai! Aap website browse kar sakte hain.";
        status.style.color = "green";
        document.body.style.backgroundColor = "#e6ffe6"; // Pura page green tint me
    } else {
        status.innerHTML = "❌ Chal nikal! Umar choti hai abhi teri. 👶";
        status.style.color = "red";
        document.body.style.backgroundColor = "#ffe6e6"; // Pura page red tint me
    }
}