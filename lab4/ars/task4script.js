let input = document.getElementById("input");
let button = document.getElementById("confirm_bt");
let result_feed = document.getElementById("result");

button.addEventListener("click", function () {
    result_feed.innerHTML = "<br>____________________________________________";
    let array = createArrayRandom(input.value);
    let max = find_max(array);
    let min = find_min(array);
    let sum = find_sum(array);
    let dob = find_dob(array);
    let sort=find_sort(array);
    result_feed.innerHTML += "<br>Початковий масив: " + array.join(", ");
    result_feed.innerHTML += "<br>";
    result_feed.innerHTML += "<br>Максимальний елемент: " + max[1];
    result_feed.innerHTML += "<br>Індекс максимального елементу серед додатніх: " + max[0];
    result_feed.innerHTML += "<br>";
    result_feed.innerHTML += "<br>Мінімальний з непарним індексом: " + min[1];
    result_feed.innerHTML += "<br>Його індекс серед елементів з непарними індексами: " + min[0];
    result_feed.innerHTML += "<br>";
    result_feed.innerHTML += "<br>Сума елементів з парними індексами: " + sum;
    result_feed.innerHTML += "<br>";
    result_feed.innerHTML += "<br>Добуток від'ємних елементів: " + dob;
    result_feed.innerHTML += "<br>";
    result_feed.innerHTML += "<br>Відсортований: " + sort.join(", ");
});

function createArrayRandom(amount) {
    let arr = [];
    while (arr.length < amount) {
        let r = Math.floor(Math.random() * amount * 6) - amount*3;
        arr.push(r);
        console.log(arr);
    }
    return arr;
}

function find_max(array) {
    let a=JSON.parse(JSON.stringify(array));
    let a1 = a.filter(i => i > 0);
    let max = a.sort((a, b) => (b - a))[0];
    return [a1.indexOf(max), max];
}

function find_min(array) {
    let a=JSON.parse(JSON.stringify(array));
     let a1= a.filter((item, index) => index % 2 !== 0);
     let min = a.filter((item, index) => index % 2 !== 0).sort((a, b) => (a - b))[0];
     return [a1.indexOf(min), min];
}

function find_sort(array) {
    let a=JSON.parse(JSON.stringify(array));
    return a.sort((a, b) => (a - b)).reverse();
}

function find_sum(array) {
    let a=JSON.parse(JSON.stringify(array));
    let a1= a.filter((item, index) => index % 2 === 0);
    let sum = 0;
    a1.forEach(element => sum += element);
    return sum;
}

function find_dob(array) {
    let a=JSON.parse(JSON.stringify(array));
    let a1= a.filter(i => i < 0);
    let dob = 1;
    a1.forEach(element => dob *= element);
    return dob;
}