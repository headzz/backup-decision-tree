const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('revadToken');

let clientData =  {cpfOrCnpj: '', email: '', name: '', telephone: '' }
let otherInfo = {partner: false, solarEnergyType: '', sellCategories: []}

const sendData = (hasInterest) =>{
  const uri = 'https://api.revad.app/dataDigest/coletarDadosTemplate';
  let formData = new FormData()
  formData.append('token', token);

  const pp = {
    'quer_fazer_parte': hasInterest,
    'tipo_energia_solar': otherInfo.solarEnergyType,
    'info_cliente':{
      'nome':clientData.name,
      'tel':clientData.telephone,
      'email':clientData.email,
      'cpf': clientData.cpfOrCnpj
    },
  }

  formData.append('dados', JSON.stringify(pp));
  
  $.ajax({
    type: 'POST',
    url: uri,
    data: formData,
    processData: false,
    contentType: false,
    success:function(data) {
      console.log('')
    },
    error: function(result){
      console.log('')
    }
  })
}