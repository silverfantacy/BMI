var result = document.querySelector('#btn');
var list = document.querySelector('.list');
var data = JSON.parse(localStorage.getItem('bmiData')) || [];

updateList(data);


function resultBMI() {
    var height = parseInt(document.querySelector('.height').value);
    var weight = parseInt(document.querySelector('.weight').value);
    var resultData = weight / (height * height / 10000);
    resultData = resultData.toFixed(2);
    // var resultData =20;
    var addHtml = document.querySelector('#btn');
    // 理想
    var resultAnserIdeal =
        '<div class="result ideal">' +
        '<p>' + resultData + '<br/><span>BMI</span></p>' +
        '<span class="loop"></span>' +
        '</div>' +
        '<p class="idealcolor text">理想</p>';
    // 過輕
    var resultAnserLight =
        '<div class="result light">' +
        '<p>' + resultData + '<br/><span>BMI</span></p>' +
        '<span class="loop"></span>' +
        '</div>' +
        '<p class="lightcolor text ">過輕</p>';
    // 過重
    var resultAnserOver =
        '<div class="result over">' +
        '<p>' + resultData + '<br/><span>BMI</span></p>' +
        '<span class="loop"></span>' +
        '</div>' +
        '<p class="overcolor text">過重</p>';
    // 輕度肥胖
    var resultAnserMedium1 =
        '<div class="result medium">' +
        '<p>' + resultData + '<br/><span>BMI</span></p>' +
        '<span class="loop"></span>' +
        '</div>' +
        '<p class="mediumcolor text">輕度肥胖</p>';
    // 中度肥胖
    var resultAnserMedium2 =
        '<div class="result medium">' +
        '<p>' + resultData + '<br/><span>BMI</span></p>' +
        '<span class="loop"></span>' +
        '</div>' +
        '<p class="mediumcolor text">中度肥胖</p>';
    // 重度肥胖
    var resultAnserHeavy =
        '<div class="result heavy">' +
        '<p>' + resultData + '<br/><span>BMI</span></p>' +
        '<span class="loop"></span>' +
        '</div>' +
        '<p class="heavycolor text">重度肥胖</p>';

    if (18.5 <= resultData && resultData < 24) {
        addHtml.innerHTML = resultAnserIdeal;
    }
    if (18.5 > resultData) {
        addHtml.innerHTML = resultAnserLight;
    }
    if (24 <= resultData) {
        addHtml.innerHTML = resultAnserMedium1;
    }
    if (27 <= resultData && resultData < 30) {
        addHtml.innerHTML = resultAnserMedium2;
    }
    if (30 <= resultData) {
        addHtml.innerHTML = resultAnserHeavy;
    }

}

function addData() {
    var color = document.querySelector('#btn .text').textContent;
    var height = parseInt(document.querySelector('.height').value);
    var weight = parseInt(document.querySelector('.weight').value);
    var resultData = weight / (height * height / 10000);
    resultData = resultData.toFixed(2);
    // var now = new Date().toLocaleDateString();
    var d=new Date()
    var day=d.getDate()
    var month=d.getMonth() + 1
    var year=d.getFullYear()
    var now = month+'-'+day+'-'+year;
    // console.log(now);
    var Ldata = {
        Color: color,
        BMI: resultData,
        kg: weight,
        cm: height,
        time: now
    };
    // console.log(Ldata);
    data.push(Ldata);
    updateList(data);
    localStorage.setItem('bmiData', JSON.stringify(data));
}

function updateList(items) {
    var str = '';
    var len = items.length;
    console.log(len);
    for (var i = 0; i < len; i++) {
        switch (items[i].Color) {
            case '理想':
                str += '<li>' +
                    '<p class="txt-result-i">' + items[i].Color + '</p>' +
                    '<p class="txt-bmi">' + items[i].BMI + '</p>' +
                    '<p class="txt-kg">' + items[i].kg + 'kg</p>' +
                    '<p class="txt-cm">' + items[i].cm + 'cm</p>' +
                    '<p class="txt-date">' + items[i].time + '</p>' +
                    '</li>';
                break;
            case '過輕':
                str += '<li>' +
                    '<p class="txt-result-l">' + items[i].Color + '</p>' +
                    '<p class="txt-bmi">' + items[i].BMI + '</p>' +
                    '<p class="txt-kg">' + items[i].kg + 'kg</p>' +
                    '<p class="txt-cm">' + items[i].cm + 'cm</p>' +
                    '<p class="txt-date">' + items[i].time + '</p>' +
                    '</li>';
                break;
            case '過重':
                str += '<li>' +
                    '<p class="txt-result-o">' + items[i].Color + '</p>' +
                    '<p class="txt-bmi">' + items[i].BMI + '</p>' +
                    '<p class="txt-kg">' + items[i].kg + 'kg</p>' +
                    '<p class="txt-cm">' + items[i].cm + 'cm</p>' +
                    '<p class="txt-date">' + items[i].time + '</p>' +
                    '</li>';
                break;
            case '輕度肥胖':
                str += '<li>' +
                    '<p class="txt-result-m">' + items[i].Color + '</p>' +
                    '<p class="txt-bmi">' + items[i].BMI + '</p>' +
                    '<p class="txt-kg">' + items[i].kg + 'kg</p>' +
                    '<p class="txt-cm">' + items[i].cm + 'cm</p>' +
                    '<p class="txt-date">' + items[i].time + '</p>' +
                    '</li>';
                break;
            case '中度肥胖':
                str += '<li>' +
                    '<p class="txt-result-m">' + items[i].Color + '</p>' +
                    '<p class="txt-bmi">' + items[i].BMI + '</p>' +
                    '<p class="txt-kg">' + items[i].kg + 'kg</p>' +
                    '<p class="txt-cm">' + items[i].cm + 'cm</p>' +
                    '<p class="txt-date">' + items[i].time + '</p>' +
                    '</li>';
                break;
            case '重度肥胖':
                str += '<li>' +
                    '<p class="txt-result-h">' + items[i].Color + '</p>' +
                    '<p class="txt-bmi">' + items[i].BMI + '</p>' +
                    '<p class="txt-kg">' + items[i].kg + 'kg</p>' +
                    '<p class="txt-cm">' + items[i].cm + 'cm</p>' +
                    '<p class="txt-date">' + items[i].time + '</p>' +
                    '</li>';
                break;
        }

        // str += '<li>'+
        //             '<p class="txt-result-i">'+items[i].Color+'</p>'+
        //             '<p class="txt-bmi">'+items[i].BMI+'</p>'+
        //             '<p class="txt-kg">'+items[i].kg+'kg</p>'+
        //             '<p class="txt-cm">'+items[i].cm+'cm</p>'+
        //             '<p class="txt-date">'+items[i].time+'</p>'+
        //         '</li>';
    }
    list.innerHTML = str;

}









result.addEventListener('click', resultBMI, false);
result.addEventListener('click', addData, false);