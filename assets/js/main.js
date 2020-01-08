const scriptURL = 'https://hooks.zapier.com/hooks/catch/5385899/otlarqc/'
let alreadyDone = false;

const form1 = document.forms['formHeader']
form1.addEventListener('submit', e => {
  e.preventDefault();
  $('#exampleModalCenter').modal('toggle');
  if(!alreadyDone){
    document.getElementById('modal_loader').classList.remove("d-none");
    fetch(scriptURL, { method: 'POST', body: new FormData(form1)})
    .then(response => {
      document.getElementById('modal_loader').classList.add("d-none");
      document.getElementById('modal_success').classList.remove("d-none");
      alreadyDone = true;
    })
    .catch(error => {
      console.error('Error!', error.message);
      document.getElementById('modal_loader').classList.add("d-none");
      document.getElementById('modal_error').classList.remove("d-none");
    })
  }
})


const form2 = document.forms['formPrice']
form2.addEventListener('submit', e => {
  e.preventDefault();
  $('#exampleModalCenter').modal('toggle');
  if(!alreadyDone){
    document.getElementById('modal_loader').classList.remove("d-none");
    fetch(scriptURL, { method: 'POST', body: new FormData(form2)})
    .then(response => {
      document.getElementById('modal_loader').classList.add("d-none");
      document.getElementById('modal_success').classList.remove("d-none");
      alreadyDone = true;
    })
    .catch(error => {
      console.error('Error!', error.message);
      document.getElementById('modal_loader').classList.add("d-none");
      document.getElementById('modal_error').classList.remove("d-none");
    })
  }
})

const form3 = document.forms['formContact']
form3.addEventListener('submit', e => {
  e.preventDefault();
  $('#exampleModalCenter').modal('toggle');
  if(!alreadyDone){
    document.getElementById('modal_loader').classList.remove("d-none");
    fetch(scriptURL, { method: 'POST', body: new FormData(form3)})
    .then(response => {
      document.getElementById('modal_loader').classList.add("d-none");
      document.getElementById('modal_success').classList.remove("d-none");
      alreadyDone = true;
    })
    .catch(error => {
      console.error('Error!', error.message);
      document.getElementById('modal_loader').classList.add("d-none");
      document.getElementById('modal_error').classList.remove("d-none");
    })
  }
})





setTimeout(function(){
  $('.toast').toast('show');
}, 2000);
