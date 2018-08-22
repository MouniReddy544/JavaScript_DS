function selection(n){
 arr=[]
 f0=0,f1=1;
sum=0;
arr.push(f0)
arr.push(f1)

for(i=2;i<=n;i++)
{
sum=f0+f1
f0=f1
f1=sum
arr.push(sum);
}

}
n=7

selection(n);
console.log(arr);

console.log(f1)
