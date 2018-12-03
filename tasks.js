'use strict';
            //Массивы с числовыми индексами
//Получить последний элемент массива
function leng() {
    let goods = [5, 6, 7, 8, 9];
    let a = goods[goods.length - 1];
    return a;
}
//console.log(leng());
//Добавить новый элемент в массив
function pushArray() {
    let goods=["привет","солнце"];
    goods.push("компьютер");
    return goods;
}
//console.log(pushArray());
/*Задача из 5 шагов-строк:
    Создайте массив styles с элементами «Джаз», «Блюз».
    1-Добавьте в конец значение «Рок-н-Ролл»
    2-Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
    3-Удалите первое значение массива и выведите его alert.
    4-Добавьте в начало значения «Рэп» и «Регги».*/
function ArrayStyles() {
    let styles=["Джас","Блюз"];
    styles.push("Рок-н-Ролл");
    styles[styles.length-2]="Классика";
    styles.shift();
    styles.unshift("Рэп» и «Регги");
    return styles;
}
//console.log(ArrayStyles());
                       //Массивы: методы
//Добавить класс в строку
let obj={
    className: 'menu menu menu open'
};
function addClass(obj, cls){
    let arr=obj.className.split(' ');
    for(let i=0;i<arr.length;i++) {
        if (arr[i] === cls) {
            return obj.className;
        }
    }
    arr.push(cls);
    obj.className=arr.join(' ');
    return obj.className;

}
//console.log(addClass(obj,"m"));
//Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
function removeClass(obj, cls){
    let arr=obj.className.split(' ');
    for(let i=0;i<arr.length;i++) {
        if (arr[i] === cls) {
            arr.splice(i,1);
            i--;
        }
    }

    obj.className=arr.join(' ');
    return obj.className;
}
//console.log(removeClass(obj,"menu"));
//Сортировать в обратном порядке
function sortArrey() {
    let a=[1,6,1,9,4,3];
    function number (a, b) {
        return b-a;
    }
    a.sort(number);
    return a;
}
//console.log(sortArrey());
//Есть массив строк arr.
// Создайте массив arrSorted – из тех же элементов, но отсортированный.
function sortStr() {
    let arr=["HTML", "JavaScript", "CSS"];
    let arrSorted =arr.slice().sort();
    return arrSorted;
}
//console.log(sortStr());
//Напишите код, который отсортирует массив объектов people по полю age.
function sortObj() {
    function SortAge(a,b){
        return a.age - b.age;
    }
    var vasya = {name: "Вася", age: 23};
    var masha = {name: "Маша", age: 18};
    var vovochka = {name: "Вовочка", age: 6};
    var people = [vasya, masha, vovochka];
    people.sort(SortAge);
}
//console.log(sortObj());
//Вывести односвязный список
var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
//Напишите функцию printList(list),
// которая выводит элементы списка по очереди, при помощи цикла.
function printList1(list){
    while(list.next!==null){
        alert(list.value);
       list = list.next;
    }
    
}
//console.log(printList1(list));
//Напишите функцию printList(list) при помощи рекурсии.
function printList2(list){
    alert( list.value );
    if (list.next) {
        printList2(list.next);
    }
}
//console.log(printList2(list));
//Напишите функцию printReverseList(list),
// которая выводит элементы списка в обратном порядке,
// при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
     return list.value;
}
//console.log(printReverseList(list));
//Сделайте вариант , использующий не рекурсию, а цикл.
function printReverseList2(list) {
    let arr=[];
    let n=0;
    while (list) {
        arr[n] = list.value;
        n++;
        list = list.next;
    }
    alert(arr.reverse());
}
//console.log(printReverseList2(list));
                   //Массив: перебирающие методы

//Перепишите цикл через map
function  recordMap() {

    let arr = ["Есть", "жизнь", "на", "Марсе"];

    let arrLength = arr.map(function(i){
        return i.length;});
    return arrLength;
}
//console.log(recordMap());
                    //Map to objects
function usersMapped() {
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [ john, pete, mary ];
    let usersMapped = users.map((item)=>{
        let obj={};
        obj["fullName"]=item.name+" "+item.surname;
        obj["id"]=item.id;
        return obj;
    });
    return usersMapped;
}
//console.log(usersMapped());
                  //Еще задачи

const users = [
    { name: 'Vasya', age: 19, rate: 900 },
    { name: 'Dima', age: 18, rate: 1000 },
    { name: 'Sveta', age: 13, rate: 85 },
    { name: 'Petya', age: 14, rate: 100 },
    { name: 'Seryozha', age: 18, rate: 900 },
    { name: 'Valera', age: 14, rate: 150 }
];
//Отсортируйте массив по возрасту пользователей от меньшего к большему.
function sortArrayAge(users) {
     users.sort(nameAge);
    function nameAge(a,b) {
        return a.age-b.age;
    }

    for(let i=0;i<users.length;i++){
        alert(users[i].name);
    }
}
//console.log(sortArrayAge(users));

//Создайте массив, содержащий только имена пользователей.
function createArrayName(users) {
    let arr=users.map(function(item) {
      return item.name  ;
    });
    return arr;
}
//console.log(createArrayName(users));
//Создайте массив, содержащий только совершеннолетних пользователей.
function createArrayAge(users) {
    let arr=users.filter(function(name){
    return  name.age>=18;
   });
    for(let i=0;i<arr.length;i++){
        alert(arr[i].name);
    }
}
//console.log(createArrayAge(users));
/*Свертка
    -Найдите самого старшего.
    -Посчитайте средний возраст.
    -Сгруппируйте пользователей по возрасту.*/
function Convolution(users) {
    // Посчитайте средний возраст
    let result = users.reduce(function (sum, elem) {
        return sum + elem.age;
    }, 0);
    result = result / (users.length);
    console.log(result);
    // Найдите самого старшего
    let maxAge = users.reduce(function (max, name) {
        if (name.age > max) max = name.age;
        return max;
    }, 0);
    console.log(maxAge);
}
//console.log(Convolution(users));
function combinationAge(user) {
    //Сгруппируйте пользователей по возрасту
    let obj = {};
    for (let i = 0; i < users.length; i++) {
        if (users[i].age in obj) {
            obj[users[i].age].push(users[i]);
        }
        else {
            obj[users[i].age] = [users[i]];
        }
    }
    return obj;
}
//console.log(combinationAge(users));
/*Задачи с рейтами
    -Найдите средний рейт для каждого возраста.
    -Найдите максимальный из всех средних рейтов по возрастам.*/
function middleRate(users) {
    let obj=combinationAge(users);
    let result={};
    for(let key in obj){
        let arr=obj[key];
        arr.push(0);
        arr[arr.length-1]=arr.reduce(function (sum,a,i) {
            if(i!==arr.length-1) {
                return sum + a.rate;
            }
            return sum/(arr.length-1);
        },0);
        result[key]=arr[arr.length-1];
    }
    return result;
}
//console.log(middleRate());
function maxMiddleRate(users) {
    let obj=middleRate(users);
    console.log(obj);
    let max=0;
    for(let key in obj){
        if(obj[key]>max)max=obj[key];
    }
    return max;
}
//console.log(maxMiddleRate(users));



