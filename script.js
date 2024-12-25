const keypad=document.querySelector(".keypad");
const nums=[7,8,9,4,5,6,1,2,3,0,'.','+/-'];
nums.forEach((value,index)=>{
    const button=document.createElement("button");
    button.classList.add("keys");
    if(value=="." || value=="+/-"){
        button.id="special";
    }
    else{
        button.id="normal";
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
        opButton.id="special";
    }
    else{
        opButton.id="normal";
    }
    opButton.textContent=value;
    opBox.appendChild(opButton);
})

let stack=[];
let exp=[];
let float=false;
const display=document.querySelector(".display");
const btns=document.querySelectorAll("button");
btns.forEach(btn=>{
    btn.addEventListener("click",(event)=>{
        if(event.target.classList.contains("keys")){
            display.textContent=btn.textContent;
            if(btn.id=="normal"){
                stack.push(btn.textContent);
                if(float==true){
                    let decimal="0";
                    let floatValue=stack.pop();
                    if(stack.length>0){
                        decimal=stack.pop();
                    }
                    stack.push(decimal+"."+floatValue);
                    float=false;
                }
            }
            else{
                if(btn.textContent=="+/-"){
                    stack.concat("-",stack);
                    display.textContent=stack.join("");
                }
                else{
                    float=true;
                }

            }
            display.textContent=stack.join("");;
        }
        else{
            if(btn.id=="special"){
                if(btn.textContent=="Clear"){
                    display.textContent="";
                    stack=[];
                    exp=[];
                }
                else{
                    stack.pop();
                    display.textContent=stack.join();
                }
            }
            else{
                let num=stack.join('');
                stack=[];
                console.log(num);
                exp.push(num);
                if(btn.textContent!="="){
                    display.textContent=exp.join("");
                    exp.push(btn.textContent);
                }
                else{
                    let expression=exp.join("");
                    console.log(expression);
                    let result = new Function(`return ${expression}`)();
                    console.log(result);
                    display.textContent=result;
                }
            }
            
        }
    })

})