let scores = [0, 0, 0, 0, 0]; //紀錄每個選項被點擊的次數
let clickTimes = [0, 0, 0, 0, 0]; //紀錄每一頁有點擊選項的次數


function recordScores(value, index){
    let valueString = value.toString();
    let indexString = index.toString();
    localStorage.setItem(index, value);
}

function recordClickTimes(value, index){
    let valueString = value.toString();
    let indexString = index.toString() + "page";
    localStorage.setItem(index, value);
}

scores.forEach(recordScores);
clickTimes.forEach(recordClickTimes);


//目前沒有問題……理論上