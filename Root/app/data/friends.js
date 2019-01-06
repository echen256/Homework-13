/*var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});*/

/*app.get("/css", function(req,res){
    res.sendFile(path.join(__dirname,"../public/css/style.css"));
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"../public/home.html"));
});
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname,"../public/survey.html"));
});*/


/*app.get("/api/friends", function(req,res){
    res.json(this.peopleWhoTakenSurvey);
});



app.post("/api/friends", function(req,res){
   //this.peopleWhoTakenSurvey.push(req.body);
   // var person = req.body;

   this.peopleWhoTakenSurvey.push({
       name : "Lina",
       pic :  "https://i.pinimg.com/originals/3b/2a/b2/3b2ab2f81920d40f26b08250d9a804de.jpg",
       answers : [1,1,1]
   });

   this.peopleWhoTakenSurvey.push({
      name  : "Lyralei",
      pic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7O2RnQt0xLAXjWuVoNcWeJjg_S9roIkK9nGJNSYsty_niOGANA"
      ,answers : [1,2,1] 
   });
   this.peopleWhoTakenSurvey.push({
       name : "Leslie",
       pic :  "https://allstarbio.com/wp-content/uploads/2017/08/Leslie-Knipfing-photos-Bio-Net-worth-Height-Body-Girlfriend-Affair-Married-Ethnicity.jpg",
       answers : [5,5,5]
   });
   var person = this.peopleWhoTakenSurvey[0];
  
   var mostSimilar = evaluate(person);
   if (mostSimilar !== false){
        console.log( mostSimilar.name + " is most simiar to " + person);
        res.send({
            response : true,
            person1 : person,
            person2 : mostSimilar
        })
    } else {
        
    res.send({
        response : false
    });
    }
    
});
*/


var friends = {
    evaluate : function (person){
        if (this.peopleWhoTakenSurvey.length < 2) return false;
        var index = this.peopleWhoTakenSurvey.indexOf(person);
        var mostSimilarPerson = this.peopleWhoTakenSurvey[0];
        var lowestDifference = 1000;
        for (var i = 0; i < this.peopleWhoTakenSurvey.length;i++){
        
            if (i !== index){
                var score1 = person.answers;
                var score2 = this.peopleWhoTakenSurvey[i].answers;
                var diff = this.compare(score1,score2);
                if (diff < lowestDifference){
                    mostSimilarPerson = this.peopleWhoTakenSurvey[i];
                    lowestDifference = diff;
                }
            }
        }
    
        return mostSimilarPerson;
    },
    
    
    compare :function (answers1, answers2){
        var diff = 0;
        for (var i = 0; i < answers1.length;i++){
            diff += Math.abs(answers1[i] - answers2[i]);
        }
        return diff;
    },
    
    peopleWhoTakenSurvey : []
};

module.exports = friends;


