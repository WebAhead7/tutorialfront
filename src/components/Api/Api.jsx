const heroku = `https://expressbackkav.herokuapp.com`;

export const getTutorials = async (setList) => {
  const listUrl = `${heroku}/tutorials`;
  try {
    const data = await fetch(listUrl);
    const list = await data.json();
    setList(list);
    // console.log(list);
  } catch (e) {
    console.log(e);
  }
};
