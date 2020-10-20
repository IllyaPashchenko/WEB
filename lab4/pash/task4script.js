let input = document.getElementById("input");
let button = document.getElementById("confirm_bt");
let result_feed = document.getElementById("result");

button.addEventListener("click", function () {
    let array = createArrayRandom(input.value);
    let max = find_max_even(array);
    let min = find_min_id_even(array);
    result_feed.innerHTML += "<br>------------------------------------------"
    result_feed.innerHTML += "<br>Початковий: " + array.join(", ");
    result_feed.innerHTML += "<br>Максимальний парний: " + max;
    result_feed.innerHTML += "<br>Мінімальний з парним індексом: " + min;
    result_feed.innerHTML += "<br>Змінений: " + swap(array, max, min).join(", ");
    result_feed.innerHTML += "<br>Відсортований: " + insertion_sort(array).join(", ");
});

function createArrayRandom(amount) {
    let arr = [];
    while (arr.length < amount) {
        let r = Math.floor(Math.random() * amount * 5) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

function find_max_even(array) {
    return array.filter(i => i % 2 === 0).sort((a, b) => (b - a))[0];
}

function find_min_id_even(array) {
    return array.filter((item, index) => index % 2 === 0).sort((a, b) => (a - b))[0];
}

function swap(array, a, b) {
    let i_a = array.indexOf(a);
    let i_b = array.indexOf(b);
    array[i_a] = b;
    array[i_b] = a;
    return array;
}

function insertion_sort(array) {
    let n = array.length;
    for (let i = 1; i < n; ++i) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}