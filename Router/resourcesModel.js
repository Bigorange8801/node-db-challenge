  
const db = require("../data/db.config");

module.exports = {
  getall,
  add
};

function getall() {
  return db("Resources");
}

function add(body) {
  return db("Resources")
  .insert(body)
  // .then(add => {
  //   return db('Resources')
  //   .where({id:add[0]})
  //   .first();
  // })
}