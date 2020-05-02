exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('table_name').del().then(function() {
		// Inserts seed entries
		return knex('table_name').insert([
			{ id: 1, username: 'rowValue1', email: 'email1@email.com' },
			{ id: 2, username: 'rowValue2', email: 'email2@email.com' },
			{ id: 3, username: 'rowValue3', email: 'email3@email.com' }
		]);
	});
};
