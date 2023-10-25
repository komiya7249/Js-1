//const dispTime = document.getElementById("displyTime");
const hours = document.getElementById("hours");
const minutes =document.getElementById("minutes");
const seconds =document.getElementById("seconds");
const milli =document.getElementById("milli");
const start = document.getElementById("startButton");
const stop = document.getElementById("stopButton");
const reset = document.getElementById("resetButton");

let startTime ;
let stopTime = 0;
let interval;

function nowDispTime(){
  const nowTime = new Date(Date.now() - startTime + stopTime);
  const h = String(nowTime.getHours()-9);//.padStart(2,"0");
  const m = String(nowTime.getMinutes());//.padStart(2,"0");
  const s = String(nowTime.getSeconds());//.padStart(2,"0");
  const f = String(nowTime.getMilliseconds()).padStart(3,"0").slice(0,1);
  
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
  milli.textContent = f;
  //dispTime.textContent=`${h}:${m}:${s}:${f}`;
};

function startButton(){
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
  startTime = Date.now();
  interval = setInterval(nowDispTime,100);
};

function stopButton(){
  stopTime = Date.now()+stopTime;
  stopTime= stopTime-startTime;
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  clearInterval(interval);
};

function resetButton(){
  stopTime = 0;
  start.disabled = false;
  stop.disabled = false;
  stop.disabled = false;
  hours.textContent = "0";
  minutes.textContent = "0";
  seconds.textContent = "0";
  milli.textContent = "0";
  clearInterval(interval);
};

