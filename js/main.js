let page = 1;
let disabled = false
let clientData =  {cpfOrCnpj: '', email: '', name: '', }

const onPageClick = (id) => {

  const pageToBeChanged = `main[page="${id}"]`
  document.querySelector(pageToBeChanged).style = "display: none" 

  const nextPage = `main[page="${(id+1)}"]`
  document.querySelector(nextPage).style = "display: grid"

  document.querySelector(`${nextPage} div button`).disabled = true
}

function debounce(func, timeout = 120){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const validation = {name: nameValidation, telephone: telephoneMask, cpfcnpj: cpfCnpjValidation}

const processChange = debounce((inputName) => validation[inputName]());
