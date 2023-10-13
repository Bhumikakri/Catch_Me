let box = document.querySelector('.drop');

//-------------events--------------------------//

box.addEventListener("mouseover" , ()=>{
    let BrowserHeight = document.documentElement.clientHeight;
    let BrowserWidth = document.documentElement.clientWidth;
    // console.log(BrowserHeight, BrowserWidth);
    let boxH = box.offsetHeight;
    let boxW = box.offsetWidth;
   left = leftPosition(BrowserWidth - boxW);
   Upper = leftPosition(BrowserHeight - boxH);

   box.style.left = left + "px"
   box.style.top = Upper + "px"
})

//------for Positioning of box----------------------//

function leftPosition(Lp){
    // console.log(Lp);
   let valueLeft = Math.floor(Math.random() * Lp);
//    console.log(valueLeft);
    return valueLeft;
}


// function TopPosition(Lp){
//     console.log(Lp);
//    let valueTop = Math.floor(Math.random() * Lp);
//    console.log(valueTop);
//     return valueTop;
// }