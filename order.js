function sort(n)
{
var arr = new Array(5);
var k=0;

for(var i=0;i<=n.length-1;i++)
{
if(n[i]<0)
{
arr[k]=n[i]
k=k+1
}
}

for(var i =0;i<=n.length-1;i++)
{
if(n[i]>0)
{
arr[k]=n[i]
k=k+1
}
}


console.log(arr)

}
n=[-1,2,-4,6,-8]
sort(n)
