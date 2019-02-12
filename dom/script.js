
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
//     while
//     // console.log(ol.appendChild(li).textContent = 'item ' + counter;);
// });

let count = 1;
document.getElementById("addy").addEventListener("click", createCard);
//let parent = document.getElementById('card').addEventListener('click', function(event){

//     console.log("hey", event.target.id)
// });
function createCard() {

    let div = document.createElement('div');
    let id = "divCard" + count;
    div.setAttribute('id', id);
    div.style.border = '2px solid black'
    card.appendChild(div);
    document.getElementById(id).innerHTML = "<p>Card " + count + "</p> <br/>\n" +
        "<button onclick='addBefore(event)'>Add Before</button><button onclick='addAfter(event)'> Add After</button ><br/><br/><button onclick='remove(event)'>Delete</button>"

    count++
    return div;
}
function remove(event) {
    console.log(event.target.parentNode.id)
    event.target.parentNode.remove()

}

function addBefore(event) {
    let ref = event.target.parentNode;
    console.log(ref)
    card.insertBefore(createCard(), ref)

}
function addAfter(event) {
    let ref = event.target.parentNode;
    card.insertBefore(createCard(), ref.nextSibling)

}


