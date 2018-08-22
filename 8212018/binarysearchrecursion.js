function Binarysearch(n,low,high,search){
while(low<high){
mid=(low+high)/2;
mid=Math.floor(mid);
if(n[mid]==search){
return 1;
}
else if(n[mid]<search){
return Binarysearch(n,low+1,high,search);
}
else if(n[mid]>search){
return Binarysearch(n,low,high-1,search);
}

}
return 0;
}

n=[1,2,3,4,5];
low=0;
high=n.length;
search=4;
var res=Binarysearch(n,low,high,search);
console.log(res);

