const regex = /^[0-9]+$/

function nameValidation(){
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

function isNumberValid(button, error, type, text){

  const isValid = regex.test(text.trim())
  const errorMessage = (type == 'telephone') ? 'Telefone deve conter apenas números.' : 'CPF/CNPJ deve conter apenas números.'
  if(isValid){
    button.disabled = false
    error.innerHTML = ''
  } else {
    button.disabled = true
    error.innerHTML = errorMessage
  }
}

function telephoneMask(){

  const telephoneData = document.querySelector(`main div input[name="telephone"]`)
  const telephoneSize = telephoneData.value.length
  const inputError = telephoneData.nextElementSibling
  const buttonData = inputError.nextElementSibling

  let textoAjustado;
  const textoAtual = telephoneData.value.replaceAll(" ", "").replaceAll("-", "");

  console.log(telephoneSize)
  if(telephoneSize >2){
    const parte1 = textoAtual.slice(0,2);
    const parte2 = textoAtual.slice(2,telephoneSize);
    textoAjustado = `${parte1} ${parte2}` 
    telephoneData.value = textoAjustado

    buttonData.disabled = true
  }

  if(telephoneSize >7){
    formatTelephone(telephoneData, textoAtual, telephoneSize, 2, 6)

    if(telephoneSize === 12){
      clientData.telephone = textoAtual
      isNumberValid(buttonData, inputError, 'telephone', textoAtual)
    } else {

      buttonData.disabled = true
      inputError.innerHTML = ''
    }
  }
  
  if(telephoneSize >12){
    clientData.telephone = textoAtual
    formatTelephone(telephoneData, textoAtual, telephoneSize, 2, 7)
     isNumberValid(buttonData, inputError, 'telephone', textoAtual)
  } 
}

function cpfCnpjMask(){
  const cpfCnpjData = document.querySelector(`main div input[name="cpf"]`)
  const inputError = cpfCnpjData.nextElementSibling
  const buttonData = inputError.nextElementSibling

  let textoAtual = cpfCnpjData.value;

  textoAtual = textoAtual.replaceAll("/", "").replaceAll("-", "").replaceAll(".","");

  const inputCpfCnpjSize = textoAtual.length

  if(inputCpfCnpjSize === 11 ){
    clientData.cpfOrCnpj = textoAtual
    const parte1 = textoAtual.slice(0,3);
    const parte2 = textoAtual.slice(3,6);
    const parte3 = textoAtual.slice(6,9);
    const parte4 = textoAtual.slice(9,11);

    textoAjustado = `${parte1}.${parte2}.${parte3}-${parte4}`
    cpfCnpjData.value = textoAjustado
    return isNumberValid(buttonData, inputError, 'cpf', textoAtual)
  }

  if(inputCpfCnpjSize === 14){
    clientData.cpfOrCnpj = textoAtual
    const parte1 = textoAtual.slice(0,2);
    const parte2 = textoAtual.slice(2,5);
    const parte3 = textoAtual.slice(5,8);
    const parte4 = textoAtual.slice(8,12);
    const parte5 = textoAtual.slice(12,14);

    textoAjustado = `${parte1}.${parte2}.${parte3}/${parte4}-${parte5}`
    cpfCnpjData.value = textoAjustado
    return isNumberValid(buttonData, inputError, 'cnpj', textoAtual)
  }

  cpfCnpjData.value = textoAtual
  buttonData.disabled = true
}

function emailValidation(){
  const emailData = document.querySelector(`main div input[name="email"]`)
  const inputError = emailData.nextElementSibling
  const buttonData = inputError.nextElementSibling

  const emailRegex = /^(.+)@(.+)\.(.+)$/
  const textoAtual = emailData.value

  const isEmailValid = emailRegex.test(textoAtual.trim())

  if(isEmailValid){
    buttonData.disabled = false
    clientData.email = textoAtual
    return inputError.innerHTML = ''
  } else {
    buttonData.disabled = true
    return inputError.innerHTML = 'Formato de Email inválido.'
  }
}