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
// let arr=[1,2,3,4]
// let res=arr.map((e)=>e*2)
// console.log(res)

// let arr1=['jay','dhyey','naman']
// let arr2=[]

// for(let i=0;i<arr1.length;i++)
// {
//     console.log(arr1[i].split("").reverse().join(""))

//     if(arr1[i].split("").reverse().join("")==arr1[i])
//     {
//         console.log(arr2.push(arr1[i]))
//     }
// }
//n a m a n
//naman
//j a y
// y a j
//
// let student=[
//     {name:"jay",age:22,id:1},
//     {name:"dhyey",age:23,id:2}
// ]
// let result=student.map((stu)=>{
//     return {
//         name:stu.name,
//         age:stu.age,
//         id:stu.id

//     }
// })

// console.log(result)
// let arr=[10,25,30,45]
// // let res=arr.map((a)=>a*a)
// // console.log(res)
// let res=arr.filter((a)=>a%2==0)
// console.log(res)
// let li=["ram","shyam","amit","aarav"]
// let result=li.filter((user)=>user.startsWith("a"))
// console.log(result)
// let arr=[
//     {name:"kunal",age:22,marks:40},
//     {name:"amit",age:23,marks:90}
// ]
// let res=arr.filter((user)=>user.marks>40)
// console.log(res)

// var data=[["sachin","kohli"],["rohit","raina"],["gill","pandya"]]
// var filterdata=data.map((user)=>{
//     return user.filter((d)=>{
//         return d.length==6
//     })
// })
// console.log(filterdata)
// var data=[["sachin","kohli"],["rohit","raina"],["gill","pandya"]]
// var filterdata=data.flatMap((user)=>{
//     // return user
//     return user.filter((d)=>{
//         return d.length==6
//     })
// })
// console.log(filterdata)
// let user=["sachin","amit","parth","hardik"]
// // user.sort()
// // console.log(user)
// let newuser=user.sort((a,b)=>a.length-b.length)
// console.log(newuser)
// let salary=[1000,500,300,400]
// let newsalary=salary.sort((a,b)=>b-a)
// console.log(newsalary)

// let emp=[
//     {name:"jay",age:22},
//     {name:"dhyey",age:20}
// ]
// let result=emp.sort((a,b)=>a.age-b.age)
// console.log(result)
// let user=["sachin","amit","parth","hardik"]
// let newuser=user.find((u)=>u=="amit")
// console.log(newuser)

// let nums=[10,30,20,50]
// let  newnum=nums.find((n)=>n>20)
// console.log(newnum)
//  let emp=[
//     {name:"jay",age:22},
//     {name:"dhyey",age:20}
// ]
// let newemp=emp.find((n)=>n.age==22)
// console.log(newemp)
// let nums=[10,20,30,40]
// let sum=nums.reduce((a,b)=>a+b,0)
// console.log(sum)
// let nums=[1,2,3,4,5]
// let mul=nums.reduce((a,b)=>a*b,1)
// console.log(mul)
// let nums=[1,2,3,4,5]
// let max=nums.reduce((a,b)=>a>b? a:b)
// console.log(max)
// let salary=[10000,2000,3000,40000]
// map---->//whole array
// filter---->data filterout
// flatmap---->[[]]
// sort---->whole array
// find---->filter out
// reduce---->single value
// var user={
//     id:1,
//     name:"chirag",
//     age:22,

// }
// console.log(user)
var users=[
    {id:1,
        name:"dhyey",
        age:23
    },
    {id:2,
        name:"jay",
        age:24
    },
    {id:3,
        name:"marmik",
        age:25
    }
]
// console.log(users[0].id)
// for(let i=0;i<users.length;i++)
// {
//     console.log(users[i])
// }
// users.forEach((user)=>{
//     console.log(user.name+user.age)
// })

let newarr=users.map((user)=>{
    return user.age +" "+user.id
})
console.log(newarr)
array.forEach(element => {
    
});
