const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = [];

function renderTaskOnHtml(taskTitle, done = false) {
  const li = document.createElement("li");
  li.className =
    "flex flex-wrap items-center justify-between gap-3 py-2 px-4 border border-sky-200 shadow-sm rounded-xl bg-white w-full";

  const input = document.createElement("input");
  input.className =
    "accent-sky-500 w-5 h-5 cursor-pointer rounded focus:ring-2 focus:ring-sky-500 border-gray-300";
  input.setAttribute("type", "checkbox");
  input.addEventListener("change", (event) => {
    const liToToggle = event.target.parentElement;
    const spanToToggle = liToToggle.querySelector("span");
    const done = event.target.checked;
    if (done) {
      spanToToggle.style.textDecoration = "line-through";
    } else {
      spanToToggle.style.textDecoration = "none";
    }
    tasks = tasks.map((t) => {
      if (t.title === spanToToggle.textContent) {
        return {
          title: t.title,
          done: !t.done,
        };
      }
      return t;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  input.checked = done;

  const span = document.createElement("span");
  span.textContent = taskTitle;
  span.className =
    "text-lg font-semibold text-gray-700 min-w-0 break-words flex-1";
  if (done) {
    span.style.textDecoration = "line-through";
  }

  const button = document.createElement("button");
  button.textContent = "❌";
  button.className =
    "p-2.5 rounded-full bg-sky-500 hover:bg-sky-700 transition-all";
  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement;
    const titleToRemove = liToRemove.querySelector("span").textContent;
    tasks = tasks.filter((t) => t.title != titleToRemove);
    todoListUl.removeChild(liToRemove);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  todoListUl.appendChild(li);
}

window.onload = () => {
  const tasksOnLocalStorage = localStorage.getItem("tasks");

  if (!tasksOnLocalStorage) return;

  tasks = JSON.parse(tasksOnLocalStorage);

  tasks.forEach((t) => {
    renderTaskOnHtml(t.title, t.done);
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página ao submeter o formulário

  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert("Sua tarefa precisa ter pelo menos 3 caracteres.");
    return;
  }

  // Adicionando nova tarefa ao array de tasks
  tasks.push({
    title: taskTitle,
    done: false,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTaskOnHtml(taskTitle);

  taskTitleInput.value = "";
});
