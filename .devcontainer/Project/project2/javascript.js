const form=document.querySelector('form')
form.addEventListener("submit",(E)=>{
  E.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('#results')
  if(height<=0||height==="" || isNaN(height) )
  result.innerHTML="Height is Invalid"
  else if(weight<=0 || isNaN(weight) ||weight==="")
  result.innerHTML="weight is Invalid"
  else{
  let h=height*height
  const bmi=(10000*weight/h).toFixed(2)
  if(bmi<18.6){
  result.innerHTML="Under-weight"
  result.style.color="red"
  }
  else if(bmi<24.9){
  result.innerHTML="Normal Range"
  result.style.color="Green"
  }
  else{
  result.innerHTML="Over-weight"
  result.style.color="red"
  }
}











  


})