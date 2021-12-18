
var table =document.getElementById("render-table")

var content = ``

fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
    .then(Response => Response.json())
    .then(
        data => {
            let result = data.results;
            let render = result.map(value => {
                return content +=`
            <tr><th>${value.category}</th>
            <th>${value.type}</th>
            <th>${value.difficulty}</th>
            <th>${value.question}</th>
            <th>${value.correct_answer}</th>
            <th>${value.incorrect_answer}</th></tr>`}).join(" ")
            table.innerHTML = content
        }
    )
    .catch(error => console.log(error))
 
