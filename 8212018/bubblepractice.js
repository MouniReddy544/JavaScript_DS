function bubble(){
for(i=0;i<n.length;i++){

for(j=0;j<n.length;j++){
if(n[j]>n[j+1]){
var temp=n[j]
n[j]=n[j+1];
n[j+1]=temp;
}
}

}

console.log(n)
}
n=[6,5,7,4,1];
bubble();
