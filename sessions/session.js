function assertEquals(p1,p2){
    if(p1 === p2){
        console.log(`ok --> ${p1}`)
        return true
    }else{
        console.log(false)
        console.log(p1 , p2)
        return `the values are not the same`
    }
}


assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");

function makeEmailArr(array){
    //console.log(`${array[0]}.${array[1]}@evolveu.ca`)
    return `${array[0]}.${array[1]}@evolveu.ca`

}

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));

function makeEmailObj(obj){
    //console.log(`${obj.fname}.${obj.lname}@evolveu.ca`)
    return `${obj.fname}.${obj.lname}@evolveu.ca`

}
const objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));

const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

// Write the function after this comment ---
function loopStaff(){
    let list = []
    for (const key of data.staff) {
        list.push(`${key.fname}.${key.lname}@evolveu.ca`)
        console.log(key)
        
        
    }
    return list
}

// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);
console.log(typeof(staffEmail[0]))

