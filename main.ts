
// Ініціалізація додатку, підключення всіх модулів
import { SELECTORS, MESSAGES } from "./src/config/constants";
import { userService } from "./src/services/userService";
import { store } from "./src/state/store";
import { renderUsers } from "./src/components/userCard";
import { handleCreateUser } from "./src/handlers/formHandlers";
import { handleContainerClick } from "./src/handlers/userHandlers";

// DOM елементи
const createUserForm = document.querySelector<HTMLFormElement>(
    SELECTORS.createForm
);
const usersContainer = document.querySelector<HTMLElement>(
    SELECTORS.usersContainer
);
const editDialog = document.querySelector<HTMLDialogElement>(
    SELECTORS.editDialog
);


// Ініціалізація додатку
const initApp = async (): Promise<void> => {
    if (!createUserForm || !usersContainer || !editDialog) {
        console.error("Required DOM elements not found!");
        return;
    }

    try {
        // Завантажити користувачів
        const users = await userService.getAll();
        store.setUsers(users);

        // Підписатися на зміни стану
        store.subscribe((users) => {
            renderUsers(users, usersContainer);
        });

        // Відобразити користувачів
        renderUsers(users, usersContainer);

        // Додати слухачів подій
        createUserForm.addEventListener("submit", (e) =>
            handleCreateUser(e as SubmitEvent, createUserForm)
        );

        usersContainer.addEventListener("click", (e) =>
            handleContainerClick(e as MouseEvent, editDialog)
        );

        console.log("✅ Додаток успішно ініціалізовано!");
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error(MESSAGES.ERROR_FETCH, errorMessage);
        alert(MESSAGES.ERROR_FETCH);
    }
};

initApp();