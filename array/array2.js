var data=['amit','kunal','dhyey','jay','viral']
var upper=[]

// for(var i=0;i<data.length;i++)
// {
//     // console.log(data[i])
//     upper.push(data[i])
// }
// console.log(upper)

// data.forEach(element => {
//     console.log(element)
    
// });
// map
//array
// upper=data.map((e)=>{
//     return e.toUpperCase()
// })
// console.log(upper)


// lower=data.map((element)=>{
//     return element.toLowerCase()
// })
// console.log(lower)

// var arr=[5,10,20]


// j=arr.map((e)=>e>8)
// console.log(j)
// data.forEach(element => {
//     upper.push(element)
    
// });
// console.log(upper)
// var arr=['a','b','c']
// var result=arr.map((i,x)=>x+' '+i)
// console.log(result)
let arr=[1,2,3,4]
let res=arr.map((e)=>e*2)
console.log(res)

let arr1=['jay','dhyey','naman']
let arr2=[]

for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i].split("").reverse().join(""))

    if(arr1[i].split("").reverse().join("")==arr1[i])
    {
        console.log(arr2.push(arr1[i]))
    }
}
//n a m a n
//naman
//j a y
// y a j
//