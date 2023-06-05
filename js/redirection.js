const redirectFromSolar= () => {
  const isSolarEnergyChecked = document.getElementById('solar').checked

  const pageToBeChanged = `main[page="8"]`

  document.querySelector(pageToBeChanged).style = "display: none"
  if(isSolarEnergyChecked){
    const nextPage = `main[page="10"]`

    document.querySelector(nextPage).style = "display: grid"
  } else {
    const nextPage = `main[page="9"]`

    document.querySelector(nextPage).style = "display: grid"
  }
}

const checkboxButtonValidation = (fieldsetId) => {
  let inputSelected = false;

  document.querySelectorAll(`fieldset[id="${fieldsetId}"] input[type="checkbox"]`)
  const inputData = document.querySelectorAll('input[type="checkbox"]')

  inputData.forEach((item) => {
    item.checked ? (inputSelected = item.checked) : ''  
  })

  const button = document.getElementById(fieldsetId).nextElementSibling 
  if(inputSelected){
    return button.disabled = false
  }

  return button.disabled = true
}

function redirectFromGridType(){
  const selectedValue = document.querySelector('input[type="radio"]:checked').value;

  const actualPage = document.querySelector('main[page="10"]')
  actualPage.style = 'display: none'

  if(selectedValue == 'on-grid'){
    const nextPage = document.querySelector('main[page="11"]')
    return nextPage.style = 'display: grid'
  }

  if(selectedValue == 'off-grid'){
    const nextPage = document.querySelector('main[page="12"]')
    return nextPage.style = 'display: grid'
  }

  const nextPage = document.querySelector('main[page="13"]')
  return nextPage.style = 'display: grid'

}

