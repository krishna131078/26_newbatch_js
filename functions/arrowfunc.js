// test();
// function test()
// {
//     console.log("testing")
// }
// test()

// const test1=()=>{
//     console.log("testing")
// }
// test1()


// const add=(a,b)=>a+b
// var ans=add(10,20)
// console.log(ans)

// arrow---->2 max---->ternary

// function tobecalled()
// {
//     console.log("to be called")
// }
// function testing(a)
// {

//     console.log(a)
//     a()

// }
// // testing([10,20])
// // testing("a")
// // testing(true)
// testing(tobecalled)
// function addition(a,b)
// {
//     return a+b
// }
// function substraction(a,b)
// {
//     return a-b
// }

// function calculator(para1,para2,funct)
// {
//     console.log("calculator")
//     let ans=funct(para1,para2)
//     console.log(ans)


// }
// calculator(10,20,addition)


// calculator(5,2,substraction)

function loginsuceess()
{
    console.log("login successfully")
}
function loginFailed()
{
    console.log("login failed")
}
function login(username,password,funname1,funcname2)

{
    if(username==="krishna" && password==="123")
    {
        funname1()
    }
    else
    {
        funcname2()
    }
}
login("krishnaa","123",loginsuceess,loginFailed)
// 

// file name--->  .pdf---->pdf ---->image ---->.png ---->.mp4---->audio