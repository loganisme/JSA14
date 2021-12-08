let table = document.getElementById("table");
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
</thead>`;

var in4;
if (localStorage.getItem("in4")) {
  in4 = JSON.parse(localStorage.getItem("in4"));
  let renderPhoneList = in4
    .map((value, index) => {
      return `        <tr>
<td><input type="checkbox"></td>
<td>${value.name}</td>
<td>${value.email}</td>
<td>${value.add}</td>
<td>${value.sdt}</td>
<td>
  <i class="fas fa-pen" onclick="showForm()
  editName(${index})"></i>
  <i class="fas fa-trash" onclick="deleteName(${index})"></i>
</td>
</tr>`;
    })
    .join("\n");

  table.innerHTML += `
${renderPhoneList}`;
} else {
  in4 = [];
}

let addForm = false;

function showForm() {
  addForm = true;
  if (addForm == true) {
    document.getElementById("add-change").innerHTML = `
    <form id="form" onsubmit="return false">
    <input type="hidden" id="index"/>
    <input type="text" placeholder="name" name="name" id="name" required/>
    <input type="email" placeholder="email" name="email" id="email" required/>
    <input type="text" placeholder="add" required name="add" id="add"/>
    <input type="text" placeholder="sdt" name="sdt"  id="sdt" required/>
    <input type="button" class="padding-10" id="save" onclick="addContact(event)" value="thêm"/>
    <input style="display: none;" type="button" class="padding-10" id="edit" onclick="changeName(event)" value="sửa" />
  </form>`;
  }
}

function addContact(event) {
  event.preventDefault();
  let name = document.forms["form"]["name"].value;
  let email = document.forms["form"]["email"].value;
  let add = document.forms["form"]["add"].value;
  let sdt = document.forms["form"]["sdt"].value;
  if (localStorage.getItem("in4")) {
    in4 = JSON.parse(localStorage.getItem("in4"));
  } else {
    in4 = [];
  }

  if (name && email && add && sdt) {
    in4.push({ name, email, add, sdt });

    localStorage.setItem("in4", JSON.stringify(in4));
  }

  let renderPhoneList = in4
    .map((value, index) => {
      return `        <tr>
  <td><input type="checkbox"></td>
  <td>${value.name}</td>
  <td>${value.email}</td>
  <td>${value.add}</td>
  <td>${value.sdt}</td>
  <td>
  <i class="fas fa-pen" onclick="showForm()
  editName(${index})"></i>
    <i class="fas fa-trash" onclick="deleteName(${index})"></i>
  </td>
  </tr>`;
    })
    .join("\n");

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

function editName(key) {
  console.log(key);
  if (localStorage.getItem("in4")) {
    in4 = JSON.parse(localStorage.getItem("in4"));
  } else {
    in4 = [];
  }
  document.getElementById("save").style.display = "none";
  document.getElementById("edit").style.display = "inline-block";
  document.getElementById("index").value = key;
  document.getElementById("name").value = in4[key].name;
  document.getElementById("add").value = in4[key].add;
  document.getElementById("email").value = in4[key].email;
  document.getElementById("sdt").value = in4[key].sdt;
}

function changeName(event) {
  event.preventDefault();
  if (localStorage.getItem("in4")) {
    in4 = JSON.parse(localStorage.getItem("in4"));
  } else {
    in4 = [];
  }                       
  let index = document.getElementById("index").value;
  in4[index].name = document.getElementById("name").value;
  in4[index].email = document.getElementById("email").value;
  in4[index].sdt = document.getElementById("sdt").value;
  in4[index].add = document.getElementById("add").value;
  let renderPhoneList = in4
    .map((value, index) => {
      return `        <tr>
<td><input type="checkbox"></td>
<td>${value.name}</td>
<td>${value.email}</td>
<td>${value.add}</td>
<td>${value.sdt}</td>
<td>
  <i class="fas fa-pen" onclick="showForm()
  editName(${index})"></i>
  <i class="fas fa-trash" onclick="deleteName(${index})"></i>
</td>
</tr>`;
    })
    .join("\n");

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
  document.getElementById("save").style.display = "inline-block";
  document.getElementById("edit").style.display = "none";
  localStorage.setItem("in4", JSON.stringify(in4));
}

function deleteName(key) {
  if (localStorage.getItem("in4")) {
    in4 = JSON.parse(localStorage.getItem("in4"));
  } else {
    in4 = [];
  }
  let i;
  if (confirm("are u sure?")) {
    in4.splice(key, 1);
    localStorage.setItem("in4", JSON.stringify(in4));
  }
  let renderPhoneList = in4
    .map((value, index) => {
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
    })
    .join("\n");

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
}

function deleteAll() {
  if (localStorage.getItem("in4")) {
    in4 = JSON.parse(localStorage.getItem("in4"));
  } else {
    in4 = [];
  }
  localStorage.clear();
  console.log(in4);
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
</thead>`;
}
