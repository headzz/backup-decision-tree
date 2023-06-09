let db = new Localbase('db');
const urlParams = new URLSearchParams(window.location.search);
token = urlParams.get('revadToken');

document.addEventListener("contextmenu", (event) => event.preventDefault());
let click;



document.onclick = function () {
  window.top.postMessage("keepTemplate", "*"); 
  clearTimeout(click);
  runCaller();
};  

var x = document.getElementById("myAudio"); 
x.volume = 0.2;

function runCaller() {
  click = setTimeout(() => {
    // console.log('auto envia no click')
    buildPacoteEnviar();
  }, 10000);
}

// token = 'ce090c4d02ed9328507f045c88c2c2d2c6c73b3d39712da750f87fd2f3bbef5a'

let responses = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: [],
  8: '',
  9: '',
  10:'',
  11:'',
  12:''
};
const valor_kit_500_600 = 3170.9,
  valor_kit_1200 = 5560.9,
  valor_instalacao_500_600 = [
    { qtd: 1, valor: 2228 },
    { qtd: 2, valor: 3956 },
    { qtd: 3, valor: 5382 },
    { qtd: 4, valor: 6523 },
    { qtd: 5, valor: 7436 },
    { qtd: 6, valor: 8166 },
    { qtd: 7, valor: 8750 },
    { qtd: 8, valor: 9218 },
    { qtd: 9, valor: 9686 },
    { qtd: 10, valor: 10154 },
    { qtd: 11, valor: 10622 },
    { qtd: 12, valor: 11090 },
    { qtd: 13, valor: 11558 },
    { qtd: 14, valor: 12026 },
    { qtd: 15, valor: 12494 },
    { qtd: 16, valor: 12962 },
    { qtd: 17, valor: 13430 },
    { qtd: 18, valor: 13898 },
    { qtd: 19, valor: 14366 },
    { qtd: 20, valor: 14834 },
  ],
  valor_instalacao_1200 = [
    { qtd: 1, valor: 2700 },
    { qtd: 2, valor: 4860 },
    { qtd: 3, valor: 6588 },
    { qtd: 4, valor: 7971 },
    { qtd: 5, valor: 9354 },
    { qtd: 6, valor: 10737 },
    { qtd: 7, valor: 12120 },
    { qtd: 8, valor: 13503 },
    { qtd: 9, valor: 14886 },
    { qtd: 10, valor: 13503 },
    { qtd: 11, valor: 14886 },
    { qtd: 12, valor: 16269 },
    { qtd: 13, valor: 17652 },
    { qtd: 14, valor: 19035 },
    { qtd: 15, valor: 20418 },
    { qtd: 16, valor: 21801 },
    { qtd: 17, valor: 23184 },
    { qtd: 18, valor: 24567 },
    { qtd: 19, valor: 25950 },
    { qtd: 20, valor: 27333 },
  ];

let active_input;
const mainLayout = {
  default: [
    'q w e r t y u i o p {bksp}',
    'a s d f g h j k l ç',
    '{shift} z x c v b n m , . {shift}',
    '{alt} {space} {altright}',
  ],
  shift: [
    'Q W E R T Y U I O P {bksp}',
    'A S D F G H J K L Ç',
    '{shiftactivated} Z X C V B N M , . {shiftactivated}',
    '{alt} {space} {altright}',
  ],
  alt: [
    '1 2 3 4 5 6 7 8 9 0 {bksp}',
    `@ # $ & * ( ) ' " {enter}`,
    '{shift} % - + = / ; : ! ? {shift}',
    '{default} {space} {back}',
  ],
  smileys: [
    '😀 😊 😅 😂 🙂 😉 😍 😛 😠 😎 {bksp}',
    `😏 😬 😭 😓 😱 😪 😬 😴 😯 {enter}`,
    '😐 😇 🤣 😘 😚 😆 😡 😥 😓 🙄 {shift}',
    '{default} {smileys} {space} {altright}',
  ],
};

const emailLayout = {
  default: [
    'q w e r t y u i o p {bksp}',
    'a s d f g h j k l ç',
    '{shift} z x c v b n m , . @gmail.com',
    '{alt} {space} @yahoo.com @hotmail.com',
  ],
  shift: [
    'Q W E R T Y U I O P {bksp}',
    'A S D F G H J K L Ç',
    '{shiftactivated} Z X C V B N M , . @gmail.com',
    '{alt} {space} @yahoo.com @hotmail.com',
  ],
  alt: [
    '1 2 3 4 5 6 7 8 9 0 {bksp}',
    `@ # $ & * ( ) ' " {enter}`,
    '{shift} % - + = / ; : ! ? {shift}',
    '{default} {space} {back}',
  ],
  smileys: [
    '😀 😊 😅 😂 🙂 😉 😍 😛 😠 😎 {bksp}',
    `😏 😬 😭 😓 😱 😪 😬 😴 😯 {enter}`,
    '😐 😇 🤣 😘 😚 😆 😡 😥 😓 🙄 {shift}',
    '{default} {smileys} {space} {altright}',
  ],
};

const numPad = {
  default: ['1 2 3', '4 5 6', '7 8 9', '. 0 {bksp}'],
};
const mainDisplay = {
  '{alt}': '.?123',
  '{smileys}': '\uD83D\uDE03',
  '{shift}': '⇧',
  '{shiftactivated}': '⇧',
  '{enter}': 'return',
  '{bksp}': '&#9003;',
  '{altright}': '.?123',
  '{downkeyboard}': '🞃',
  '{space}': ' ',
  '{default}': 'ABC',
  '{back}': '⇦',
  '{m1}':"@gmail.com",
  '{m2}':"@hotmail.com"
};

const Keyboard = window.SimpleKeyboard.default;
let inputMask = window.SimpleKeyboardInputMask.default;
let selectedInput;
let myKeyboard = new Keyboard('.v-keyboard',{
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
  theme: 'hg-theme-default hg-theme-ios simple-keyboard',
  layout: mainLayout,
  display: mainDisplay,
});

let myKeyboard_tel = new Keyboard('.v-keyboard-tel',{
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
  theme: 'hg-theme-default hg-theme-ios numpad-class simple-keyboard',
  layout: numPad,
  display: mainDisplay,
  modules: [inputMask],
  inputMask: {
    "default": {
      mask: '(99) 99999-9999',
      regex: /^[0-9]+$/
    }
  },
});

let myKeyboard_price = new Keyboard('v-keyboard-price',{
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
  theme: 'hg-theme-default hg-theme-ios numpad-class simple-keyboard',
  layout: numPad,
  display: mainDisplay,
  modules: [inputMask],
  inputMask: {
    "default": {
      mask: 'R$ 9999,99',
      regex: /^[0-9]+$/
    }
  },
});

let myKeyboard_email = new Keyboard('.v-keyboard-email',{
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button,'email'),
  theme: 'hg-theme-default hg-theme-ios custom-space custom-mail simple-keyboard',
  layout: emailLayout,
  display: mainDisplay,
});

let wordList = []
let lista_estados = document.getElementById('lista_estados');

estados_uf.forEach((e,i)=>{
  wordList.push(e.nome);
})

wordList = wordList.sort()

wordList.forEach((e,i)=>{
  e
  a = document.createElement("LABEL");
  a.innerHTML = `
    <strong>${e}</strong>
    <input type='radio' name='select-estado' onchange='respondeEstado(this)' value='${e}'>
    <span class="checkmark"></span>
  `;
  lista_estados.append(a);
})

hideAllKeyboards();

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  // myKeyboard.setInput(inp.value);
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  var a, b, i, val = inp.value;
  /*close any already open lists of autocompleted values*/
  closeAllLists();
  if (!val) { return false;}
  currentFocus = -1;
  /*create a DIV element that will contain the items (values):*/
  a = document.createElement("DIV");
  a.setAttribute("id", inp.id + "autocomplete-list");
  a.setAttribute("class", "autocomplete-items");
  /*append the DIV element as a child of the autocomplete container:*/
  inp.parentNode.insertBefore(a, inp);
  /*for each item in the array...*/
  for (i = 0; i < arr.length; i++) {
    /*check if the item starts with the same letters as the text field value:*/
    if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
      /*create a DIV element for each matching element:*/
      b = document.createElement("DIV");
      /*make the matching letters bold:*/
      b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
      b.innerHTML += arr[i].substr(val.length);
      /*insert a input field that will hold the current array item's value:*/
      b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
      /*execute a function when someone clicks on the item value (DIV element):*/
          
      b.addEventListener("click", function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          myKeyboard.setInput(inp.value);
          if(document.querySelector('.active').id == 'tela_1'){
            if(checkLocale()){
              show_hand('22%','5%');
            }
          }
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
      });
      a.appendChild(b);
    }
  }
   
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  
  
}

function hideAllKeyboards() { 
  document.querySelector('.v-keyboard').style.display='none'
  document.querySelector('.v-keyboard-email').style.display='none'
  document.querySelector('.v-keyboard-tel').style.display='none'
  document.querySelector('.v-keyboard-price').style.display='none'
}

document.querySelectorAll(".input").forEach(input => {
  input.addEventListener("focus", onInputFocus);
  // Optional: Use if you want to track input changes
  // made without simple-keyboard
  // input.addEventListener("input", onInputChange);
});

function onInputFocus(event) {
  hideAllKeyboards();
  selectedInput = `#${event.target.id}`;
  if (event.target.id == 'tel_user') {
    // v-keyboad-tel
    
    // myKeyboard_tel.setOptions({
    //   inputName: event.target.id
    // });
    document.querySelector('.v-keyboard-tel').style.display='block'
  } else if (event.target.id == 'email_user') {
    // v-keyboad-email
    // myKeyboard_email.setOptions({
    //   inputName: event.target.id
    // });
    document.querySelector('.v-keyboard-email').style.display='block'
  } else if(event.target.id == 'conta') {
    // v-keyboad-price
    
    // myKeyboard_price.setOptions({
    //   inputName: event.target.id
    // });
    document.querySelector('.v-keyboard-price').style.display='block'
  } else {
    // default
    // myKeyboard.setOptions({
    //   inputName: event.target.id
    // });
    document.querySelector('.v-keyboard').style.display='block'
  }
}

function onInputChange(event) {
  if (event.target.id == 'tel_user') {
    // v-keyboad-tel
    myKeyboard_tel.setInput(event.target.value, event.target.id);
  } else if (event.target.id == 'email_user') {
    // v-keyboad-email
    myKeyboard_email.setInput(event.target.value, event.target.id);
  } else if(event.target.id == 'conta') {
    // v-keyboad-price
    myKeyboard_price.setInput(event.target.value, event.target.id);
  } else {
    // default
    myKeyboard.setInput(event.target.value, event.target.id);
  }
}

function onChange(input) {
  
  document.querySelector(selectedInput || ".input").value = input;

  if(document.querySelector('.active').id == 'tela_1'){
    show_button('54%');
    show_hand('22%','5%');
  } else if (document.querySelector('.active').id == 'tela_2'){
    show_button('54%');
    show_hand('17%','5%');  
  } else if (document.querySelector('.active').id == 'tela_6'){
    show_hand('25%','5%');
  } else if (document.querySelector('.active').id == 'tela_7'){
    // show_button('43%');
    show_hand('15%','0%')
  } else if (document.querySelector('.active').id == 'tela_8'){
    show_hand('25%','5%');
  } else if (document.querySelector('.active').id == 'tela_9'){
    show_hand('25%','5%');
  }

}

function onKeyPress(button,pai='') {
  if (button.includes('{') && button.includes('}')) {
    handleLayoutChange(button,pai);
  }
}

function handleLayoutChange(button,pai='') {
  console.log(pai)
  let currentLayout;
  if(pai == 'email'){
    currentLayout = myKeyboard_email.options.layoutName;
  } else {
    currentLayout = myKeyboard.options.layoutName;
  }
  let layoutName;
  switch (button) {
    case '{shift}':
    case '{shiftactivated}':
    case '{default}':
      layoutName = currentLayout === 'default' ? 'shift' : 'default';
      break;

    case '{alt}':
    case '{altright}':
      layoutName = currentLayout === 'alt' ? 'default' : 'alt';
      break;

    case '{smileys}':
      layoutName = currentLayout === 'smileys' ? 'default' : 'smileys';
      break;

    default:
      break;
  }

  if (layoutName) {
    if(pai =='email'){
      myKeyboard_email.setOptions({
        layoutName: layoutName,
      });
    } else {
      myKeyboard.setOptions({
        layoutName: layoutName,
      });
    }
  }
}

var on_enviando = false;

function sendOnflineData(f) {
  var uri = 'https://api.revad.app/dataDigest/coletarDadosTemplate';
  let formData  = new FormData();
  var handle;
  formData.append('token', token);
  
  if(f){
    // console.log('to off')
    clearInterval(handle);
    return false;
  } 

  // console.log('to on');
  
  if(!on_enviando){
    on_enviando = true;
    handle = setInterval(() => {
      db.collection('leeds')
      .get()
      .then(leeds => {
        if(leeds.length > 0){
          leeds.forEach((e,i)=>{
            if(e != {}){
              if(leeds.length-1 == i){
                on_enviando = false;
                clearInterval(handle);
              }
              formData.append('dados', JSON.stringify(e));
              $.ajax({
                type: 'POST',
                url: uri,
                data: formData,
                processData: false,
                contentType: false,
                success:function(data) {
                  db.collection('leeds').doc({ id: e.id }).delete();
                  console.log(data);
                }
              }); 
            }
          })
        }
      }).catch(err=>{
        console.log('over')
      })
    }, 3*1000);
  } 
}

function ping(){
  // console.log('ping')
  var isValid = false;
    $.ajax({
      url: "https://api.revad.app/dataDigest/coletarDadosTemplate",
      type: "POST",
      async: false,
      dataType: "json",
      success: function(data) {
        isValid = true
      },
      error: function(){
        isValid = false        
      }
    });
    return isValid;
}

t = setInterval(() => {
  updateOnlineStatus()
}, 15*1000);

function updateOnlineStatus() {
  if(ping()) {
    // to on
    sendOnflineData();
  } else {
    // to off
    sendOnflineData(true);
  }
}

function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

async function buildPacoteEnviar(){
  clearTimeout(click);
  var uri = 'https://api.revad.app/dataDigest/coletarDadosTemplate';
  var tipo_install = '';
  var tipo_telha = '';

  if(responses[3]=='resi'){
    tipo_install = 'residencial'
  } else if (responses[3] == 'empr') {
    tipo_install = 'empresarial'
  }
  
  if(responses[4] =='ceram'){
    tipo_telha = "ceramica"
  } else if (responses[4] =='fibro'){
    tipo_telha = "fibrocimento"
  } else if (responses[4] =='metal'){
    tipo_telha = "metal"
  } else if (responses[4] =='outro'){
    tipo_telha = "outro"
  }

  const m_id = guidGenerator();

  var pp = {
    "id":m_id,
    'uf_instalacao':responses[1],
    'valor_conta':responses[2],
    'tipo_instalacao':tipo_install,
    'tipo_telhado':tipo_telha,
    'tem_interesse':(responses[6].toLocaleLowerCase() == 'sim'?true:false),
    'info_cliente':{
      'nome':responses[7][0],
      'tel':responses[7][1],
      'email':responses[7][2],
      'flag':(responses[7][3] == 'pode'?true:false)
    },
    'receber_contato':(responses[10]=='call'?true:false),
    'receber_wp':(responses[10]=='tpr'?true:false),
  }


  db.collection('leeds').add(pp);
  
  // console.log(pp);

  let formData  = new FormData();
  formData.append('token', token);
  formData.append('dados', JSON.stringify(pp));

  $.ajax({
    type: 'POST',
    url: uri,
    data: formData,
    processData: false,
    contentType: false,
    success:function(data) {
      db.collection('leeds').doc({ id: m_id }).delete();
    },
    error: function(result){
      updateOnlineStatus();
    }
  })
}

function responde(e) {
  if (document.querySelectorAll('.active .btn-selected').length >= 1) {
    document
      .querySelectorAll('.active .btn-selected')[0]
      .classList.remove('btn-selected'),
      e.classList.add('btn-selected');
  }

  let r = e.getAttribute('resp'),
    a = document.querySelector('.active').getAttribute('page');
  
  if (a == '6') {
    let ll = e.getAttribute('id');
    if (document.querySelectorAll('.selected-shape').length > 0) {
      document
        .querySelector('.selected-shape')
        .classList.remove('selected-shape');
    }
    e.children[0].classList.add('selected-shape');
    responses[a] = ll;
    if(ll=='sim'){
      show_hand('46%','55%')
    } else if (ll=='nao'){
      show_hand('46%','7%')
    }
    setTimeout(() => {
      nextPage();
    }, 1000);
  } else if (a == '3') {
    e.classList.add('btn-selected');
    responses[a] = r;
    if(r=='resi'){
      show_hand('17%','13%')
    } else {
      show_hand('44%','13%')
    }
    setTimeout(() => {
      nextPage();
    }, 1000);
  } else if (a == '4') {
    e.classList.add('btn-selected');
    responses[a] = r;
    if(r=='ceram'){
      show_hand('17%','40%')
    } else if (r=='fibro'){
      show_hand('17%','-3%')
    } else if (r=='metal'){
      show_hand('44%','40%')
    } else if (r=='outro'){
      show_hand('44%','-3%')
    }
    setTimeout(() => {
      nextPage();
    }, 1000);
  } else if (a == '10'){
    let ll = e.getAttribute('id');
    if (document.querySelectorAll('.selected-shape').length > 0) {
      document
        .querySelector('.selected-shape')
        .classList.remove('selected-shape');
    }
    e.children[0].classList.add('selected-shape');
    responses[a] = ll;
    if(ll=='tpr'){
      show_hand('30%','60%')
    } else if (ll=='call'){
      show_hand('43%','60%')      
    }
    setTimeout(() => {
      nextPage(ll);
    }, 1300);
  } else {
    e.classList.add('btn-selected');
    responses[a] = r;
  }
}

function nextPage(resp = null) {
  hide_hand();
  // hide_custom_next();
  hide_button();
  show_prev_button();

  const current = document.querySelector('.active'),
    next = '[page="' + (parseInt(current.getAttribute('page')) + 1) + '"]',
    canItGo = letItGo(
      '[page="' + parseInt(current.getAttribute('page')) + '"]'
    ),
    pNumber = document.querySelector('.active').getAttribute('page');
  if(pNumber == '4'){
    current.classList.remove('active');
    current.style.display = 'none';
    document.querySelector('[page="7"]').classList.add('active');
    document.querySelector('[page="7"]').removeAttribute('style');
    keyboardCall('[page="7"]');

  } else if (pNumber == '6') {
    if (responses[6] == 'sim') {
      current.classList.remove('active');
      current.style.display = 'none';
      document.querySelector('[page="10"]').classList.add('active');
      document.querySelector('[page="10"]').removeAttribute('style');
      keyboardCall('[page="10"]');
    } else if (responses[6] == 'nao') {
      current.classList.remove('active');
      current.style.display = 'none';
      document.querySelector('[page="9"]').classList.add('active');
      document.querySelector('[page="9"]').removeAttribute('style');
      keyboardCall('[page="9"]');
    }
  } else if(pNumber == '7' && canItGo){
    current.classList.remove('active');
    current.style.display = 'none';
    document.querySelector('[page="5"]').classList.add('active');
    document.querySelector('[page="5"]').removeAttribute('style'); 
    keyboardCall('[page="5"]');
  } else if (pNumber == '10') {
    if(resp == 'tpr'){
      current.classList.remove('active');
      current.style.display = 'none';
      document.querySelector('[page="8"]').classList.add('active');
      document.querySelector('[page="8"]').removeAttribute('style');
      document.querySelector('[page="8"]').style.marginTop = '35px';
      keyboardCall('[page="8"]');
    } else if(resp == 'call'){
      current.classList.remove('active');
      current.style.display = 'none';
      document.querySelector('[page="11"]').classList.add('active');
      document.querySelector('[page="11"]').removeAttribute('style');
      keyboardCall('[page="11"]');
    }
    buildPacoteEnviar();
  } else if (next && canItGo) {
    current.classList.remove('active');
    current.style.display = 'none';
    document.querySelector(next).classList.add('active');
    document.querySelector(next).removeAttribute('style');
    keyboardCall(next);
  }
}

function previousPage() {
  const current = document.querySelector('.active'),
    prev = '[page="' + (parseInt(current.getAttribute('page')) - 1) + '"]';
  if (document.querySelector(prev)) {
    current.classList.remove('active');
    current.style.display = 'none';
    document.querySelector(prev).classList.add('active');
    document.querySelector(prev).removeAttribute('style');
    keyboardCall(prev);
  }
  if( parseInt(current.getAttribute('page')) - 1 == 1){
    hide_prev_button();
  } else {
    show_prev_button();
  }
}



function keyboardCall(tela) {
  hide_button();
  hideAllKeyboards();
  switch (tela) {
    case '[page="1"]':
      break;
    case '[page="2"]':
      document.getElementById('conta').focus()
      break;
    case '[page="5"]':
      calculadoraResultado();
      // setTimeout(() => {
      //   showCustomNext();
      // }, 3000);
      break;
    case '[page="6"]':
      break;
    case '[page="7"]':
      document.querySelector('.v-keyboard').style.top="70%";
      document.querySelector('.v-keyboard-tel').style.top="70%";
      document.querySelector('.v-keyboard-email').style.top="70%";
      document.getElementById('nome_user').focus()
      break;
    case '[page="8"]':
      // keyboard();
      document.getElementById('prev').style.display = 'none';
      document.getElementById('next').style.display = 'none';
      
      break;
    case '[page="9"]':
      document.getElementById('prev').style.display = 'none';
      document.getElementById('next').style.display = 'none';
      
      break;
    case '[page="11"]':
      document.getElementById('prev').style.display = 'none';
      document.getElementById('next').style.display = 'none';
      
      break;
    default:
      break;
  }
}

function reset() {
  buildPacoteEnviar();
  window.location.reload();
}

function calculadoraResultado() {
  let e = responses;
  let t = estados_uf.find((t, a) => {
    if (e[1].toLocaleLowerCase() == t.nome.toLocaleLowerCase()) return !0;
  });
  let a = tarifas.find((e, a) => {
    if (e.uf == t.uf) return !0;
  });
  for (const s in a) {
    if (Object.hasOwnProperty.call(a, s)) {
      const t = a[s];
      if(a[s] == ''){
        a[s] = 0
      }
    }
  }
  let o = math.evaluate(`${a.tarifa_base}/(1-${a.ICMS}-${a.PIS}-${a.COFINS})`);
  let r = 0;
  let l = [];
  for (const e in hsp)
    if (Object.hasOwnProperty.call(hsp, e)) {
      const t = hsp[e];
      r = math.evaluate(`${r}+${t.media.replace(',', '.')}`);
    }

  for (const e in tarifas)
    if (Object.hasOwnProperty.call(tarifas, e)) {
      const t = tarifas[e];
      l.push(t.tarifa_simulador);
    }
  l = math.mean(l);
  r /= hsp.length;
  
  let n = (math.evaluate(`${e[2].replace('R$','').replace(',','.').trim()}/${o}`) - 0 / o) / (0.85 * r * 30),
    c = Math.ceil((1e3 * n) / 335),
    s = (335 * c) / 1e3,
    i = (335 * c * r * 0.85 * 30) / 1e3,
    d = (12 * i * o).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }),
    _ = (680 * r * 0.85 * 30) / 1e3,
    u = (1360 * r * 0.85 * 30) / 1e3,
    y = math.evaluate(`${e[2].replace('R$','').replace(',','.').trim()} / ${o}`),
    m = Math.ceil(y / _) < 1 ? 1 : Math.ceil(y / _),
    v = Math.ceil(y / u) < 1 ? 1 : Math.ceil(y / u),
    p = [];
    
  for (let e = 0; e <= 25; e++) {
    let t;
    (t =
      0 == e
        ? {
            ano: e,
            credito_carbono_acc: 0,
            custo_kwh: 0,
            econo_acc: 0,
            economia_gerada_burguer: 0,
            ger_acc_ener: 0,
            ger_anual_ener: 0,
            reajuste_med_anual_ener_sem_infla: 0,
            rendimento_painel: 0,
            retorno_invest: math.evaluate(`-3170.9 * ${m}`),
          }
        : 1 == e
        ? {
            ano: e,
            rendimento_painel: 0.975,
            ger_anual_ener: math.evaluate(`(${i}*12)*0.975`),
            ger_acc_ener: math.evaluate(`(${i}*12)*0.975`),
            reajuste_med_anual_ener_sem_infla: 0,
            custo_kwh: o,
            economia_gerada_ano: math.evaluate(`${o}*((${i}*12)*0.975)`),
            econo_acc: math.evaluate(`${o}*((${i}*12)*0.975)`),
            retorno_invest: math.evaluate(`${p[e - 1].retorno_invest}+(${o}*((${i}*12)*0.975))`),
            credito_carbono_acc: math.evaluate(`(((${i}*12)*0.975)*0.29)/1000`),
          }
        : {
            ano: e,
            rendimento_painel: math.evaluate(`${p[e - 1].rendimento_painel}-(0.7/100)`),
            ger_anual_ener: math.evaluate(`(${i}*12)*(${p[e - 1].rendimento_painel}-(0.7/100))`),
            ger_acc_ener: math.evaluate(`(${i}*12)*(${p[e - 1].rendimento_painel}-(0.7/100)) + ${p[e - 1].ger_acc_ener}`),
            reajuste_med_anual_ener_sem_infla: 0.09,
            custo_kwh: math.evaluate(`(${p[e - 1].custo_kwh})*(1+0.09)`),
            economia_gerada_ano: math.evaluate(`(${p[e - 1].custo_kwh})*(1+0.09)*((${i}*12)*(${p[e - 1].rendimento_painel}-(0.7/100)))`),
            econo_acc: math.evaluate(`${p[e - 1].econo_acc}+((${p[e - 1].custo_kwh})*(1+0.09)*((${i}*12)*(${p[e - 1].rendimento_painel}-(0.7/100))))`),
            retorno_invest: math.evaluate(`${p[e - 1].retorno_invest} + (${p[e - 1].econo_acc}+((${p[e - 1].custo_kwh})*(1+0.09)*((${i}*12)*(${p[e - 1].rendimento_painel}-(0.7/100)))))`),
            credito_carbono_acc: math.evaluate(`${p[e - 1].credito_carbono_acc}+(((${i}*12)*(${p[e - 1].rendimento_painel}-(0.7/100))*0.29)/1000)`),
          }),
      p.push(t);
  }
  let g = [];
  p.forEach((e) => {
    e.retorno_invest <= 1 && g.push(e.retorno_invest);
  });

  let k = p.find((e) => e.retorno_invest == Math.max.apply(null, g)).ano;

  let valor_modulos_1 = math.evaluate(`3170.9 * ${m}`);
  let valor_inst_1 = valor_instalacao_500_600.find((e) => e.qtd == m);
  let res_apre_1 = math.evaluate(`${valor_modulos_1}+${valor_inst_1.valor}`);

  let valor_modulos_2 = math.evaluate(`5560.9 * ${v}`);
  let valor_inst_2 = valor_instalacao_1200.find((e) => e.qtd == v);
  let res_apre_2 = math.evaluate(`${valor_modulos_2}+${valor_inst_2.valor}`);

  document.getElementById('res-value-1').innerText = `${d}`;
  document.getElementById('res-value-2').innerText = `Entre ${k + 1} e ${
    k + 2
  } anos`;
  document.getElementById('res-value-3').innerText = `${(2 * c).toFixed(
    2
  )} m²`.replace('.', ',');
  document.getElementById('res-value-4').innerText = `${s.toFixed(
    2
  )} kWp`.replace('.', ',');
  document.getElementById('res-value-5').innerText = `${i.toFixed(
    2
  )} kWh`.replace('.', ',');
  document.getElementById(
    'res-apresentado-1'
  ).innerHTML = `<t style="font-weight: 200;">${m} Kits Microinversores 500/600W</t><br><div class="final-result-value" style="text-align: center;width: 80%;font-weight: 700;">${res_apre_1.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}</div>`;
  document.getElementById(
    'res-apresentado-2'
  ).innerHTML = `<t style="font-weight: 200;">${v} Kits Microinversores 1200W</t><br><div class="final-result-value" style="text-align: center;width: 80%;font-weight: 700;">${res_apre_2.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })}</div>`;
}

function letItGo(e) {
  const input = document.querySelectorAll(e + ' input');
  const pNumber = document.querySelector('.active').getAttribute('page');
  let o;
  let r = -1;
  let checkLo = false;

  if (pNumber == '1') {
    return true;
  } else {
    checkLo = true;
  }

  if (input.length > 0) {
    input.forEach((e, i) => {
      o = e;
      if (e.type == 'text') {
        if (e.value != '') {
          r++;
          if (input.length > 1) {
            responses[pNumber][i] = e.value;
          } else {
            responses[pNumber] = e.value;            
          }
        }
      } else if (e.type == 'checkbox') {
        if (e.checked) {
          r++;
          if (input.length > 1) {
            responses[pNumber][i] = 'pode';
          } else {
            responses[pNumber] = 'pode';
            responses[pNumber] = 'pode';
          }
        } else {
          if (input.length > 1) {
            responses[pNumber][i] = 'naopode';
          } else {
            responses[pNumber] = 'naopode';
          }
        }
      }
    });
  } else if (input.length <= 0) {
    if (pNumber == '3') {
      if (responses[pNumber] == '') {
        return false;
      } else {
        return true;
      }
    } else if (pNumber == '4') {
      if (responses[pNumber] == '') {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
  if (r == input.length - 1 && checkLo) {
    return true;
  } else {
    if (input.length > 0) {
      input.forEach((o, i) => {
        o.classList.add('alert-me');
      });
      return false;
    } else {
      return false;
    }
  }
}

function animate_atendente(){
  let number = 000;
  let loo = setInterval(() => {
    if(number<10){
      number = '00'+number
    } else if(number<100){
      number = '0'+number
    } 
    document.querySelector('.person-icon img').setAttribute('src',`./img/atendente_seq/ATENTENTE LOOP${number}.webp`)
    number++
    if(number == 300){
      clearInterval(loo);
      animate_atendente()
    }
  }, 30);
  
}

function show_hand(top,right){
  if(document.querySelector('#like-hand').hasAttribute('style') && document.querySelector('#like-hand').getAttribute('style').includes("display: none")){
    document.querySelector('#like-hand').style.display = "block";
    document.querySelector('#like-hand').style.top = top;
    document.querySelector('#like-hand').style.right = right;
    anime({
      targets: '#like-hand',
      translateX: [-250,0],
      opacity:[0,1],
      rotate:['50deg','-5deg']
    });
    playAudio()
  }
}

function hide_hand(){
  document.querySelector('#like-hand').style.display = "none";
}

function show_button(bottom = null){
  // document.getElementById('next').classList.add('bright');
  // document.getElementById('next').removeAttribute('style')
  // document.querySelector('.next-btn-large').removeAttribute('style');
  // if(bottom){
  //   document.querySelector('.next-btn-large').style.bottom = bottom;
  // }
}

function hide_button(){
  // document.getElementById('next').classList.remove('bright');
  document.querySelector('.next-btn-large').style.display='none'
}

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

function respondeEstado(e){
  responses[1] = e.value
  show_hand('22%','5%');
  // show_button();
  setTimeout(() => {
    nextPage();
  }, 1300);
}

function showCustomNext(){
  document.querySelector('#custom-next').removeAttribute('style');
  anime({
    targets: '#custom-next',
    opacity:[0,1],
  });
}

function hide_custom_next(){
  document.querySelector('#custom-next').style.display = "none";
}

function show_prev_button(){
  document.querySelector('#prev').removeAttribute('style')
}

function hide_prev_button(){
  document.querySelector('#custom-next').style.display = "none";
}