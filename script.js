const keypad=document.querySelector(".keypad");
const nums=[7,8,9,4,5,6,1,2,3,0,'.','+/-'];
nums.forEach((value,index)=>{
    const button=document.createElement("button");
    button.classList.add("keys");
    if(value=="." || value=="+/-"){
        button.setAttribute("id","special");
    }
    button.textContent=value;
    keypad.appendChild(button);
})
const opBox=document.querySelector(".operators");
const operators=['Clear','Back','+','-','*','/','='];
operators.forEach((value,index)=>{
    const opButton=document.createElement("button");
    opButton.classList.add("operator-keys");
    if(value=="Clear" || value=="Back"){
        opButton.setAttribute("id","special");
    }
    opButton.textContent=value;
    opBox.appendChild(opButton);
})

const display=document.querySelector(".display");
const btns=document.querySelectorAll("button");
btns.forEach(btn=>{
    btn.addEventListener("click",()=>{
        
    })
})