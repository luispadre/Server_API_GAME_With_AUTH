// const {functionImportant}=require("./../Helper/FunctionImportant")

const router = require("express").Router();
var request = require("request");
const { OptionsGenerate } = require("./../Config/Options");

router.route("/games").get((req, res, next) => {
    console.log(OptionsGenerate({ path: "games" }))
    request(OptionsGenerate({ path: "games" }), async (error,response,body)=> {
      if (error) throw new Error(error);
      return await res.json(
      JSON.parse(body),
      );
    });
  });

router.route("/games/:id").get((req, res, next) => {
    const {id}=req.params
    request(OptionsGenerate({ path: `games/${id}` }), async (error,response,body)=> {
      if (error) throw new Error(error);
      return await res.json(
      JSON.parse(body),
      );
    });
  });


module.exports = router;
