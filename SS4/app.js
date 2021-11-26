var phoneList = [];

let table = document.getElementById("table");

// let renderPhoneList = phoneList.map(value => {  return `        <tr>
//   <td><input type="checkbox"></td>
//   <td>${value.name}</td>
//   <td>${value.email}</td>
//   <td>${value.add}</td>
//   <td>${value.sdt}</td>
//   <td>
//     <i class="fas fa-pen" onclick="showForm()"></i>
//     <i class="fas fa-trash"></i>
//   </td>
// </tr>`}).join("\n")

table.innerHTML = `
<thead>
<tr>
  <th><input type="checkbox"></th>
  <th>Name</th>
  <th>Email</th>
  <th>Address</th>
  <th>Phone</th>
  <th>Action</th>
</tr>
</thead>
`;

let addForm = false;

function showForm() {
  addForm = true;
  if (addForm == true) {
    document.getElementById("add-change").innerHTML = `
    <form id="form">
    <input type="hidden" id="index"/>
    <input type="text" placeholder="name" name="name" id="name" required/>
    <input type="email" placeholder="email" name="email" id="email" required/>
    <input type="text" placeholder="add" required name="add" id="add"/>
    <input type="text" placeholder="sdt" name="sdt"  id="sdt" required/>
    <input type="submit" class="padding-10" id="save" onclick="addContact(event)" value="thêm"/>
    <input style="display: none;" type="submit" class="padding-10" id="edit" onclick="changeName(event)" value="sửa" />
  </form>`;
  }
}

function addContact(event) {
  event.preventDefault();
  let name = document.forms["form"]["name"].value;
  let email = document.forms["form"]["email"].value;
  let add = document.forms["form"]["add"].value;
  let sdt = document.forms["form"]["sdt"].value;
  phoneList.push({ name, email, add, sdt });
  console.log(phoneList);
  let renderPhoneList = phoneList.map((value,index) => {
      return `        <tr>
  <td><input type="checkbox"></td>
  <td>${value.name}</td>
  <td>${value.email}</td>
  <td>${value.add}</td>
  <td>${value.sdt}</td>
  <td>
    <i class="fas fa-pen" onclick="editName(${index})"></i>
    <i class="fas fa-trash" onclick="deleteName(${index})"></i>
  </td>
  </tr>`;
    }).join("\n");

  table.innerHTML = `
  <thead></thead>
  <tr>
    <th><input type="checkbox"></th>
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>Phone</th>
    <th>Action</th>
  </tr>
  </thead>
  ${renderPhoneList}`;
  resetInput();
}

function resetInput() {
  document.forms["form"]["name"].value = "";
  document.forms["form"]["email"].value = "";
  document.forms["form"]["add"].value = "";
  document.forms["form"]["sdt"].value = "";
}

function editName(key){
  document.getElementById("index").value = key
  document.getElementById("name").value = phoneList[key].name
  document.getElementById("email").value = phoneList[key].email
  document.getElementById("add").value = phoneList[key].add
  document.getElementById("sdt").value = phoneList[key].sdt
  document.getElementById("save").style.display = "none"
  document.getElementById("edit").style.display = "inline-block"
}

function changeName (event){
  event.preventDefault()
  let index = document.getElementById("index").value
  phoneList[index].name = document.getElementById("name").value
  phoneList[index].email = document.getElementById("email").value
  phoneList[index].sdt = document.getElementById("sdt").value
  phoneList[index].add = document.getElementById("add").value
  let renderPhoneList = phoneList.map((value,index) => {
    return `        <tr>
<td><input type="checkbox"></td>
<td>${value.name}</td>
<td>${value.email}</td>
<td>${value.add}</td>
<td>${value.sdt}</td>
<td>
  <i class="fas fa-pen" onclick="editName(${index})"></i>
  <i class="fas fa-trash"></i>
</td>
</tr>`;
  }).join("\n");

table.innerHTML = `
<thead></thead>
<tr>
  <th><input type="checkbox"></th>
  <th>Name</th>
  <th>Email</th>
  <th>Address</th>
  <th>Phone</th>
  <th>Action</th>
</tr>
</thead>
${renderPhoneList}`;
resetInput()
}

function deleteName(key){
  if(confirm("are u sure?")){
    phoneList.splice(key , 1)
}
let renderPhoneList = phoneList.map((value,index) => {
  return `        <tr>
<td><input type="checkbox"></td>
<td>${value.name}</td>
<td>${value.email}</td>
<td>${value.add}</td>
<td>${value.sdt}</td>
<td>
<i class="fas fa-pen" onclick="editName(${index})"></i>
<i class="fas fa-trash"></i>
</td>
</tr>`;
}).join("\n");

table.innerHTML = `
<thead></thead>
<tr>
<th><input type="checkbox"></th>
<th>Name</th>
<th>Email</th>
<th>Address</th>
<th>Phone</th>
<th>Action</th>
</tr>
</thead>
${renderPhoneList}`;
resetInput()}
  
function deleteAll(){
  window.location.reload()
}