function sort(n)
{

for(var i=0;i<n.length;i++)
{
var min=i
for(var j=i;j<n.length;j++)
{

if(n[min]<n[j])
{
min=j
}
}

var tmp=n[min]
n[min]=n[i]
n[i]=tmp

//0,3,2,4,5,1,6
}


}


console.log("hi")
n=[4,3,2,0,5,1,6]
console.log(n)
sort(n)

console.log(n)