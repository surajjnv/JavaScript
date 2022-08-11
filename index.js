function multiply (num1, num2){
    num3 = num1*num2;
    console.log (num3);
}

multiply(400,500);

var num = function(list){
    console.log("Showing  all the marks!!")
    list.forEach((element,index) => {
            console.log(element + " is at position "+index)        
    });
    }

var marks = [98,97,96,89,99,75]
num(marks);

const student = {
    f_name:"Suraj",
    l_name:"Gahatyari",
    phone_no:7310982885,
    roll_no:40110102718,
    display:function(){
        return this.f_name + " " + this.l_name
}
};
console.log(student.f_name);
console.log(student.display());

 //constructor function

  function Student (f_name,l_name, id){
        this.f_name = f_name;
        this.l_name = l_name;
        this.id = id
        this.display = function(){
            return "Student info:  " + this.f_name+" "+this.l_name+" " +this.id;
        }
 }

 let Stud = new Student("Vijay","Prakash",402);
 console.log(Stud.display());