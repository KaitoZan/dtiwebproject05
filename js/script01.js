console.log("aaa")


function funcA(){
    console.log("A..")
}
function funcB(x,y){
    console.log(x)
    console.log(y)
}
function funC(){
    console.log("c..")
    return `Hi...`
}
function funcD(x,y){
    return x + y
}
funcA()
funcB(10,20)
console.log(funC())

let wow = funcD(100, 200)


function funcE(a ,b ,c = 100){
    console.log(a + b + c)
}
function funF(x=`Hi`,y=100,z=`Wow`){
    
}


funcE(10,20)
funcE(10,20,30)
console.log(funF())
console.log(funF(`Hello`))

console.log(10+`10`)
console.log(10+10)
let info1 = 100
let info2 = 200

console.log(info1 + ` + ` + info2 +` = ` + (info1+info2))
console.log(`${info1} + ${info2} =  ${info1+info2}`)


console.log(10 > 200 ? 'Hi..':'Hey..')
let x = 'Bangna'
let y = 'Bangpoo'
z =x > y ? 'Wow..':'Woo..'
console.log(z)  
console.log(x>y)
console.log(x==y)
console.log(x<y)

