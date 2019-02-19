
let numList = [];
document.getElementById('add').addEventListener('click', function () {
    let a = parseInt(document.getElementById('num').value)
    let message = document.getElementById('message')
    numList.push(a)
    message.textContent = a + ' is added to the list'

});
console.log(numList);

document.getElementById("show").addEventListener('click', function (item) {
    for (num of numList) {

        list = document.createElement('li');
        document.getElementById('message').appendChild(list);

        console.log(list);
    }
    console.log(numList)
})






















let province = {
    AB: "Alberta",
    BC: "British Columbia",
    QC: "Quebec",
    ON: "Ontario",
    YK: "Yukon",
    NS: "Nova Scotia",
    NT: "North West Territory",
    SK: "Saskatchewan",
    MN: "Manitoba",
    NB: "New Brunswick",
    NL: "Newfoundland and Labrador",
    NU: "Nunavut",
    PE: "Prince Edward Island"
}