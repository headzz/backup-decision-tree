const PAGE_WITHOUT_VALIDATION = 4;

const onPageClick = (id, nextPageFocus) => {
  window.top.postMessage('keepTemplate', '*');
  const pageToBeChanged = `main[page="${id}"]`

  const pageElement = document.querySelector(pageToBeChanged)

  if(pageElement){
    pageElement.style = "display: none" 
  }
  
    const nextPage = `main[page="${(id+1)}"]`
    document.querySelector(nextPage).style = "display: grid"

    if(nextPageFocus && nextPageFocus.includes('client-')){
      document.getElementById(nextPageFocus).focus()
      navigator.virtualKeyboard.show();
    }

    if((id+1)<PAGE_WITHOUT_VALIDATION){
      document.querySelector(`${nextPage} div button`).disabled = true
    }
}

const onTreeDecisionClick = (actualPage, id, send)=> {

  window.top.postMessage('keepTemplate', '*');
  if(send === 'send'){
    sendData(true)
  }

  document.body.style = 'background-image: none;'
  const pageToBeChanged = `main[page="${actualPage}"]`;
  document.querySelector(pageToBeChanged).style = "display: none";

  onPageClick(id, send)
}

const returnHomePage = () => {

  window.top.postMessage('nextTemplate', '*');
}

function debounce(func, timeout = 250){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const validation = {name: nameValidation, telephone: telephoneMask, cpfcnpj: cpfCnpjMask, email: emailValidation}

const processChange = debounce((inputName) => {
  window.top.postMessage('keepTemplate', '*');
  validation[inputName]()
});
