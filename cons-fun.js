// Constructor Function 
// Create multiple tasks using constructor function. 
// Make sure to comment each line describing what it's doing.Statement

// create a constructor Task
// it will accept only title for creating the object
// it will create an object with the following properties
// title < string >
// status ( default value - false )
// created_date
// Approach

// create a constructor Task (keep first letter capital, so that 
//others know its a constructor)
// accept title in function
// create title, status, and created_date fields
// function Task( title ) {
//   this.title = title
//   this.status = false
//   this.created_date = new Date()
// }
// var task = new Task( "buy milk") 



function Task(title) {
    this.title=title;
    this.status=false;
    this.created_date=new Date()
}

var add_title=new Task("buy milk ");
console.log(add_title);