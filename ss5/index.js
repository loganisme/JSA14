// localStorage

// ghi dữ liệu vào localStorage
// lấy dữ liệu ra 
// xoá localStorage

// 1. ghi dữ liệu

// let arrSample = ["z100", "R1" , "CBR1000RR-R"]

// localStorage.setItem("motorBike" , JSON.stringify(arrSample))

// // 2. lấy dữ liệu ra
// let arrFromLocalStorage =  localStorage.getItem("motorBike")

// console.log(JSON.parse(arrFromLocalStorage));


let songsArr = ["hello","shotta flow"]

localStorage.setItem("songs" , JSON.stringify(songsArr))



let arr = JSON.parse(localStorage.getItem("songs"))
arr.push("shotta flow 2")

localStorage.setItem("songs" , JSON.stringify(arr))


let change = JSON.parse(localStorage.getItem("songs"))

change[0] = "Murder on my mind"

localStorage.setItem("songs" , JSON.stringify(change))
// localStorage.removeItem("songs")




