function selection(){

low=0;
high=a.length;
while(low<high){
mid=(low+high)/2
mid=Math.floor(mid)
if(a[mid]==search)
return 1;
else if(a[mid]>search){
high=mid-1
}
else if(a[mid]<search){
low=mid+1
}
}
return 0
}
a=[1,2,3,4,5]
search=3

var res=selection();
console.log(res)