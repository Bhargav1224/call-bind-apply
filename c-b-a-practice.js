//call ,apply,bind examples with more practice..

//lets take an object "name " which takes a method called "Printfullname"

var name={
    fname:"bhargav",
    lname:"reddy",
  
};
var Printfullname=function(hometown,state) {
    console.log(this.fname+" "+this.lname+"  from"+hometown+","+state);
}

Printfullname.call(name," chittor"," andra pradesh");

var name2={
    fname:"bhanu",
    lname:"reddy",
   
};
Printfullname.call(name2," banglore"," karnataka");

//diffrence b/w call and apply is ,in apply we need to pass arguments as array type


var name={
    fname:"masai",
    lname:"school",

};
var PrintfullName= function (hometown,state) {
    console.log(this.fname+" "+this.lname+" "+" from "+hometown+","+state);

}
PrintfullName.apply(name,["banglore","karnataka"]);


var name2={
    fname:"Dhoni",
    lname:"Ms",
}
PrintfullName.apply(name2,["chittore","andra pradesh"])

