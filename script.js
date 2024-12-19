function AddNum(){
    let num1=document.getElementById("first").value
    let num2=document.getElementById("second").value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h1=document.getElementById("result")
    res=num1+num2
    h1.innerHTML="result: "+res
}

function SubNum(){
    let num1=document.getElementById("first").value
    let num2=document.getElementById("second").value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h1=document.getElementById("result")
    res=num1-num2
    h1.innerHTML="result: "+res
}

function MulNum(){
    let num1=document.getElementById("first").value
    let num2=document.getElementById("second").value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h1=document.getElementById("result")
    res=num1*num2
    h1.innerHTML="result: "+res
}

function DivNum(){
    let num1=document.getElementById("first").value
    let num2=document.getElementById("second").value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h1=document.getElementById("result")
    res=num1/num2
    h1.innerHTML="result: "+res
}

function PowNum(){
    let num1=document.getElementById("first").value
    let num2=document.getElementById("second").value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h1=document.getElementById("result")
    res=num1**num2
    h1.innerHTML="result: "+res
}
