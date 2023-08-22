// function tipper(a){
    // var bill=parseInt(a);//parseint will convert value into int
    // console.log(bill+5);
// }
// tipper("5");
bigTipper("200");
function bigTipper(a){
    var bill=parseInt(a);
    console.log(bill+15);
}

var bigTipper=function(a){
    var bill=parseInt(a);
    console.log(bill+15);
};
bigTipper("200");



var name="hitesh";
console.log(name); 
function sayName(){
    var name="mr.H";
    console.log(name);
}
console.log(name);