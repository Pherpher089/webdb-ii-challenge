
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, make: 'ford', model:'focus', year: 2014, milage: 44235, vin: 'VRNFJS4N32L34K3W', trans: 'automatic', title: 'clean'},
        {id: 2, make: 'ford', model:'ranger', year: 1988, milage: 153003, vin: 'VRN7584N32L34K3W', trans: 'automatic', title: 'clean'},
        {id: 3, make: 'ford', model:'explorer', year: 1996, milage: 565425, vin: 'E3NFJSR43L34K3W', trans: 'automatic', title: 'salvage'},
        {id: 4, make: 'Nissan', model:'Juke', year: 2017, milage: 44666, vin: 'TRE332N3351K3W', trans: 'variable', title: 'clean'},
      ]);
    });
};
