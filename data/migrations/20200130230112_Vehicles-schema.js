exports.up = function(knex) {
  return knex.schema.createTable('Vehicles', tbl => {
    tbl.increments('ID');
    tbl.string('VIN')
      .notNullable()
      .unique();
    tbl.integer('Year')
      .notNullable();
    tbl.string('Make')
      .notNullable();
    tbl.string('Model')
      .notNullable();
    tbl.string('Trim');
    tbl.string('Color');
    tbl.integer('Mileage');
    tbl.enum('VehicleType', ['Sedan','Coupe','Convertible','Wagon','Hatchback','SUV','Minivan','Truck','Van','Standard','Cruiser','Sportbike','Superbike','Sport-Touring','Touring','Dual-Sport','Scooter','Trike']);
    tbl.enum('EngineType', [
      'Single',
      'I2','I3','I4','I5','I6','I7','I8','I9','I10','I12','I14',
      'F2','F4','F6','F8','F10','F12','F16',
      'V2','V3','V4','V5','V6','V8','V10','V12','V14','V16','V18','V20','V24',
      'VR5','VR6',
      'R1','R2','R3','R4','R5','R6',
      'W8','W12','W16','W18',
      'Electric'
    ]);
    tbl.decimal('EngineDisplacementCCs');
    tbl.enum('FuelType', ['Gasoline','Diesel','Electricity']);
    tbl.enu('TransmissionType', ['Manual', 'Automatic']);
    tbl.integer('TransmissionForwardGears');
    tbl.enu('TitleStatus', ['Clean', 'Salvage', 'Rebuilt', 'Dismantled', 'Junk']);
    tbl.boolean('Sold')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Vehicles');
};
