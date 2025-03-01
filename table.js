function addstudent(){
    var name=document.getElementById("st_name").value
    var father=document.getElementById("st_father").value
    var course=document.getElementById("st_course").value

    if(name=="" || father=="" || course==""){
        alert("fill out all field")
    }else{
        document.getElementById("student_list").style.display=""

        document.getElementById("name").innerHTML=name
        document.getElementById("father").innerHTML=father
        document.getElementById("course").innerHTML=course

        document.getElementById("st_name").value=""
        document.getElementById("st_father").value=""
        document.getElementById("st_course").value=""

        document.getElementById("action").innerHTML="add student"



        var row=table.insertRow(0)

        var cel1=row.insertCell(0)   
        var cel2=row.insertCell(1)
        var actions=row.insertCell(2)
     
        cel1.innerHTML=get_name
        cel2.innerHTML=get_roll
        actions.innerHTML='<button onclick="update()" style="background-color: orange;">Update</button> <button style="background-color: red;">Delete</button>'


        
    }

}
function Update_st(){

    document.getElementById("action").innerHTML="update student"


    var new_st_name=document.getElementById("name").innerHTML
    var new_st_father_name=document.getElementById("father").innerHTML
    var new_st_course=document.getElementById("course").innerHTML

    document.getElementById("st_name").value=new_st_name
    document.getElementById("st_father_name").value=new_st_father_name
    document.getElementById("st_course").value=new_st_course

}