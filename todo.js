let btn=document.getElementById("btn");
let ul=document.getElementById("ul");
let input=document.getElementById("input");

btn.addEventListener('click',()=>{
    let li=document.createElement("li");
    let button=document.createElement("button");
    let checkBox=document.createElement("button");
    checkBox.textContent='✔️'
    checkBox.style.backgroundColor="#31b434"
    let value=input.value;
    li.textContent=value;
    button.innerHTML='🗑️';
    ul.appendChild(li);
    li.appendChild(checkBox);
    li.appendChild(button);
    checkBox.addEventListener('click',()=>{
        if(li.style.textDecoration=='none'){
        li.style.textDecoration="line-through";
        }
        else{
            li.style.textDecoration="none"
        }
    })
    button.addEventListener("click",()=>{
        li.remove();
    })
    input.value=''
})