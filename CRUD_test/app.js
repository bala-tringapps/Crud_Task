var row_select = null;
function onFormSubmit(e){
    event.preventDefault();
    var data = read_data();
     var validate =name_validate();
     if(validate==1){
        document.getElementById('namevalidate').innerText = '';
    if(row_select === null) {
      data_insert(data);
    }
    else{
        update(data);
    }

    reset();
}
}


function read_data(){
    var data ={};
    data["user_name"] = document.getElementById("user_name").value;
    data["user_age"] = document.getElementById("user_age").value;
    data["user_gender"] = document.querySelector('[name = "Gender"]:checked').value;
    data["hobby"] = document.getElementById("hobby").value;
    
    return data;
}

function data_insert(data_value){
    var table_data = document.getElementById("category").getElementsByTagName("tbody")[0];    
    var new_row = table_data.insertRow(table_data.length);
    var data_1 = new_row.insertCell(0);
        data_1.innerHTML = data_value.user_name;
    var data_2 = new_row.insertCell(1);
        data_2.innerHTML = data_value.user_age;
    var data_3 = new_row.insertCell(2);
        data_3.innerHTML = data_value.user_gender;
    var data_4 = new_row.insertCell(3);
        data_4.innerHTML = data_value.hobby;
    var data_5 = new_row.insertCell(4);
        data_5.innerHTML = `<button onClick="edit(this)">Edit</button> <button onClick="deleting(this)">Delete</button>`
        
        
}

function edit(edit_data){
    row_select = edit_data.parentElement.parentElement;
    document.getElementById("user_name").value = row_select.cells[0].innerHTML;
    document.getElementById("user_age").value = row_select.cells[1].innerHTML;
    // document.getElementsByClassName("user_gender").value = row_select.cells[2].innerHTML;
    var Gender = row_select.cells[2].innerHTML;
    if(Gender== "Male"){
        document.getElementById('Male').checked = true;
    }
    else {
        document.getElementById('Female').checked = true;
    }
    document.getElementById("hobby").value = row_select.cells[3].innerHTML;

}

function update(data){
    row_select.cells[0].innerHTML = data.user_name;
    row_select.cells[1].innerHTML = data.user_age;
    row_select.cells[2].innerHTML = data.user_gender;
    row_select.cells[3].innerHTML = data.hobby;
    
    
}

function deleting(delete_data){
 if(confirm('Delete!')){
    var row = delete_data.parentElement.parentElement;
     document.getElementById('category').deleteRow(row.rowIndex);
     document.getElementById('Male').checked=false;
     document.getElementById('Female').checked=false;
 }
 reset();
}

function reset(){
    document.getElementById("user_name").value = '';
    document.getElementById("user_age").value = '';
    document.getElementById('Male').checked=false;
    document.getElementById('Female').checked=false;
    document.getElementById("hobby").value = '';
    row_select = null;
}
var temp = data["user_gender"];
console.log(temp);
var submit = document.getElementById('submit_btn');
submit.addEventListener("click",function(){
    let check = name_validate();
    if(check !== true){
    document.getElementById('namevalidate').innerText = 'Name is required';
    
    reset();
    }
    else{
        read_data();
    }
});

function name_validate(){
        var name_input = document.getElementById('user_name').value;
        var name_value;
        if(name_input !== ""){
            name_value = true
            
            return name_value;
        }
        else{
            document.getElementById('namevalidate').innerText = 'Name is required';
            name_value = false;
            return name_value;
        }
}
