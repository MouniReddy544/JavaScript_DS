



//var x;

function sample(f)
{ 

var k =0;


for(j=f.length-1;j>=0;j--){
if(f[k] != f[j])
{
console.log("not an palindrome");
break;
}
k=k+1;

}
}


var f=[1,2,3];



sample(f);

//var res=sample(f);
//console.log(res)





function palindrome(){
var k=0;
for(j=n.length-1;j>=0;j--){
if(n[k]!=n[j]){
console.log("not a palindrome");
return;
}
k=k+1
}

console.log("palindrome");
return 1;
}

n=[1,3,2,1];
palindrome();





//var x;

function sample(f)
{ 

var max=1000000000000;
for(j=0;j<=f.length-1;j++){
if(max > f[j]){
max = f[j]


}

}
console.log(max);
}


var f=[100,567,10];



sample(f);

//var res=sample(f);
//console.log(res)














//var res=sample(f);
//console.log(res)

















//var res=sample(f);
//console.log(res)




function sample()
{ 

var a =3,b=5;
var temp = a;
a = b;
b = temp;
console.log(a,b)
}
