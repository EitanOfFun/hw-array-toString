//global variables
var arr = [];

function pushToArray(){
    // variables
    var itemToAddInput = document.getElementById("itemToAddInput"),
        delimiterInput = document.getElementById("delimiterInput"),
        arrayString = document.getElementById("arrayString");
    
    //push item to global array
    arr.push(itemToAddInput.value);
    
    //show new array as string
    arrayString.innerHTML = arr.join(delimiterInput.value);
    
}
