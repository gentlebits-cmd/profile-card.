/*function addTask(){
  let input=document.getElementById("myInput");
  let text=input.value;
  let li=document.createElement("li");
  li.textContent=text;
if(text===""){
  return;
}
  li.onclick=function(){
    li.style.textDecoration="line-through";

  }
  let btn=document.createElement("button");
  btn.textContent="Delete";
  btn.onclick=function(){
    li.remove();

  }
  li.appendChild(btn);
  document.getElementById("myList").appendChild(li);
  input.value="";

}
  */
let h=document.querySelector("h5")
let btn=document.querySelector("#add")
let check=0;
btn.addEventListener("click",function(){
  if(check==0){
      h.innerHTML="Friends"
    h.style.color="green"
    btn.innerHTML="Remove friends"
    check=1
      
  }
  else{
      h.innerHTML="Stranger"
      h.style.color="red"
      btn.innerHTML="Add friends"

  
    check=0
  }
  
})


