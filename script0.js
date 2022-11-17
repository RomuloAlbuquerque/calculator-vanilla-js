const operators = ["+", "-", "*", "/"];
const operatorsDot = ["+", "-", "*", "/", "."];
const noLeft = [0, "."];
let clear = null;

//funções

const clean = () => {
  document.getElementById("panel-text").innerHTML = "";
  document.getElementById("memory").innerHTML = "";
}

//panel-text
const getPanelText = ()=> document.getElementById("panel-text").innerHTML
const setPanelText = param=> document.getElementById("panel-text").innerHTML = param

//memory
const getMemory = ()=> document.getElementById('memory').innerHTML
const setMemory = param=> document.getElementById('memory').innerHTML = param
const toMemory = ()=> setMemory(getMemory() + getPanelText()); setPanelText("")
const verifyOperator = (param, funcao)=> operators.includes(param) ? null : funcao


const insertMemory = ()=> verifyOperator(getMemory(), toMemory())

const insert = (num)=> {
  getPanelText().length < 10 ? setPanelText((getPanelText()+num)) : console.log('excedeu')
}

// const setPanelContentNum = (content, num) => {
//   content.length < 10
//     ? (document.getElementById("panel-text").innerHTML = content + num)
//     : console.log("excedeu");
// };

// const setPanelWithFunction = (funcao) =>
//   (document.getElementById("panel-text").innerHTML = funcao);

// //LIMPAR//////////////////////////////////////////////////////////////////////////////
// const clean = () => (document.getElementById("panel-text").innerHTML = "");

// //INSERIR/////////////////////////////////////////////////////////////////////////////
// const insert = (num) => {
//   let content = getPanel();
//   clear ? (content = "") : null;
//   clear = false;
  
//   content === ""
//     ? operators.includes(num) || noLeft.includes(num)
//       ? null
//       : setPanelNum(num)
//     : operatorsDot.includes(content.slice(-1))
//     ? operators.includes(num) || noLeft.includes(num)
//       ? null
//       : setPanelContentNum(content, num)
//     : setPanelContentNum(content, num);
// };

// //CALCULAR////////////////////////////////////////////////////////////////////////////
// const calcular = () => {
//   clear = true;
//   const content = getPanel();
//   operators.includes(content.slice(-1))
//     ? null
//     : content
//     ? setPanelWithFunction(eval(content))
//     : null;
// };