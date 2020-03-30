

const router = require("express").Router();
var request = require("request");

router.route("/").get((req, res, next) => {
// axios.get(`https://notification-test-luis.herokuapp.com/?token=${token}&data=${data}`).then(axiosResponse=>{
    const component= req.query.component
    const subcomponent= req.query.subcomponent
    console.log(`componente${component} subcomponent${subcomponent}`)
    return res.json({
        componente:component,
        subcomponent:subcomponent
    })
});

module.exports = router;
