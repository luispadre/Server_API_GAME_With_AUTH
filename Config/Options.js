const OptionsGenerate = ({ path }) => {
  return {
    method: "GET",
    url: `https://api.rawg.io/api/${path}`,
    // "headers": {
    //     "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    //     "x-rapidapi-key": "29c17e2de4msh444cb6aa38efb5bp1be984jsna76ca91b5f3f"
    // }
  };
};

module.exports = { OptionsGenerate };
