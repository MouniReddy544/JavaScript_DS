function Binarysearch(){

low=0;
high=n.length;

while(low<high){
mid=(low+high)/2;
mid=Math.floor(mid);
if(n[mid]==search){
return 1;
}
else if(n[mid]<search){
low=mid+1;
high=high;
}
else if(n[mid]>search){
low=low;
high=mid+1
}


}
return 0;

}

n=[1,2,3,4,5];
search=5;
var res=Binarysearch();
console.log(res);

