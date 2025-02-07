const tasks = [];

const taskList = document.querySelector("#task-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

function handleTaskAction(e) {
    const taskItem = e.target.closest(".task-item");
    const taskIndex = +taskItem.getAttribute("task-index");
    const task = tasks[taskIndex];

    if (e.target.closest(".edit")) {
        let newTitle = prompt("Nhập công việc cần sửa:", task.title);

        if (newTitle === null) return;

        newTitle = newTitle.trim();

        if (newTitle) {
            task.title = newTitle;
        }
        render();
        return;
    }

    if (e.target.closest(".done")) {
        task.complete = !task.complete;
        render();
    }

    if (e.target.closest(".delete")) {
        if (confirm(`Bạn có muốn xóa công việc ${task.title} không? `)) {
            tasks.splice(taskIndex, 1);
            render();
        }
    }
}

function addTasks(e) {
    e.preventDefault();

    const value = todoInput.value.trim();

    if (!value) {
        return alert("Cần nhập tên công việc!");
    }

    tasks.push({
        title: value,
        complete: false,
    });

    render();
    todoInput.value = "";
}

function render() {
    const html = tasks
        .map(
            (task, index) =>
                `<li class="task-item" task-index = "${index}">
             <span class="task-title ${task.complete ? "complete" : ""}">${
                    task.title
                }</span>
             <div class="task-action">
                  <button class="task-btn edit">Sửa</button>
                  <button class="task-btn done">${
                      task.complete ? "Chưa hoàn thành" : "Hoàn thành"
                  }</button>
                  <button class="task-btn delete">Xóa</button>
             </div>
         </li>`
        )
        .join("");

    taskList.innerHTML = html;
}

todoForm.addEventListener("submit", addTasks);
taskList.addEventListener("click", handleTaskAction);
render();
