// for lopp--->entry control
// 3.
// 1.init
// 2.condition
// 3.incre/decre

// for(let i=1;i<=10;i++)
// {
//     console.log(i)//1//2//3
// }
// for(let i=10;i>=1;i--)
// {
//     console.log(i)//10//9//
// }
// var sum=0
// for(let i=1;i<=10;i++)
// {
//     console.log(i)
//     sum+=i
    
// }
// console.log(sum)
// var osum=0
// var esum=0
// for(let i=1;i<=10;i++)
// {
//     if(i%2==0)
//     {
//         esum=esum+i
//     }
//     else{
//         osum=osum+i
//     }
// }
// console.log(esum)
// console.log(osum)

// 5---->5*4*3*2*1=120
//4--->4*3*2*1=24
// var num=5
// var fact=1
// for(let i=1;i<=num;i++)
// {
//     fact=fact*i//1*1=1//1*2=2//2*3=6//6*4=24//5*24//120
// }
// console.log(fact)
// 2--->3=8
// var base=2
// var power=3
// var m=1
// for(let i=1;i<=power;i++)

// {
//     m=m*base//1*2=2//2*2=4//4*2=8
// }
// console.log(m)
// var n=12345
// var count=0
// while(n>0)
// {
//     n=Math.floor(n/10)//1234/10=123//123/10=12//12/10=1//1/100....
//     count++
// }
// console.log(count)
//prime num
// 2---2,1
//3--->3,1
// var n=5
// var count=0
// var i=1
// while(i<=n)
// {
//     if(n%i==0)//
//     {
//         count++
//     }
    
    
//     i++
// }
// if(count==2)
//     {
//         console.log('prime')
//     }
//     else{
//         console.log('not prime')
//     }

//6---->1,2,3--->6
//28---->1,2,4,7,14---->28
// var num=6
// let i=1
// let sum=0
// while(i<num)
// {
//     if(num%i==0)
//     {
//         sum=sum+i//0+1=1//1+2//3+3=6
//     }
//     i++
// }
// if(sum==num)
// {
//     console.log("perfect")
// }
// else{
//     console.log("not perfect")
// }

// 121
var num=121
var sum=0
var temp=num
while(num>0)
{
    var rem=num%10//121%10=1//12%10=2//1%10=1
    sum=(sum*10)+rem//0+1=1//10+2=120+1=121
    num=Math.floor(num/10)//121/10=12//12/10=1/10=00...
}
if(temp==sum)
{
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}
