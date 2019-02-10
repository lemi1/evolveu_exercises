
let counter = 3
document.getElementById("btnAdd").addEventListener("click", function () {
    let ol = document.getElementById('list');
    let li = document.createElement('li');
    counter = counter + 1;
    ol.appendChild(li).textContent = 'item ' + counter;

    console.log("Hello World!");
});

// document.getElementById("btnShow").addEventListener("click", function () {
//     do {
//         console.log(document.getElementById('list').appendChild(document.createElement('li')) + counter)
//     }
//     while (counter > 3);
//     //counter = counter + 1;
//     // let ol = document.getElementById('list');
//     // let li = document.createElement('li');
//     // counter = counter + 1;


//     // console.log(ol.appendChild(li).textContent = 'item ' + counter;);
// });
