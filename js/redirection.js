const redirectFromSolar= () => {
  isSolarEnergyChecked = document.getElementById('solar').checked

  const pageToBeChanged = `main[page="8"]`

  document.querySelector(pageToBeChanged).style = "display: none"
  if(isSolarEnergyChecked){
  } else {
    const pageToBeChanged = `main[page="9"]`

    document.querySelector(pageToBeChanged).style = "display: grid"
  }
}