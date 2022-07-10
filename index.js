// GET https://icanhazdadjoke.com/slack

const jokes = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch(`https://icanhazdadjoke.com/`, setHeader);

    const data = await res.json();

    jokes.innerHTML = data.joke;
  } catch (error) {
    console.log(err);
  }
};

jokeBtn.addEventListener("click", generateJoke);

generateJoke();
