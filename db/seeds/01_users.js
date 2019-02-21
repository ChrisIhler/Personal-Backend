
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, email:'a@email.com', first_name: 'a', last_name: 'a', password:'$2b$10$smfYa11WOlrfPN8osv0LIeS7U1A3SqZSVyDTMufF/eicDgR9.FsFW' },
        { id: 2, email:'Chris@email.com', first_name: 'Chris', last_name: 'Ihler', password:'$2b$10$smfYa11WOlrfPN8osv0LIeS7U1A3SqZSVyDTMufF/eicDgR9.FsFW' },
        { id: 3, email:'vani@email.com', first_name: 'Vani', last_name: 'Limbagan', password: '$2b$10$smfYa11WOlrfPN8osv0LIeS7U1A3SqZSVyDTMufF/eicDgR9.FsFW'}
      ]);
    });
};
