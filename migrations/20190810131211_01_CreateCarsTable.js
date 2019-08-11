
exports.up = function(knex) {

  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments();
    tbl.text('Make', 128).notNullable();
    tbl.text('Model', 128).notNullable();
    tbl.integer('year').notNullable();
    tbl.integer('milage').notNullable();
    tbl.text('vin').unique().notNullable();
    tbl.text('trans', 128);
    tbl.string('title');
  })

}

exports.down = function(knex) {

  return knex.schema.dropTableIfExists('cars');

};
