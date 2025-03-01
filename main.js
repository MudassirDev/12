function addstudent() {
    var name = document.getElementById("name").value;
    var father = document.getElementById("fname").value;
    var roll = document.getElementById("roll").value;
  
    if (name === "" || father === "" || roll === "") {
      alert("fill out all field");
    }
    else{

        document.getElementById("st_list").style.display=""   

document.getElementById("action").innerHTML="Add Student"

        var table = document.getElementById("student_table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = father;
    cell3.innerHTML = roll;
    var cell4 = row.insertCell(3);

    cell4.innerHTML = '<button onclick="update()" class="btn btn-warning">Update</button> <button class="btn btn-danger">Delete</button>';

    document.getElementById("name").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("roll").value = "";


        document.getElementById("st_name").innerHTML=name
        document.getElementById("f_name").innerHTML=father
        document.getElementById("rollno").innerHTML=roll


      
  
    }
  }
  function update() {
    document.getElementById("action").innerHTML = "Update";
    document.getElementById("name").value = name;
    document.getElementById("fname").value = father;
    document.getElementById("roll").value = roll;

  }
  