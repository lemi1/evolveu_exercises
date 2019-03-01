
let numList = [];
document.getElementById('add').addEventListener('click', function () {
    let a = document.getElementById('num').value
    let message = document.getElementById('message')
    if (!isNaN(a)) {

        numList.push(parseInt(a))

        return message.textContent = a + ' is added to the list'
    } else {
        return message.textContent = 'you did not enter a number'
    }


});

document.getElementById("show").addEventListener('click', function () {
    for (num of numList) {
        list = document.createElement('li');

        list.appendChild(document.createTextNode(num))
        document.getElementById('message').appendChild(list);
    }

})
function getSum(total, num) {

    return total + num;
}

document.getElementById("total").addEventListener('click', function () {

    document.getElementById("message").textContent = numList.reduce(getSum);


})

document.getElementById("clear").addEventListener('click', function () {
    numList.length = 0
    document.getElementById('message').textContent = 'your array is empty'

    console.log(numList)
})





let Province = {
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

document.getElementById('look').addEventListener('click', function () {
    let input = document.getElementById('dic').value.toUpperCase()
    let output = document.getElementById('message1')
    let Canada = Object.keys(Province)
    if (Canada.includes(input)) {
        let value = Object.values(Province).find(value => Province[input] === value);
        output.textContent = value
    } else {
        output.textContent = "you did not enter a correct Province abbreviation"
    }

})

