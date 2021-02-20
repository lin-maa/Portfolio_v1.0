
// var openWindow = document.getElementsByClassName('open-window');
// var div = document.getElementById('background');
// var closeWindow = document.getElementsByClassName('close-window');
 
// openWindow.onclick = function show() {
// 	div.style.display = "block";
// }
 
// closeWindow.onclick = function close() {
// 	div.style.display = "none";
// }
 
// window.onclick = function close(e) {
// 	if (e.target == div) {
// 		div.style.display = "none";
//     }
    
   
// function myFunction() {
//     var popup = document.getElementByID("myPopup");
//     popup.classList.toggle("show");
//     }

function navFunction() {
    let elems = document.getElementsByClassName("hamburger-content");
    // let navImg = docu
    {
        for (let i=0;i<elems.length;i++){
            if (elems[i].style.display === "flex") {
                elems[i].style.display = "none";
            } else{
                elems[i].style.display = "flex";
            }
        }
    }
   }