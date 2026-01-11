// Рендеринг карток користувачів
import type { User } from "../types/user.types";

// Створити HTML картки користувача
export const createUserCardHTML = (user: User): string => {
    return `
        <div class="user-card">
            <h3>${user.name}</h3>
            <p>City: ${user.city}</p>
            <span>Email: ${user.email}</span>
            <img src="${user.avatar}"/>
            <button class="user-edit-btn" data-user-id="${user.id}" data-user-edit-btn>🛠️</button>
            <button class="user-remove-btn" data-user-id="${user.id}" data-user-remove-btn>❌</button>
        </div>
    `;
};

// Відобразити всіх користувачів
export const renderUsers = (users: User[], container: HTMLElement): void => {
    container.innerHTML = "";
    users.forEach(user => {
        container.insertAdjacentHTML("beforeend", createUserCardHTML(user));
    });
};