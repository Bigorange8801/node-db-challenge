
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        { name: "Code", description: "JavaScript", project_id: 1 },
        { name: "Code", description: "React.js", project_id: 2 },
        { name: "Code", description: "Node.js", project_id: 1 },
        { name: "Relaxing", description: "Yoga", project_id: 3 }
      ]);
    });
};
