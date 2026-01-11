// API URL, селектори, текстові повідомлення

// API конфігурація 
export const API_CONFIG = {
    BASE_URL: "https://6962fd062d146d9f58d279ae.mockapi.io/User"
} as const;

// Слектори DOM елементів 
export const SELECTORS = {
    createForm: "[data-create-user-form]",
    usersContainer: "[data-users-container]",
    editDialog: "[data-edit-user-form-dialog]",
    removeBtn: "data-user-remove-btn",
    editBtn: "data-user-edit-btn",
} as const;

// Повідомлення
export const MESSAGES = {
    SUCCESS_CREATE: "НОВИЙ КОРИСТУВАЧ УСПІШНО СТВОРЕНИЙ",
    SUCCESS_EDIT: "КОРИСТУВАЧ УСПІШНО РЕДАГОВАНИЙ",
    SUCCESS_DELETE: "КОРИСТУВАЧ УСПІШНО ВИДАЛЕНИЙ",
    CONFIRM_DELETE: "Ви дійсно хочете видалити цього користувача?",
    ERROR_CREATE: "ПОМИЛКА при створенні користувача",
    ERROR_EDIT: "ПОМИЛКА при редагуванні користувача",
    ERROR_DELETE: "ПОМИЛКА при видаленні користувача",
    ERROR_FETCH: "ПОМИЛКА при завантаженні користувачів"
} as const;

// Валітація
export const VALIDATION = {
    NAME_MIN: 2,
    NAME_MAX: 23,
    CITY_MIN: 2,
    CITY_MAX: 20
} as const;