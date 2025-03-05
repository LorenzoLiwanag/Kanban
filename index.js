const toDoList = document.querySelector("#toDo-List");
const toDoInput = document.querySelector("#add-toDo-item");
const toDoAddBtn = document.querySelector("#add-toDo-btn");
const inProgressList = document.querySelector("#in-progress-list");
const completedList = document.querySelector("#completed-list");

toDoAddBtn.addEventListener("click", () => {
    const item = toDoInput.value + ' ';
    toDoInput.value = '';
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtnMove = document.createElement("button");
    const listBtnDelete = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = item;
    listItem.appendChild(listBtnMove);
    listBtnMove.textContent = "Start";
    listItem.appendChild(listBtnDelete);
    listBtnDelete.textContent = "Delete";

    toDoList.appendChild(listItem);

    listBtnDelete.addEventListener("click", () => {
        toDoList.removeChild(listItem);
    })

    listBtnMove.addEventListener("click", () => {
        const inProgressListItem = document.createElement("li");
        const inProgressListText = document.createElement("span");
        const markCompletedBtn = document.createElement("button");
        const inProgressListBtnDelete = document.createElement("button");

        inProgressListItem.appendChild(inProgressListText);
        inProgressListText.textContent = item;
        inProgressListItem.appendChild(markCompletedBtn);
        markCompletedBtn.textContent = "Completed";
        inProgressListItem.appendChild(inProgressListBtnDelete);
        inProgressListBtnDelete.textContent = "Remove";

        inProgressList.appendChild(inProgressListItem);
        toDoList.removeChild(listItem);


        inProgressListBtnDelete.addEventListener("click", () => {
            inProgressList.removeChild(inProgressListItem);
            toDoList.appendChild(listItem);
        })

        markCompletedBtn.addEventListener("click", () => {
            const completedListItem = document.createElement("li");
            const completedListText = document.createElement("span");

            completedListItem.appendChild(completedListText);
            completedListText.textContent = item;

            completedList.appendChild(completedListItem);
            inProgressList.removeChild(inProgressListItem);

        })


    })
})