
const heroku = `https://expressbackkav.herokuapp.com`;

export const getTutorials = async setList => {
  const listUrl = `${heroku}/tutorials`;
  try {
    const data = await fetch(listUrl);
    // console.log(data);
    const list = await data.json();
    setList(list);
    // console.log(list);
  } catch (e) {
    console.log(e);
  }
};

export const deleteTutorials = async (id, extension) => {
  const listUrl = `${heroku}/${extension}/${id}`;
  try {
    const response = await fetch(listUrl);
    const json = await response.json();

    if (json.status === 204) {
      alert('Tutorial Deleted');
    } else if (json.status === 401) {
      alert('Unauthorized - Do not have access to delete this tutorial');
    }
  } catch (error) {
    console.log(error);
  }
};

// const heroku = `https://expressbackkav.herokuapp.com`;

// export const getTutorials = async (setList) => {
//   const listUrl = `${heroku}/tutorials`;
//   try {
//     const data = await fetch(listUrl);
//     // console.log(data);
//     const list = await data.json();
//     setList(list);
//     // console.log(list);
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const deleteTutorials = async (id) => {
//   const listUrl = `${heroku}/tutorials/${id}`;
//   try {
//     const response = await fetch(listUrl);
//     const json = await response.json();

//     if (json.status === 204) {
//       alert('Tutorial Deleted');
//     } else if (json.status === 401) {
//       alert('Unauthorized - Do not have access to delete this tutorial');
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// function request(url, options) {
//   return fetch(url, options).then((response) => {
//     if (!response.ok) {
//       const error = new Error('HTTP Error');
//       error.status = response.status;
//       throw error;
//     } else {
//       return response.json();
//     }
//   });
// }

// export function login(loginData) {
//   console.log('loginData', loginData);
//   return request(`${heroku}/log-in`, {
//     method: 'POST',
//     body: JSON.stringify(loginData),
//     headers: { 'content-type': 'application/json' },
//   });
// }

// export function getUser(id) {
//   return request(`${heroku}/users/${id}`, {
//     method: 'POST',
//     headers: { 'content-type': 'API-Key' },
//   });
// }

