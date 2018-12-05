import lm from './Community';
test('testing show', () => {
    let Mycity = new lm.City('Dire Dawa', 9.6, 41.8, 440000);
    expect(Mycity.show()).toBe('Dire Dawa 9.6 41.8 440000');

    Mycity = new lm.City('Addis Ababa', 8.9, 38.7, 3383000);
    expect(Mycity.show()).toBe('Addis Ababa 8.9 38.7 3383000');
});

test('testing movedIn', () => {
    let Mycity = new lm.City('Dire Dawa', 9.6, 41.8, 440000);
    Mycity.movedIn(1000);
    expect(Mycity.show()).toBe('Dire Dawa 9.6 41.8 441000');

    Mycity = new lm.City('Addis Ababa', 8.9, 38.7, 3383000);
    Mycity.movedIn(2000);
    expect(Mycity.show()).toBe('Addis Ababa 8.9 38.7 3385000');
});

test('testing mouvedOut', () => {
    let Mycity = new lm.City('Dire Dawa', 9.6, 41.8, 440000);
    Mycity.movedOut(1100);
    expect(Mycity.show()).toBe('Dire Dawa 9.6 41.8 438900');

    Mycity = new lm.City('Addis Ababa', 8.9, 38.7, 3383000);
    Mycity.movedOut(2200);
    expect(Mycity.show()).toBe('Addis Ababa 8.9 38.7 3380800');
});

test('testing howBig', () => {
    let Mycity = new lm.City('Riyadh', 9.6, 41.8, 540000);
    expect(Mycity.howBig()).toBe('City');

    Mycity = new lm.City('Jijiga', 8.9, 38.7, 23408);
    expect(Mycity.howBig()).toBe('Large Town');

    Mycity = new lm.City('Asmara', 8.9, 38.7, 567);
    expect(Mycity.howBig()).toBe('Village');

    Mycity = new lm.City('Jeddah', 8.9, 38.7, 55);
    expect(Mycity.howBig()).toBe('Hamlet');

    Mycity = new lm.City('Jimma', 8.9, 38.7, 14408);
    expect(Mycity.howBig()).toBe('Town');
});

test('testing whichSphere', () => {
    let Mycity = new lm.City('Mumbai', -9.6, 41.8, 540000);
    expect(Mycity.whichSphere()).toBe('Southern Hemisphere');

    Mycity = new lm.City('Moscow', 50.9, 38.7, 23408);
    expect(Mycity.whichSphere()).toBe('Northern Hemisphere');
});

test('testing addCity', () => {
    let Mycity = new lm.Community();

    Mycity.addCity('Edmonton', -34.6, 24.7, 3456);
    expect(Mycity.myCities[0].show()).toBe('Edmonton -34.6 24.7 3456');

    Mycity.addCity('Calgary', -56.9, 78.9, 123456);
    expect(Mycity.myCities[1].show()).toBe('Calgary -56.9 78.9 123456');
});

test('testing getpopulation', () => {
    let myCommunity = new lm.Community();

    myCommunity.addCity('Calgary', -56.9, 78.9, 123456);
    expect(myCommunity.getPopulation()).toBe(123456);

    myCommunity.addCity('Edmonton', -34.6, 24.7, 10000);
    expect(myCommunity.getPopulation()).toBe(133456);

});
test('testing getmostnorthern', () => {
    let myCommunity = new lm.Community();

    myCommunity.addCity('Calgary', -56.9, 78.9, 123456);
    myCommunity.addCity('Edmonton', -34.6, 24.7, 10000);
    myCommunity.addCity('Vancouver', -74.6, 24.7, 10000);

    expect(myCommunity.getMostNorthern()).toBe('Edmonton -34.6 24.7 10000');

});

test('testing getmostnorthern', () => {
    let myCommunity = new lm.Community();

    myCommunity.addCity('Calgary', -56.9, 78.9, 123456);
    myCommunity.addCity('Edmonton', -34.6, 24.7, 10000);
    myCommunity.addCity('Vancouver', -74.6, 24.7, 10000);

    expect(myCommunity.getMostSouthern()).toBe('Vancouver -74.6 24.7 10000');

});

test('testing getCity, getIndex, first, last, next, previous', () => {
    let myCommunity = new lm.Community();
    myCommunity.addCity('Dire Dawa', 9.6, 41.8, 440000)
    myCommunity.addCity('Calgary', -56.9, 78.9, 123456);
    myCommunity.addCity('Edmonton', -34.6, 24.7, 10000);
    myCommunity.addCity('Vancouver', -74.6, 24.7, 10000);
    myCommunity.addCity('Addis Ababa',8.9,38.7,3383000);
    expect(myCommunity.getCity()).toBe('Dire Dawa');
    myCommunity.first();
    expect(myCommunity.getCity()).toBe('Dire Dawa');
    myCommunity.last();
    expect(myCommunity.getCity()).toBe('Addis Ababa');
    myCommunity.next();
    expect(myCommunity.getIndex()).toBe(0);


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





let myFav = new lm.City('Toronto', 46.6, -79.3, 2732000);
console.log(myFav);

let c = myFav;
console.log(c);

myFav.movedIn(10000);
console.log(myFav);

let myCities = [
    new lm.City('Calgary', -56.9, 78.9, 123456),
    new lm.City('Edmonton', -34.6, 24.7, 3456),
    new lm.City('Vancouver', -45.8, 34.8, 100),
    new lm.City('Ottawa', -12.9, 44.4, 13789),
    new lm.City('Montreal', -65.9, 34.9, 234567)
];
console.log(myCities);

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

console.log(total);
