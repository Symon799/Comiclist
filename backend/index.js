const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const fetch = require('node-fetch');

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('../front/'))

var hostname = 'localhost'; 
var port = 4242; 

//DATABASE
var mongoose = require('mongoose'); 
var urlmongo = "mongodb://symon799:lalistecomique0@ds155730.mlab.com:55730/comiclist"; 
mongoose.connect(urlmongo);
var db = mongoose.connection; 

db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
db.once('open', function (){
    console.log("Connexion à la base OK");
});

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

var userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    comics: []
});

var User = mongoose.model('User', userSchema);
var myRouter = express.Router();
myRouter.route('/')
.all(function(req,res){ 
      res.json({message : "Bienvenue sur l'API ", methode : req.method});
});
  
myRouter.route('/users')
.get(function(req,res){ 
	User.find(function(err, users){
        if (err){
            res.send(err); 
        }
        res.json(users);  
    });
})
.post(function(req, res){
      let user = new User();
      let obj = req.body

      user.username = obj.username;
      user.email = obj.email;
      user.password = obj.password;
      user.comics = obj.comics

      console.log(user);
      console.log(obj)
      
      user.save(function(err){
        if(err){
          res.send(err);
        }
        console.log('save')
        res.send({message : 'User added in database'});
      });
});

myRouter.route('/users/login')
.post(function(req, res){
    User.findOne({username:req.body.username, password:req.body.password},
    function(err, user) {
        if (err) {
            res.status(400).send(err)
        }
        res.json(user)
    })
});

myRouter.route('/users/:user_id')
.get(function(req,res){ 
            User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
})
.put(function(req,res){ 
                User.findById(req.params.user_id, function(err, user) {
                if (err){
                    res.send(err);
                }
                        user.nom = req.body.nom;
                        user.adresse = req.body.adresse;
                        user.tel = req.body.tel;
                        user.description = req.body.description; 
                                user.save(function(err){
                                if(err){
                                  res.send(err);
                                }
                                res.json({message : 'Bravo, mise à jour des données OK'});
                              });                
                });
})
.delete(function(req,res){ 

    User.remove({_id: req.params.user_id}, function(err, user){
        if (err){
            res.send(err); 
        }
        res.json({message:"user delete from database"}); 
    }); 
    
});
app.use(myRouter);

app.get('/', (req, res) => {
    res.sendFile('../front/index.html')
})

app.get('/issues/:search_tag', function(req, res) {
    var urljson = 'http://comicvine.com/api/search/?api_key=bfe593ac67ddb3ec8ffc18324cf2cb52a995c7d5&format=json&sort=name:asc&resources=issue&query=' + req.params.search_tag;
    fetch(urljson, {timeout: 5000})
        .then((response) => response.json())
        .then(obj => {
            //console.log(obj.results[0].image.icon_url)
            res.send(obj);
        })
    
});

app.get('/issue/:issue_id', function(req, res) {
    var urljson = 'https://comicvine.gamespot.com/api/issue/4000-' + req.params.issue_id + '/?api_key=bfe593ac67ddb3ec8ffc18324cf2cb52a995c7d5&format=json';
    fetch(urljson, {timeout: 5000})
        .then((response) => response.json())
        .then(obj => {
            //console.log(obj.results[0].image.icon_url)
            res.send(obj);
        })
    
});

app.get('/lastissues', function(req, res) {
    var urljson = 'http://comicvine.com/api/issues/?api_key=bfe593ac67ddb3ec8ffc18324cf2cb52a995c7d5&sort=store_date:desc&format=json';
    fetch(urljson, {timeout: 5000})
        .then((response) => response.json())
        .then(obj => {
            res.send(obj);
        })
    
});


app.listen(port, () => console.log('App listening on port ' + port))