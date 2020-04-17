exports.up = function(knex) {
    return knex.schema
      .createTable("Tasks", tbl => {
        tbl.increments();
        tbl.string("description", 255).notNullable();
        tbl.string("notes");
        tbl.boolean("finished").defaultTo(0);
      })
  
      .createTable("Projects", tbl => {
        tbl.increments();
        tbl
          .string("name", 256)
          .notNullable()
          .index();
        tbl.string("description", 256);
        tbl.boolean("finished").defaultTo(0);
      })
      .createTable("Resources", tbl => {
        tbl.increments();
        tbl
          .string("name", 256)
          .notNullable()
          .index();
        tbl.string("description", 256);
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("Projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
      .createTable("Tasklist", tbl => {
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("Projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
  
        tbl
          .integer("task_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("Tasks")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("Tasklist")
      .dropTableIfExists("Resources")
      .dropTableIfExists("Projects")
      .dropTableIfExists("Tasks");
  };