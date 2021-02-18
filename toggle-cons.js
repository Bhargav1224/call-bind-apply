// Toggle Constructor Function Task 
// Problem
// in the Task constructor made in Constructor Function
// add a function to toggle_task .
// if you invoke that function then it will toggle the status.
//toggle means (false --true///true ---false)


function Task(title) {
    this.title=title,
    this.status=false,
    this.created_date=new Date(),
    this.Tree=function status() {
        this.status = true;
      }
      
      
}
var add_title=new Task("buy milk");
add_title.Tree()
console.log(add_title);

