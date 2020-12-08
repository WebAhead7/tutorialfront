const heroku = `https://expressbackkav.herokuapp.com`;

export const getTutorials = async (setList) => {
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

export const deleteTutorials = async (id) => {
  const listUrl = `${heroku}/tutorials/${id}`;
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
