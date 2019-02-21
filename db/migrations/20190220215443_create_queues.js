const TABLE_NAME = 'queues'

exports.up = function(knex, Promise) {
	return knex.schema.createTable(TABLE_NAME, function(table){
		table.increments()
		table.integer('offer_id').notNullable().unsigned()
		table.foreign('offer_id').references('id').inTable('offers').onDelete('CASCADE')
		table.integer('request_id').notNullable().unsigned()
        table.foreign('request_id').references('id').inTable('requests').onDelete('CASCADE')
        table.enu('status', ['waiting', 'queued', 'started', 'paused', 'restarted', 'done']).notNullable
		table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists(TABLE_NAME)  
};
