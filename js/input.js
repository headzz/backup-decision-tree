function nameValidation(){
  console.log('entered')
  const inputData = document.querySelector(`main div input[name="name"]`)
  const inputError = inputData.nextElementSibling
  const buttonData = inputError.nextElementSibling

  if(inputData.value.length > 2){
    clientData.name = inputData.value
    inputError.innerHTML = ''
    return buttonData.disabled = false
  } else {
    inputError.innerHTML = 'Nome precisa ter mais de 2 letras.'
    buttonData.disabled = true
  }
}

function formatTelephone(telephoneElement, textoAtual, telephoneSize, slice1, slice2){
  const parte1 = textoAtual.slice(0,slice1);
  const parte2 = textoAtual.slice(slice1,slice2);
  const parte3 = textoAtual.slice(slice2,telephoneSize);
  textoAjustado = `${parte1} ${parte2}-${parte3}` 
  telephoneElement.value = textoAjustado
}

function telephoneMask(){

  const telephoneData = document.querySelector(`main div input[name="telephone"]`)
  const telephoneSize = telephoneData.value.length
  const inputError = telephoneData.nextElementSibling
  const buttonData = inputError.nextElementSibling

  let textoAjustado;
  const textoAtual = telephoneData.value.replaceAll(" ", "").replaceAll("-", "");
  
  if(telephoneSize >12){
    formatTelephone(telephoneData, textoAtual, telephoneSize, 2, 7)

    buttonData.disabled = false
    return;
  } 
  if(telephoneSize >7){
    formatTelephone(telephoneData, textoAtual, telephoneSize, 2, 6)

    if(telephoneSize === 12){
      buttonData.disabled = false
    } else {
      buttonData.disabled = true
    }

    return;
  }

  if(telephoneSize >2){
    const parte1 = textoAtual.slice(0,2);
    const parte2 = textoAtual.slice(2,telephoneSize);
    textoAjustado = `${parte1} ${parte2}` 
    telephoneData.value = textoAjustado

    buttonData.disabled = true
    return;
  }
}

function cpfCnpjValidation(){
  console.log('cpf')
  const cpfCnpjData = document.querySelector(`main div input[name="cpf"]`)
  const inputError = cpfCnpjData.nextElementSibling
  const buttonData = inputError.nextElementSibling

  console.log(cpfCnpjData.value)

  let textoAtual = cpfCnpjData.value;
  console.log(textoAtual)
  textoAtual = textoAtual.replaceAll("/", "").replaceAll("-", "").replaceAll(".","");
  console.log(textoAtual)
  const inputCpfCnpjSize = textoAtual.length

  if(inputCpfCnpjSize === 11 ){
    console.log('cpf ok')
    const parte1 = textoAtual.slice(0,3);
    const parte2 = textoAtual.slice(3,6);
    const parte3 = textoAtual.slice(6,9);
    const parte4 = textoAtual.slice(9,11);

    textoAjustado = `${parte1}.${parte2}.${parte3}-${parte4}`
    cpfCnpjData.value = textoAjustado
    buttonData.disabled = false
    console.log(textoAjustado)
    return;
  }

  if(inputCpfCnpjSize === 14 ){
    const parte1 = textoAtual.slice(0,2);
    const parte2 = textoAtual.slice(2,5);
    const parte3 = textoAtual.slice(5,8);
    const parte4 = textoAtual.slice(8,12);
    const parte5 = textoAtual.slice(12,14);

    textoAjustado = `${parte1}.${parte2}.${parte3}/${parte4}-${parte5}`
    cpfCnpjData.value = textoAjustado
    buttonData.disabled = false
    console.log('cnpj: ',textoAjustado)
    return;
  }

  cpfCnpjData.value = textoAtual
  buttonData.disabled = true
}