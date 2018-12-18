//Сумма через замыкание
function sum(a) {
    return function(b) {
        return a+b;
    }
}
//console.log(sum(5)(6));

//Функция - строковый буфер
function makeBuffer() {
    var arrString='';
     return function (string) {
         arrString=arrString+string;
         arrString=arrString+" ";
         return arrString;
    }

}
let buffer=makeBuffer();
//console.log(buffer(8));
//console.log(buffer("мир"));

//Строковый буфер с очисткой
buffer.clear=function () {
    arrstring="";
};
//console.log(buffer.clear());
//Армия функций
function makeArmy() {

    var shooters = [];
    for (var i = 0; i <= 10; i++) {
        var shooter = function number() {
            alert( number.i );
        };
        shooter.i=i;
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();
army[0]();
army[10]();




