console.log("session 6 is running");

let num1 = "1";
let num2 =  1

// = là phép gán

let name = "Khoa Pug"
// let x = name; => x = "Khoa Pug"

// == là phép so sánh giá trị

console.log(num1 == num2);

// === là phép so sánh giá trị và kiểu dữ liệu

console.log("kiểu dữ liệu của num1",typeof(num1));
console.log("kiểu dữ liệu của num1" , typeof(num2));
console.log(num1 === num2 );

// array là gi? => mảng dữ liệu
// CRUD

let arrayDemo = [1,"mindX" , false , {name : "nam"}, [1,2,3] ]

// thêm vào đầu mảng
arrayDemo.unshift(1000)
console.log(arrayDemo);

// xoá phẩn tử đầu mảng
arrayDemo.shift()
console.log(arrayDemo);

// thêm phần tử cuối mảng
arrayDemo.push("haha")
console.log(arrayDemo);

// xoá phần tử cuối cùng
arrayDemo.pop()
console.log(arrayDemo);


// obj là gì => đối tượng
let Rock = {
    name : "Rock",
    color : "red" ,
    height : "100m",
    weight : "10000kg",
    surface : "scabrous"  
}

// CRUD

Rock.color = "black"
console.log(Rock.color);

for(let i = 0 ; i < 3 ; i++){
    console.log(arrayDemo[i]);
}


function user(){
    let name = document.getElementById("name").value 
    let pass = document.getElementById("pass").value 
    document.getElementById("user-name").innerHTML = name
    document.getElementById("user-password").innerHTML = pass
    alert(name + "\n" + pass )

}






