function btn(){
    let value = Number(document.getElementById("input").value);

    result.innerHTML = "";
    if(value == 0){
        result.innerHTML = "Please Enter a number."
    }
    else{
        for(let i = 1; i <= 10; i++){
            result.innerHTML += value + " * " + i + " = " + value*i + "<br>";
            let result1 = document.getElementById("result");
            result1.style.backgroundColor = "#b0ffb8";
        }
    }
}