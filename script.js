var date = moment().format("dddd MMMM Do");
var statusElement = $("#status");
var task = $(".toDo");

$("#currentDay").text(date);

var time = moment().format("ha");

var hour = document.getElementById("hour").innerHTML;


function setPresent() {
    if(time === "9pm"){
        var x = task[0];
        x.setAttribute("class", "present ");
    } else{
        var x = task[0];
        x.setAttribute("class", "toDo col-8");
    }
    
    if(time === "10pm"){
        var x = task[1];
        x.setAttribute("class", "present");
    } else{
        var x = task[1];
        x.setAttribute("class", "toDo col-8");
    }
    
    if(time === "11am"){
        var x = task[2];
        x.setAttribute("class", "present");
    } else{
        var x = task[2];
        x.setAttribute("class", "toDo col-8");
    }
    
    if(time === "12am"){
        var x = task[3];
        x.setAttribute("class", "present");
    } else{
        var x = task[3];
        x.setAttribute("class", "toDo col-8");
    }
    
    if(time === "1pm"){
        var x = task[4];
        x.setAttribute("class", "present");
    } else{
        var x = task[4];
        x.setAttribute("class", "toDo col-8");
    }
    
    if(time === "2pm"){
        var x = task[5];
        x.setAttribute("class", "present");
    } else{
        var x = task[5];
        x.setAttribute("class", "toDo col-8");
    }
    
    if(time === "3pm"){
        var x = task[6];
        x.setAttribute("class", "present");
    } else{
        var x = task[6];
        x.setAttribute("class", "toDo col-8");
    }
    
    if(time === "4pm"){
        var x = task[7];
        x.setAttribute("class", "present");
    } else{
        var x = task[7];
        x.setAttribute("class", "toDo col-8");
    }
    
    if(time === "5pm"){
        var x = task[8];
        x.setAttribute("class", "present");
    } else{
        var x = task[8];
        x.setAttribute("class", "toDo col-8");
    }
}

setPresent();
