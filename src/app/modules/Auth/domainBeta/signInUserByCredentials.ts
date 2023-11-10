// export default async function signInUserByCredentials(
//   email: string,
//   password: string
// ) {
//   const response = await fetch(
//     `${process.env.SERVER_URL_BASE}/Account/SignIn`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         // Преобразуйте объект в JSON-строку
//         email: email,
//         password: password,
//       }),
//     }
//   );

//   const data = await response.json();

//   console.log(data);

//   return data;
// }
