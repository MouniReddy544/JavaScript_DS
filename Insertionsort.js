function insertion(){

for(i=1;i<n.length;i++)
{
key = n[i]

for(j=i-1;j>=0 && n[j]>key ;j--)
{
n[j+1]=n[j]
}



n[j+1]=key

}


console.log(n)

}


n=[3,2,1,4,5];
insertion();