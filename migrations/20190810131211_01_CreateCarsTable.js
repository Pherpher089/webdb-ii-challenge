
exports.up = function(knex) {

  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments();
    tbl.text('Make', 128).notNullable();
    tbl.text('Model', 128).notNullable();
    tbl.int('year').notNullable();
    tbl.int('milage').notNullable();
    tbl.int('vin').unique().notNullable();
    tbl.text('trans', 128);
    tbl.string('title');
  })

}

exports.down = function(knex) {

  return knex.schema.dropTableIfExist('cars');

};
