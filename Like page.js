let haslike = false;
function lkbtn(){
    if(haslike == true){
        like.innerHTML = "👍Like(0)"
        console.log("1 like removed...")
        haslike = false;
    }
    else{
        like.innerHTML = "❤️ Liked(1)";
        console.log("1 like gained...")
        haslike = true;
    }
}