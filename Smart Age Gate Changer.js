let current_year = 2026;
function eligible(){
    let user_year = Number(document.getElementById("year").value);
    let age = current_year - user_year;
    document.getElementById("age").innerHTML = ("you are " + age +" year old")
    if (age >= 18){
        document.getElementById("age").innerHTML = ("you can enter the website🟢")
    }
    else{
        document.getElementById("age").innerHTML = ("Blocked🚫")
    }
}