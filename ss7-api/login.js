function validate(event){
    event.preventDefault()
    let user = document.forms["login-table"]["user-name"].value
    let pass = document.forms["login-table"]["pass"].value
    if (user === "admin" && pass === "admin") {
        alert("đăng nhập thành công")
        window.location ="./index.html"
    }
    else{
        alert("đăng nhập không thành công")
    }
}