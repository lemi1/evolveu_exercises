
class City extends Object{
    constructor(name, latitude, longitude, population){
        super();
        this.name = name;
        this.lat = latitude;
        this.long = longitude;
        this.pop =population;
    };

    show() {
        return this.name + ' ' +
            this.lat.toString() + ' ' +
            this.long.toString() +  ' ' +
            this.pop.toString()
    };

    movedIn(people){
      this.pop = this.pop + people;

    };

    movedOut(people){
        this.pop = this.pop - people;
    };

    howBig(){
        if (this.pop > 100000){
            return 'City';
        }else if(this.pop > 20000 && this.pop < 100000){
            return 'Large Town';
        }else if (this.pop > 1000 && this.pop < 20000){
            return 'Town';
        }else if(this.pop > 100 && this.pop < 1000){
            return 'Village';
        }else if(this.pop > 1 && this.pop < 100){
            return 'Hamlet';
        }
    };

    whichSphere(){
        if(this.lat < 0){
            return 'Southern Hemisphere'
        }else if (this.lat > 0){
            return 'Northern Hemisphere'
        }
    };

};
class Community extends Object {
    constructor(){
        super();
        this.index = 0
        this.myCities = [];
    }
    addCity(name, latitude, longitude, population){

        this.myCities.push(new City(name, latitude, longitude, population));
    };

    getPopulation(){
        let total = 0;
        for (let i in this.myCities){
            total = total + this.myCities[i].pop ;
        };
        return total;
    };

     getMostNorthern(){
        let max = this.myCities[0].lat;
        for( let i in this.myCities){

            if(this.myCities[i].lat > max){
                max = this.myCities[i].show();
            }
        }
        return max;
    };

    getMostSouthern(){
        let min = this.myCities[0].lat;
        for( let i in this.myCities){

            if(this.myCities[i].lat < min){
                min = this.myCities[i].show();
            }
        }
        return min;
    };

    getCity() {
        return this.myCities[this.index].name;
    };

    first(){
        this.index = 0;
    };
    last(){
        this.index = this.myCities.length -1;
    };

    next(){
      if(this.inex == this.myCities.length - 1){
        thid.index = 0
      }else{
        this.index = this.index + 1;
      }

    };

    previous(){
      if (this.index == this.myCities.length -1){
        this.index = 0
      }else{
        this.index = this.index - 1;
      }
      
    };

    getIndex(){
        return this.index;
    };
  };




class Playseq extends Object{
    constructor(){
        super();
        this.index = 0;
        console.log('im in the contructor');
    }
    show(){
        return this.index;
    };

    next(){
       this.index= this.index + 1;
    };

    first(){
        this.index = 1;
    }
    addquantity(){
        this.quantity = this.quantity + 100;
    };

 };



export default{City, Community,Playseq};
