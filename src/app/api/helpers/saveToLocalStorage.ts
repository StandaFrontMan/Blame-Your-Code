import { ITokenResponse } from "@/app/modules/Auth/infrastructureBeta/ITokenResponse";

export default async function saveToLocalStorage(token: string) {
  try {
    // Пытаемся сохранить токен в localStorage
    localStorage.setItem("authToken", token);
    console.log("Токен успешно сохранен в localStorage");
  } catch (error) {
    console.error("Ошибка при сохранении токена в localStorage:", error);
  }
}
