var allElements;
var fontSize = 100;

window.onload = function(){
    allElements = document.getElementsByTagName('*')
}

function changeFontSize(operation){
    switch(operation){
        case 'increase':
            increateFontSize();
            break;
        case 'decrease':
            decreaseFontSize();
            break;
        default:
            console.log('Invalid operation selected (' + operation + ')');
            break;
    }
}

function increaseFontSize(){
    fontSize++;
    for(var i = 0; i < allElements.length; i++){
        allElements[i].style.fontSize = fontSize.toString() + '%'
    }
}

function decreaseFontSize(){
    fontSize--;
    for(var i = 0; i < allElements.length; i++){
        allElements[i].style.fontSize = fontSize.toString() + '%'
    }
}