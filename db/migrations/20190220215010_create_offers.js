const TABLE_NAME = 'offers'

exports.up = function(knex, Promise) {
	return knex.schema.createTable(TABLE_NAME, function(table){
		table.increments()
		table.integer('user_id').notNullable().unsigned()
		table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
        table.enu('status', ['active', 'inactive']).notNullable
		table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists(TABLE_NAME)  
};
