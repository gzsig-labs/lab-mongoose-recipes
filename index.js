const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// Recipe.create({
//   title: "Pizza de Guacamole",
//   level: 'Amateur Chef',
//   ingredients: ["Pizza", "Guacamole"],
//   cuisine: "Italiana",
//   dishType: "Dish",
//   duration: 60,
//   creator: "Coe",
// })

// Recipe.insertMany(data, function(err, doc) {})

// Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100}, (err, doc)=> console.log(doc))
// Recipe.find({title: "Rigatoni alla Genovese" }, (err, doc)=>{err ? console.log(err) : console.log(doc)})
// Recipe.deleteOne({title: "Carrot Cake"})
mongoose.connection.close()