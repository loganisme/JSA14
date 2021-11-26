function validate(event){
    event.preventDefault()
    let email = document.forms["form"]["email"].value
    let pass = document.forms["form"]["password"].value
    if (email === "admin@gmail.com" && pass === "admin") {
        alert("đăng nhập thành công")
        window.location ="../SS4/index.html"
    }
    else{
        alert("đăng nhập không thành công")
    }
}