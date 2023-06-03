let page = 1;
let disabled = false
let clientData =  {cpfOrCnpj: '', email: '', name: '', }
const PAGE_WITHOUT_VALIDATION = 4;

const onPageClick = (id) => {

  const pageToBeChanged = `main[page="${id}"]`

  const pageElement = document.querySelector(pageToBeChanged)

  if(pageElement){
    console.log('entrei page element')
    pageElement.style = "display: none" 
  }
  
    const nextPage = `main[page="${(id+1)}"]`
    document.querySelector(nextPage).style = "display: grid"

    if(id<PAGE_WITHOUT_VALIDATION){
      document.querySelector(`${nextPage} div button`).disabled = true
    }
}

const onTreeDecisionClick = (actualPage, id)=> {

  const pageToBeChanged = `main[page="${actualPage}"]`;
  document.querySelector(pageToBeChanged).style = "display: none";

  onPageClick(id)
}

const showLastPage = (actualPage)=> {

  const pageToBeChanged = `main[page="${actualPage}"]`;
  document.querySelector(pageToBeChanged).style = "display: none";

  const lastPage = `main[page="14"]`;
  document.querySelector(lastPage).style = "display: grid";
}

const returnHomePage = () => {
  console.log('return to home page')
}

function debounce(func, timeout = 120){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const validation = {name: nameValidation, telephone: telephoneMask, cpfcnpj: cpfCnpjMask}

const processChange = debounce((inputName) => validation[inputName]());
