console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'violet') {
      body.style.backgroundColor = "violet"
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = "green"
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor = "pink"
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = "purple"
    }

    
    if (e.target.id === 'indigo') {
        body.style.backgroundColor = "indigo"
      }
      if (e.target.id === 'orange') {
        body.style.backgroundColor = "orange"
      }
    
  });
});

