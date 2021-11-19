function validate(event){
    event.preventDefault()
    let email = document.forms["form"]["email"].value
    let pass = document.forms["form"]["password"].value
    if (email === "admin@gmail.com" && pass === "admin") {
        alert("đăng nhập thành công")
    }
    else{
        alert("đăng nhập không thành công")
    }
}