// https://www.omnicalculator.com/chemistry/water-hardness

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const waterhardnessRadio = document.getElementById('waterhardnessRadio');
const calciumcontentRadio = document.getElementById('calciumcontentRadio');
const magnesiumcontentRadio = document.getElementById('magnesiumcontentRadio');

let waterhardness;
let calciumcontent = v1;
let magnesiumcontent = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

waterhardnessRadio.addEventListener('click', function() {
  variable1.textContent = 'Calcium content';
  variable2.textContent = 'Magnesium content';
  calciumcontent = v1;
  magnesiumcontent = v2;
  result.textContent = '';
});

calciumcontentRadio.addEventListener('click', function() {
  variable1.textContent = 'Water hardness';
  variable2.textContent = 'Magnesium content';
  waterhardness = v1;
  magnesiumcontent = v2;
  result.textContent = '';
});

magnesiumcontentRadio.addEventListener('click', function() {
  variable1.textContent = 'Water hardness';
  variable2.textContent = 'Calcium content';
  waterhardness = v1;
  calciumcontent = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(waterhardnessRadio.checked)
    result.textContent = `Water hardness = ${computeWaterhardness().toFixed(2)}`;

  else if(calciumcontentRadio.checked)
    result.textContent = `Calcium content = ${computeCalciumcontent().toFixed(2)}`;

  else if(magnesiumcontentRadio.checked)
    result.textContent = `Magnesium content = ${computeMagnesiumcontent().toFixed(2)}`;
})

// calculation

// Hardness = 2.497 (Ca) + 4.118 (Mg)

function computeWaterhardness() {
  return 2.497 * Number(calciumcontent.value) + 4.118 * Number(magnesiumcontent.value);
}

function computeCalciumcontent() {
  return (Number(waterhardness.value) - 4.118 * Number(magnesiumcontent.value)) / 2.497;
}

function computeMagnesiumcontent() {
  return (Number(waterhardness.value) - 2.497 * Number(calciumcontent.value)) / 4.118;
}