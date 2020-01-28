
exports.up = function(knex) {
  return knex.schema
    .createTable('listings', function(table) {
      table.increments('id').primary();
      table.string('photo_id');
      table.string('')
    })
};

exports.down = function(knex) {

};
