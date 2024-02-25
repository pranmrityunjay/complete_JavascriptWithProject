const clock=document.querySelector('#realtime')

setInterval(function(){
    let realTime=new Date()
    clock.innerHTML=realTime.toLocaleTimeString();

},1000)