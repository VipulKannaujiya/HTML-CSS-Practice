function btn(){
    let marks = Number(document.getElementById("input").value)

    if(marks >= 80 && marks <= 100){
        result.innerHTML = "Distinction 🏆";
        document.body.style.backgroundColor = "#aaffaa";
        result.style.color = "green";
    } else if(marks >= 33 && marks < 80) {
        result.innerHTML = "Paas Ho Gaye...👍";
        document.body.style.backgroundColor = "#feffaa";
        result.style.color = "black";
    } else if(marks >= 0 && marks < 33){
        result.innerHTML = "Fail❌"
        document.body.style.backgroundColor = "#ffaaaa"
        result.style.color = "red"
    } else {
        result.innerHTML = "Lagta hai aapne galat mark add kiya..."
        document.body.style.backgroundColor = "#ffffff"
    }
}