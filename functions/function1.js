// inbuilt----->predefined
// user defined functions----->naming convention---->
// void add()
// {

// }
// 1.wo arg wo return
// 2.wo arg with return
// 3. with arg wo return
// 4.with arg with return
// 1.wo arg wo return
// function demo()//define
// {
//     console.log("hi")
// }
// demo()//1
// var res=demo()
// console.log(res)

// 1.wo arg wo return
// function add()
// {
//     var a=10,b=20,c
//     c=a+b
//     console.log("sum",c)
// }
// add()
// 2 wo arg with return 
// function add2()
// {
//     var a=10,b=20,c;
//     c=a+b
//     return c
// }
// console.log(add2())

// 3.with arg wo return
// function add3(a,b)
// {
//     var c=a+b
//     console.log(c)
// }
// add3(10,20)//calling---->
// 4.with arg with return
// function add4(a,b)
// {
//     var c=a+b
//     return c
// }
// console.log(add4(10,20))
// 1.
function demo1()
{
    var n=10
    if(n>0)
    {
        console.log("pos")
    }
    else{
        console.log("neg")
    }
}
function demo2()
{
    var n1=2
    if(n1>0)
    {
        return 1
    }
    else{
        return 0
    }
}
demo1()
var res=demo2()
if(res==1)
{
   console.log("pos") 
}
else{
    console.log("neg")
}
console.log(res)

function facto1(n)
{
    var fact=1
    for(var i=1;i<=n;i++)
    {
        fact=fact*i
    }
    console.log(fact)
}
facto1(5)
function fullname(fname,lname)
{
    console.log(fname+" "+lname)
}
fullname("k","r")
function digitcount(n)
{
    var count=0
    while(n>0)
    {
        n=Math.floor(n/10)
        count+=1
    }
    console.log(count)
}
digitcount(1234)