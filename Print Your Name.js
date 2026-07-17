let isTrue = false;
function btn(){
    let value = document.getElementById("input").value;
        if(isTrue == true){
            container.innerHTML += value + "<br>";
            let container2 = document.getElementById("container");
            container2.style.backgroundColor = "#9bafff";
            isTrue = false;
        }
        else{
            container.innerHTML += value + "<br>";
            let container2 = document.getElementById("container");
            container2.style.backgroundColor = "#9bafff";
            isTrue = true;
        }
}