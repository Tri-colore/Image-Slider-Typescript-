export class City{
    public city_Name : string = "";
    public country_Name : string = "";
    public image : string ="";
    

    constructor(cn : string, cN : string, img : string){
            this.city_Name = cn;
            this.country_Name = cN;
            this.image = img;
    }

}