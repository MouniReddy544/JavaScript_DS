function sample(f)
{ 
var max=Math.pow(2, 53)
for(i=0;i<=f.length-1;i++){
if(max>f[i]){
max=f[i]
}

}

console.log(max);
}
f=[1,2,100];
sample(f);

