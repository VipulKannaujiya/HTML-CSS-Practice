function discount(){
    user_code = document.getElementById("input").value;
    if(user_code == "vip1022"){
        result.innerHTML = "Congratution🎉, You Got 50% Discount !!";
        result.style.color = "green";
        document.body.style.backgroundColor = "#c6ffc6";
    }
    else{
        result.innerHTML = "I am Sorry🥺, Wrong Discount Code !!";
        result.style.color = "red";
        document.body.style.backgroundColor = "#ffc6c6";
    }
}