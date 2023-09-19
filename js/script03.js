let quiz = document.getElementById(`quiz`)
let midterm = document.getElementById(`midterm`)
let final = document.getElementById(`final`)

let btcalSumGrade = document.getElementById(`bt-calSumGrade`)
let btcancel = document.getElementById(`bt-cancel`)

let showsum = document.getElementById(`show-sum`)
let showgrade = document.getElementById(`show-grade`)

function calsum(){
    let sum = parseInt(quiz.value) + parseInt(midterm.value) + parseInt(final.value)
    return sum
}
function calGrade(sum){
    if(sum >= 80){
        showsum.innerHTML = '<storng> ได้คะแนนรวม'+ sum + 'คะแนน</storng>'
        showgrade.innerHTML='<string>ได้เกรด A</string>'
    }
    if(sum >= 50){
        showsum.innerHTML = '<storng> ได้คะแนนรวม'+ sum + 'คะแนน</storng>'
        showgrade.innerHTML='<string>ได้เกรด B</string>'
    }
    else{
        showsum.innerHTML = '<storng> ได้คะแนนรวม'+ sum + 'คะแนน</storng>'
        showgrade.innerHTML='<string>ได้เกรด C</string>'
    }
    

}
function varidateData(){
    if(quiz.value.length == 0){
        alert('ป้อน quiz ด้วย')
        return false
    }
    else if(isNaN(quiz.value)){
        alert('ป้อน quiz เป็นตัวเลขเท่านั้น')
        return false
    }
    else if((midterm.value)){
        alert('ป้อน midterm ด้วย')
        return false
    }
    else if(isNaN(midterm.value)){
        alert('ป้อน midterm เป็นตัวเลขเท่านั้น')
        return false
    }
    else if((final.value)){
        alert('ป้อน final ด้วย')
        return false
    }
    else if(isNaN(final.value)){
        alert('ป้อน final เป็นตัวเลขเท่านั้น')
        return false
    }
    return true
}

btcalSumGrade.addEventListener('click',()=>{
    calsum('xxxx')
    calGrade(calsum())
})