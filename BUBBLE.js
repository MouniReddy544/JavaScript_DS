function sample(){

for(i=0;i<n.length;i++)
{
for(j=0;j<n.length-1;j++)
{
if(n[j]>n[j+1])
{
var temp=n[j];
n[j]=n[j+1];
n[j+1]=temp;
}
}
}

console.log(n)
}
n=[3,9,1,2,0,5]
sample()