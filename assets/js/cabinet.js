// занесення інпутів в змінні
let paraResult = document.querySelector(".calcResult");

function persNum() {
  let persNum = document.querySelector('.persNum').value;
  return Number(persNum);
}

function operNum() {
  let operNum = document.querySelector('.operNum').value;
  return Number(operNum);
}
// Зансеня у масив вибрані чек-бокси
function getChecked() {
  var checkboxes = document.getElementsByName('calcCheck');
  var checked = [];
  for (var index = 0; index < checkboxes.length; index++) {
     if (checkboxes[index].checked) {
        checked.push(checkboxes[index].value);

     }
  }
  return checked;
}

// Заносим выбраний радіо в функцію
function radio() {
    var rad=document.getElementsByName('radio');
    for (var i=0;i<rad.length; i++) {
        if (rad[i].checked) {
          let checkedRadio = rad[i].value
          return checkedRadio;
        }
    }
    ;
}

// Підрахунок вартості
function calc(radio, checked, pers, oper){
  let checkedSum = Number(checked.reduce((a,b) => Number(a) + Number(b)))
   + (Number(pers) * 300) + (Number(oper) * 15) + Number(radio);
  paraResult.textContent = `Вартість: ${checkedSum}`;
};

function onlyOne(checkbox) {
  document.getElementsByName(checkbox.calcCheck).forEach(n => {
    n.checked = n === checkbox ? n.checked : false;
  });
}
// Відображання необхідного контенту

var calculator = document.getElementById('calculator');
var documents = document.getElementById('documents');
