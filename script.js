const operators = ["+", "-", "*", "/"];
const operatorsDot = ["+", "-", "*", "/", "."];
const noLeft = [0, "."];
let clear = null;

const getPanel = () => document.getElementById("panel-text").innerHTML;

const setPanelNum = (num) =>
  (document.getElementById("panel-text").innerHTML = num);

const setPanelContentNum = (content, num) => {
  content.length < 10
    ? (document.getElementById("panel-text").innerHTML = content + num)
    : console.log("excedeu");
};

const setPanelWithFunction = (funcao) =>
  (document.getElementById("panel-text").innerHTML = funcao);

//LIMPAR//////////////////////////////////////////////////////////////////////////////
const clean = () => (document.getElementById("panel-text").innerHTML = "");

//INSERIR/////////////////////////////////////////////////////////////////////////////
const insert = (num) => {
  let content = getPanel();
  clear ? (content = "") : null;
  clear = false;
  
  content === ""
    ? operators.includes(num) || noLeft.includes(num)
      ? null
      : setPanelNum(num)
    : operatorsDot.includes(content.slice(-1))
    ? operators.includes(num) || noLeft.includes(num)
      ? null
      : setPanelContentNum(content, num)
    : setPanelContentNum(content, num);
};

//CALCULAR////////////////////////////////////////////////////////////////////////////
const calcular = () => {
  clear = true;
  const content = getPanel();
  operators.includes(content.slice(-1))
    ? null
    : content
    ? setPanelWithFunction(eval(content))
    : null;
};
