let btnAdd = document.querySelector("#add");
let btnShow = document.querySelector("#show");
let countTasks = 0;

//Добавление задания
$("#add").on("click", function() {
    $("#task-added").fadeIn();

    //исчезновение
    setTimeout(function() {
        $("#task-added").fadeOut();
    }, 2000);
});

btnShow.onclick = function () {
    let form = document.querySelector("#task-form");

    countTasks++;

    let newTask = "<div class='tasks'>" +
        "<p class='mess'>" + "Задание №" + countTasks + ": " +  form.task.value + "</p>" +
        "</div>";

        document.querySelector("#task-shown").insertAdjacentHTML('beforeend', newTask);

        //Очистка поля
        form.task.value = "";
};

