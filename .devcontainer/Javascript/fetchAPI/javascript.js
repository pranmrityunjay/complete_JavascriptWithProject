const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
  

const dropdowns = document.querySelectorAll(".dropdown select");
let amount=document.querySelector('.amount input')
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");

// for(let code in countryList )
// console.log(code)


for (let select of dropdowns) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;

      if(select.name==='from' && currCode==='INR')
      newOption.selected="selected";
      else if(select.name==='to' && currCode==='USD')
      newOption.selected="selected"
      select.append(newOption);
     
    }

    select.addEventListener("change",(E)=>{
         updateFlag(E.target);
        
        
      });

}

function updateFlag(element){
    let currCode=element.value;
    let countCode=countryList[currCode];

 
    
    let newSrc=`https://flagsapi.com/${countCode}/flat/64.png`;
    let img=element.parentElement.querySelector('img');
    img.src=newSrc;


    


}


document.querySelector(".form button").addEventListener('click', async (E)=>{
    E.preventDefault();
    //  let temp=amount.value;

    const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr/jpy.json"
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data)
     

    
    
     
     
       

    

    



})




