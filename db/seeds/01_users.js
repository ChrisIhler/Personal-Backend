
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username:'a', password:'$2b$10$smfYa11WOlrfPN8osv0LIeS7U1A3SqZSVyDTMufF/eicDgR9.FsFW' },
        { id: 2, username:'Chris', password:'$2b$10$smfYa11WOlrfPN8osv0LIeS7U1A3SqZSVyDTMufF/eicDgR9.FsFW' },
        { id: 3, username:'vani', password: '$2b$10$smfYa11WOlrfPN8osv0LIeS7U1A3SqZSVyDTMufF/eicDgR9.FsFW'}
      ]);
    });
};
