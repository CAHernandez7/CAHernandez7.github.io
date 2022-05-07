//Section for Submit Button
//Change the background color after clicking submit
const reviewBox = document.getElementById('review-box');
const submitButton = document.getElementById('submit-button');

//function which will be used to change the background color blue
function colorChange() {
    reviewBox.style.backgroundColor = 'black';
}

//Actual event
submitButton.addEventListener('click', colorChange);


//Section for ul li items to turn to stars when clicked
let listNum = [];
const numberRatings = document.getElementById(`num-${listNum}`);

function changeNumToPic() {
    for(i = 1; i <= 10; i++) {
        
    }
}



