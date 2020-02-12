const scriptURL = 'https://hooks.zapier.com/hooks/catch/5385899/otlarqc/';
const scriptURLPhone = "https://hooks.zapier.com/hooks/catch/5385899/odla7o9/";
let alreadyDone = false;
let alreadyDonePhone = false;

const form1 = document.forms['formHeader']
form1.addEventListener('submit', e => {
  e.preventDefault();
  $('#ModalInscription').modal('toggle');
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
  $('#ModalInscription').modal('toggle');
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
  $('#ModalInscription').modal('toggle');
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

let offre = 0;
let duree = 0;
let price = "";

function updatePrice (){
  if(offre === 0 && duree === 0) {
    price = 999;
  } else if (offre === 1 && duree === 1) {
    price = 2999;
  } else {
    price = 1699;
  }
  document.getElementById("priceToUpdate").innerHTML = price;
}


var el = document.querySelector('.odometer');

od = new Odometer({
  el: el,
  value: 999,
  duration: 500,
  format: '( ddd)'
});


document.getElementById("switch1Input").onclick = function(e) {
  let els = document.querySelectorAll("#switch1 p");
  els[0].classList.toggle("textChecked");
  els[1].classList.toggle("textChecked");
  if(offre === 0) {
    offre = 1;
  } else {
    offre = 0;
  }
  updatePrice();
};

document.getElementById("switch2Input").onclick = function(e) {
  let els = document.querySelectorAll("#switch2 p");
  els[0].classList.toggle("textChecked");
  els[1].classList.toggle("textChecked");
  if(duree === 0) {
    duree = 1;
  } else {
    duree = 0;
  }
  updatePrice();
};


setTimeout(function(){
  $('.toast').toast('show');
}, 2000);


$('.toast').on( "click", function() {
   $('#ModalPhone').modal('show');
});

const form4 = document.forms['formPhone']
form4.addEventListener('submit', e => {
  e.preventDefault();
  $('#ModalPhone').modal('toggle');
  $('#ModalPhone_validation').modal('toggle');
  if(!alreadyDonePhone){
    document.getElementById('modal_success_phone').classList.remove("d-none");
    fetch(scriptURLPhone, { method: 'POST', body: new FormData(form4)})
    .then(response => {
      document.getElementById('modal_loader_phone').classList.add("d-none");
      document.getElementById('modal_success_phone').classList.remove("d-none");
      alreadyDonePhone = true;
    })
    .catch(error => {
      console.error('Error!', error.message);
      document.getElementById('modal_loader_phone').classList.add("d-none");
      document.getElementById('modal_error_phone').classList.remove("d-none");
    })
  }
})
