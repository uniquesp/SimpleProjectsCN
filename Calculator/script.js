 function display(value){
           document.getElementById("result").value += value;
       }

       function result(){
           let displayvalue = document.getElementById("result").value;
           let result = eval(displayvalue);
           document.getElementById("result").value = result;
       }