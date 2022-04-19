
//Change the background color after clicking submit
const reviewBox = document.getElementById('review-box');
const submitButton = document.getElementById('submit-button');

//function which will be used to change the background color blue
function colorChange() {
    reviewBox.style.backgroundColor = 'black';
}

//Actual event
submitButton.addEventListener('click', colorChange);



