function sample(){

var arr = new Array(n.length)
var count0=0,count1=0,count2=0
for(i=0;i<=n.length-1;i++){
if(n[i]==0){
count0=count0+1;
}
}
for(j=0;j<=n.length-1;j++){
if(n[j]==1){
count1=count1+1;
}
}
for(l=0;l<=n.length-1;l++){
if(n[l]==2){
count2=count2+1
}
}

console.log(count0,count1,count2)

for(i=0;i<count0;i++)
n[i]=0

for(i=count0;i<count0+count1;i++)
n[i]=1

for(i=count0+count1;i<count0+count1+count2;i++)
n[i]=2

console.log(n)
}
n=[1,0,2,0,0,1];
sample()