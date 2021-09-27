var row_select = null;
function onFormSubmit(e){
    event.preventDefault();
    var data = read_data();
    if(row_select === null){
      data_insert(data);

    }
    else{
        update(data);
    }
    reset();
}


function read_data(){
    var data ={};
    data["name"] = document.getElementById("user_name").value;
    data["age"] = document.getElementById("user_age").value;
    data["gender"] = document.getElementsByClassName('[name = "gender"]:checked').value;
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
        data_5.innerHTML = `<button onClick="edit(this)">Edit</button> <button onClick="deleting(this)">Delete<button>`
}

function edit(edit_data){
    row_select = edit_data.parentElement.parentElement;
    document.getElementById("user_name").value = row_select.cells[0].innerHTML;
    document.getElementById("user_age").value = row_select.cells[1].innerHTML;
    document.getElementsByClassName("user_gender").value = row_select.cells[2].innerHTML;
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
     row = delete_data.parentElement.parentElement;
     document.getElementById('category').deleteRow(row.rowIndex);
 }
 reset();
}

function reset(){
    document.getElementById("user_name").value = '';
    document.getElementById("user_age").value = '';
    document.getElementsByClassName("user_gender").value = '';
    document.getElementById("hobby").value = '';
}