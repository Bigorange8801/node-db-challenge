
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {description:"JavaScript", notes:"Make interactive web sites"},
        {description:"React.js", notes:"Build faster single page apps"},
        {description:"Node.js", notes:"Build fast and secure backend db's"}
      ]);
    });
};
