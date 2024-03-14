var housekeeper1 = {name: "sdfa", YearsOfExperience:10,CleanReportoire:["bathroom","lobby","kitcher"]}

console.log(housekeeper1.name);

function Bellboy(name, YearsOfExperience, CleanReport){
    this.name = name;
    this.YearsOfExperience = YearsOfExperience;
    this.CleanReport = CleanReport;
}

var bellboy2= new Bellboy("adffd",34,["restroom","lobby","balcony"])
var bellboy3= new Bellboy("adffdd",24,["restroom","dormitory","lobby","balcony"])
console.log(bellboy2);
console.log(bellboy3);
//constructor in the javascript using the function 
