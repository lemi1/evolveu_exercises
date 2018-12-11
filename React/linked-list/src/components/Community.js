
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
        this.index = -1
        //this.index= 0;
        this.myCities = [];
    }
    addCity(name, latitude, longitude, population){

        // this.myCities.push(new City(name, latitude, longitude, population));
        let length = this.myCities.length;
        let tmpCity = new City( name,
                          latitude,
                          longitude,
                          population);
        if(length > 0){
            this.myCities.push(this.myCities[length - 1]);
              var i;
              for(i=length-1;i>this.index+1;i--){
                this.myCities[i] = this.myCities[i - 1]
                // move or copy [i -1] to [i]postion then
                //decrease the value of i by 1
              }
              this.myCities[this.index + 1] = tmpCity;
              //the length of the array
            }else{
              this.myCities.push(tmpCity)
            }
            this.index++;
            // this.length++;
    };

    getPopulation(){
      let total = 0;
      var i;
      for(i=0; i< this.myCities.length;i++){
        total = total + this.myCities[i].pop;
      }

      return total;
        // let total = 0;
        // for (let i in this.myCities){
        //     total = total + this.myCities[i].pop ;
        // };
        // return total;
    };

     getMostNorthern(){
        let max = this.myCities[0].lat;
        let cityIdx = 0;
        var i;
    for(i=1;i<this.myCities.length;i++){
      if(this.myCities[i].lat > max){
        cityIdx = i;
      }
    }
    return this.myCities[cityIdx]
    };

    getMostSouthern(){
        let min = this.myCities[0].lat
        let cityIdx = 0;
        var i;
    for(i=1;i<this.myCities.length;i++){
      if(this.myCities[i].lat < min){
        min = this.myCities[i].lat;
        cityIdx = i;
      }
    }
    return this.myCities[cityIdx]
    };

    getCity() {
        // return this.myCities[this.index].name;
        let length = this.myCities.length;
        if(length > 0){
            return this.myCities[this.index]
        }else{
            return new City(null, null, null, null)
        }
    };

    first(){
        this.index = 0;
    };
    last(){
        this.index = this.myCities.length -1;
    };

    next(){
      if(this.index === this.myCities.length - 1){
        this.index = 0
      }else{
        this.index = this.index + 1;
      }

    };

    previous(){
      if (this.index === 0){
        this.index = this.myCities.length -1
      }else{
        this.index = this.index - 1;
      }

    };

    getIndex(){
        let length = this.myCities.length;
        if(length > 0){
            return this.index;
        }else{
            return null
        }
    };

    reset(){
        this.myCities = [];
        this.index = -1;
    }

    showAll(){
      let x;
      let showall="";

      for (x=0; x < this.myCities.length; x++){
        showall += `name:${this.myCities[x].name} lat:${this.myCities[x].lat} long:${this.myCities[x].long} pop:${this.myCities[x].pop}
        \n`;
      }
      return showall;

    }

};



class Playseq extends Object {
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



export default{City,Community,Playseq};
