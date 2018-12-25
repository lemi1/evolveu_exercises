import lm from './Community';
test('testing show', () => {
    let myCity = new lm.City('Dire Dawa', 9.6, 41.8, 440000);
    expect(myCity.show()).toBe('Dire Dawa 9.6 41.8 440000');

    myCity = new lm.City('Addis Ababa', 8.9, 38.7, 3383000);
    expect(myCity.show()).toBe('Addis Ababa 8.9 38.7 3383000');
});

test('testing movedIn', () => {
    let myCity = new lm.City('Dire Dawa', 9.6, 41.8, 440000);
    myCity.movedIn(1000);
    expect(myCity.show()).toBe('Dire Dawa 9.6 41.8 441000');

    myCity = new lm.City('Addis Ababa', 8.9, 38.7, 3383000);
    myCity.movedIn(2000);
    expect(myCity.show()).toBe('Addis Ababa 8.9 38.7 3385000');
});

test('testing mouvedOut', () => {
    let myCity = new lm.City('Dire Dawa', 9.6, 41.8, 440000);
    myCity.movedOut(1100);
    expect(myCity.show()).toBe('Dire Dawa 9.6 41.8 438900');

    myCity = new lm.City('Addis Ababa', 8.9, 38.7, 3383000);
    myCity.movedOut(2200);
    expect(myCity.show()).toBe('Addis Ababa 8.9 38.7 3380800');
});

test('testing howBig', () => {
    let myCity = new lm.City('Riyadh', 9.6, 41.8, 540000);
    expect(myCity.howBig()).toBe('City');

    myCity = new lm.City('Jijiga', 8.9, 38.7, 23408);
    expect(myCity.howBig()).toBe('Large Town');

    myCity = new lm.City('Asmara', 8.9, 38.7, 567);
    expect(myCity.howBig()).toBe('Village');

    myCity = new lm.City('Jeddah', 8.9, 38.7, 55);
    expect(myCity.howBig()).toBe('Hamlet');

    myCity = new lm.City('Jimma', 8.9, 38.7, 14408);
    expect(myCity.howBig()).toBe('Town');
});

test('testing whichSphere', () => {
    let myCity = new lm.City('Mumbai', -9.6, 41.8, 540000);
    expect(myCity.whichSphere()).toBe('Southern Hemisphere');

    myCity = new lm.City('Moscow', 50.9, 38.7, 23408);
    expect(myCity.whichSphere()).toBe('Northern Hemisphere');
});

test('testing addCity', () => {
    let myCity = new lm.Community();

    myCity.addCity('Edmonton', -34.6, 24.7, 3456);
    myCity.addCity('Calgary', -56.9, 78.9, 123456);
    myCity.addCity('Moscow', 50.9, 38.7, 23408);
    expect(myCity.myCities[0].show()).toBe('Edmonton -34.6 24.7 3456');
    expect(myCity.myCities[1].show()).toBe('Calgary -56.9 78.9 123456');
    expect(myCity.myCities[2].show()).toBe('Moscow 50.9 38.7 23408')
});

test('testing getpopulation', () => {
    let myCommunity = new lm.Community();

    myCommunity.addCity('Calgary', -56.9, 78.9, 200);
    expect(myCommunity.getPopulation()).toBe(200);

    myCommunity.addCity('Edmonton', -34.6, 24.7, 100);
    expect(myCommunity.getPopulation()).toBe(300);

});
test('testing getmostNorthern', () => {
    let myCommunity = new lm.Community();

    myCommunity.addCity('Calgary', -56.9, 78.9, 123456);
    myCommunity.addCity('Edmonton', -34.6, 24.7, 10000);
    myCommunity.addCity('Vancouver', -74.6, 24.7, 10000);

    expect(myCommunity.getMostNorthern().show()).toBe('Edmonton -34.6 24.7 10000');


});
test('testing getmostNorthern', () => {
    let myCommunity = new lm.Community();

    myCommunity.addCity('Calgary', 56.9, 78.9, 123456);
    myCommunity.addCity('Edmonton', 34.6, 24.7, 10000);
    myCommunity.addCity('Vancouver', 74.6, 24.7, 10000);
    myCommunity.addCity('dd', 14.6, 24.7, 10000);

    expect(myCommunity.getMostNorthern().show()).toBe('Vancouver 74.6 24.7 10000');
});
test('testing getmostSorthern', () => {
    let myCommunity = new lm.Community();

    myCommunity.addCity('Calgary', -56.9, 78.9, 123456);
    myCommunity.addCity('Edmonton', -34.6, 24.7, 10000);
    myCommunity.addCity('Vancouver', -74.6, 24.7, 10000);

    expect(myCommunity.getMostSouthern().show()).toBe('Vancouver -74.6 24.7 10000');

});

test('testing getCity, getIndex, first, last, next, previous', () => {
    let myCommunity = new lm.Community();
    myCommunity.addCity('Dire Dawa', 9.6, 41.8, 440000)
    myCommunity.addCity('Calgary', -56.9, 78.9, 123456);
    myCommunity.addCity('Edmonton', -34.6, 24.7, 10000);
    myCommunity.addCity('Vancouver', -74.6, 24.7, 10000);
    myCommunity.addCity('Addis Ababa',8.9,38.7,3383000);
    expect(myCommunity.getCity().name).toBe('Addis Ababa');
    myCommunity.first();
    expect(myCommunity.getCity().name).toBe('Dire Dawa');
    myCommunity.addCity('Jijga', -34.6, 24.7, 10000);
    expect(myCommunity.getCity().name).toBe('Jijga');
    myCommunity.last();
    expect(myCommunity.getCity().name).toBe('Addis Ababa');
    myCommunity.previous();
    expect(myCommunity.getCity().name).toBe('Vancouver');
    myCommunity.previous();
    expect(myCommunity.getCity().name).toBe('Edmonton');
    myCommunity.first();
    expect(myCommunity.getCity().name).toBe('Dire Dawa');
    myCommunity.previous();
    expect(myCommunity.getCity().name).toBe('Addis Ababa');
    expect(myCommunity.getIndex()).toBe(5);





});








test('testing Playseq', () => {
    let mySeq = new lm.Playseq;

    expect(mySeq.show()).toBe(0)
    mySeq.next();
    expect(mySeq.show()).toBe(1)
    mySeq.next();
    mySeq.next();
    expect(mySeq.show()).toBe(3)

    let x = new lm.Playseq;
    expect(x.show()).toBe(0)
    x.next();
    x.next();
    expect(x.show()).toBe(2);

    expect(mySeq.show()).toBe(3);

    x.first();
    expect(x.show()).toBe(1);

    x.quantity = 100;// adds to the data of the objects while the methods are the functions of the class.
    expect(x.quantity).toBe(100);

    x.addquantity(100);
    expect(x.quantity).toBe(200);
});


let arr = ['a','b','c'];
let x = arr[0];
arr[0]=arr[2];
//console.log(arr);
arr[2]= x;
//console.log(arr);

let myFav = new lm.City('Toronto', 46.6, -79.3, 2732000);
//console.log(myFav);

let c = myFav;
//console.log(c);

myFav.movedIn(10000);
//console.log(myFav);

let myCities = [
    new lm.City('Calgary', -56.9, 78.9, 123456),
    new lm.City('Edmonton', -34.6, 24.7, 3456),
    new lm.City('Vancouver', -45.8, 34.8, 100),
    new lm.City('Ottawa', -12.9, 44.4, 13789),
    new lm.City('Montreal', -65.9, 34.9, 234567)
];
//console.log(myCities);

var i;
// let total = 0
// for (i in myCities){
//     total =+ myCities[i].pop
//     console.log(total);
// }

// console.log(i.show(), i.pop )
// };
let total = 0;
for (i = 0; i < myCities.length; i++) {
    total += myCities[i].pop;
    // myCities
    // console.log(total);
};

//console.log(total);
