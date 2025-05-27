function sample(){

var arr = new Array(n.length)
var k =0
for(i=0;i<=n.length-1;i++){
if(n[i]==0){
arr[k]=n[i]
k=k+1
}
}
for(j=0;j<=n.length-1;j++){
if(n[j]==1){
arr[k]=n[j]
k=k+1
}
}

for(l=0;l<=n.length-1;l++){
if(n[l]==2){
arr[k]=n[l]
k=k+1
}
}

console.log(arr)
console.log(are)
console.log(ary)

}
n=[1,0,2,0,0,1];
sample()