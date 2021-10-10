let userName = prompt("Кто там?");
if (userName == "Admin") {
    let pass = prompt("Введите пароль");
    if (pass == "Я главный") {
        alert("Здравствуйте");
    } else if (pass == "" || pass == null) {
        alert("Неверный пароль");
    } else {
        alert("Отмена");
    }
} else if (userName == "" || userName == null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}

