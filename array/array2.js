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
upper=data.map((e)=>{
    return e.toUpperCase()
})
console.log(upper)


lower=data.map((element)=>{
    return element.toLowerCase()
})
console.log(lower)

var arr=[5,10,20]


j=arr.map((e)=>e>8)
console.log(j)