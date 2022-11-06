const getS = selector => document.querySelector(selector);

getS('.btn-edit').onclick = function () {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    // const content = getS('.top-block').innerHTML;
    // getS('.edit-area').value = content;
    getS('.edit-area').value = getS('.top-block').innerHTML;
}

getS('.btn-save').onclick = function () {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}

getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
})

function fontSize() {
    // console.log(event.target.value);
    getS('.top-block').style.fontSize = event.target.value;
}

let fF = document.getElementById('fontFamily');
fF.onchange = function (e) {
  
    getS('.top-block').style.fontFamily = this.value;
}

let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];
for (let i = 0; i < getS('.colors').children.length; i++) {
    getS('.colors').children[i].style.backgroundColor = colors[i];
    getS('.colors').children[i].onclick = function(){
        getS('.top-block').style.color = this.style.backgroundColor;
    }
}
let colors1 = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];
for (let i = 0; i < getS('.colors1').children.length; i++) {
    getS('.colors1').children[i].style.backgroundColor = colors1[i];
    getS('.colors1').children[i].onclick = function(){
        getS('.top-block').style.backgroundColor = this.style.backgroundColor;
    }
}




getS('.btn-text-color').onclick = function(){
    getS('.colors').classList.remove('hide');
    getS('.colors1').classList.add('hide');
}
getS('.btn-bg-color').onclick = function(){
  getS('.colors1').classList.remove('hide');
  getS('.colors').classList.add('hide');
}


/* start function bold style */

function fontWeight(){
    // console.log(event.target.checked);
    if(event.target.checked){
        getS('.top-block').classList.add('bold');
    }
    else{
        getS('.top-block').classList.remove('bold');
    }
}


/* end function bold style */
function fontCurs(){
  if(event.target.checked){
    getS('.top-block').classList.add('cursive');
}
else{
    getS('.top-block').classList.remove('cursive');
}
}

getS('.btn-add').onclick = function(){
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}

const list = document.forms['form-list'];

getS('.btn-create-list').onclick = function(){
    // console.log(list)
    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for(let i=0; i<countLi; i++){
        getS('.edit-area').value += `<li>item ${i+1}</li>`;
    }
    getS('.edit-area').value += '</ul>';
    // console.log(countLi,typeLi)

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}
const table = document.forms['form-table'];

getS('.btn-create-table').onclick = function(){
    const countTR = table.countTR.value;
    const countTD = table.countTD.value;
    const widthTD = table.widthTD.value;
    const heightTD = table.heightTD.value;
    const borderWidth = table.borderWidth.value;
    const typeBorder = table.borderType.value;
    const borderColor = table.borderColor.value;

    getS('.edit-area').value += '<table >';
    for (let i = 1; i<= countTR;i++){
      getS('.edit-area').value += '<tr ></tr>';
      for(let j = 1; j <= countTD; j++){
        getS('.edit-area').value += `<td style="width: ${widthTD}px; height: ${heightTD}px; border: ${borderWidth}px ${typeBorder} ${borderColor}">TD</td>`;

      }
    }
    getS('.edit-area').value += '</table>';
    
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}
console.log(table.style)
getS('.table').onclick = function(){
  getS('.create-table').classList.remove('hide');
  getS('.create-list').classList.add('hide');
}
getS('.list').onclick = function(){
getS('.create-list').classList.remove('hide');
getS('.create-table').classList.add('hide');
}