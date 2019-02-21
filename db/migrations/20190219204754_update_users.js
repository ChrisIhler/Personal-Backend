const TABLE_NAME = 'users'

exports.up = function(knex, Promise) {
  return knex.schema.table(TABLE_NAME, function (table) {
    table.dropColumn('username');
    table.string('first_name').notNullable().after('id')
    table.string('last_name').notNullable().after('first_name')
    table.string('email').notNullable().after('email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table(TABLE_NAME, function (table) {
    table.string('username');
    table.dropColumn('first_name');
    table.dropColumn('last_name');
    table.dropColumn('email');
  })
};
