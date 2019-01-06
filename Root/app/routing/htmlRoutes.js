var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(peopleWhoTakenSurvey);
    });



    app.post("/api/friends", function (req, res) {
        friends.peopleWhoTakenSurvey.push(req.body);
        var person = req.body;

         /*friends.peopleWhoTakenSurvey.push({
             name : "Lina",
             pic :  "https://i.pinimg.com/originals/3b/2a/b2/3b2ab2f81920d40f26b08250d9a804de.jpg",
             answers : [1,1,1]
         });
      
         friends.peopleWhoTakenSurvey.push({
            name  : "Lyralei",
            pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7O2RnQt0xLAXjWuVoNcWeJjg_S9roIkK9nGJNSYsty_niOGANA"
            ,answers : [1,2,1] 
         });
         friends.peopleWhoTakenSurvey.push({
             name : "Leslie",
             pic :  "https://allstarbio.com/wp-content/uploads/2017/08/Leslie-Knipfing-photos-Bio-Net-worth-Height-Body-Girlfriend-Affair-Married-Ethnicity.jpg",
             answers : [5,5,5]
         });
         var person = friends.peopleWhoTakenSurvey[0];*/

        var mostSimilar = friends.evaluate(person);
        if (mostSimilar !== false) {
            console.log(mostSimilar.name + " is most simiar to " + person);
            res.send({
                response: true,
                person1: person,
                person2: mostSimilar
            })
        } else {

            res.send({
                response: false
            });
        }

    });
};

