
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
class Community extends City(){

};



export default{City,Community};


