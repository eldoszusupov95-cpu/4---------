function login(){
    let l = document.getElementById("login").value;
    let p = document.getElementById("password").value;

    if(l === "admin" && p === "1234"){
        document.getElementById("popup").style.display = "block";
    }else{
        alert("Неверный логин или пароль!");
    }
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}