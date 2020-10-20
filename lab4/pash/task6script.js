let name = document.getElementById("input_name");
let surname = document.getElementById("input_surname");
let age = document.getElementById("input_age");
let date = document.getElementById("input_date");
let password = document.getElementById("input_password");
let confirm_password = document.getElementById("input_password_confirm");
let button = document.getElementById("confirm_button");
let output_div = document.getElementById("output_div");

button.addEventListener("click", function () {
    let array = [];
    output_div.textContent = "";
    console.log(date.value);
    console.log(name.value);
    if (password.value === "") {
        array.push("Поле пароль обов'язкове");
    } else {
        if (confirm_password.value === "") {
            array.push("Підтвердження пароля обов'язкове");
        } else {
            if (password.value !== confirm_password.value) array.push("Паролі мають співпадати");
        }
    }
    if (name.value.trim() === "") array.push("Поле ім'я обов'язкове");
    if (surname.value.trim() === "") array.push("Поле прізвище обов'язкове");
    if (date.value === "") array.push("Поле дата обов'язкове");

    if (array.length === 0) {
        array.push("Успіх");
    }
    output_div.textContent += array.join(", ");
});
