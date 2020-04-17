
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects')
      .del()
      .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        { name: "Code for future", description: "Learn coding language" },
        { name: "Build video games", description: "Make games interactive" },
        { name: "Take time away", description: "Unplug and breath" }
      ]);
    });
};
