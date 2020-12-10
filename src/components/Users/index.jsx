
const heroku = `https://expressbackkav.herokuapp.com/users`;

const getUser = token => request(heroku, {
  headers: { authorization: `Bearer ${token}` },
});

function request(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      const error = new Error("HTTP Error");
      error.status = response.status;
      throw error;
    } else {
      return response.json();
    }
  });
}


export default getUser;
