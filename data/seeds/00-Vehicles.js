exports.seed = function(knex) {
  return knex('Vehicles').truncate()
    .then(function () {
      return knex('Vehicles').insert([
        {id: 1, VIN: '3C8FY78G74T301353', Year: 2004, Make: 'Chrysler', Model: 'PT Cruiser', Trim: 'GT', Color: 'Deep Plum', Mileage: 136439, VehicleType: 'Wagon', EngineType: 'I4', EngineDisplacementCCs: 2400, FuelType: 'Gasoline', TransmissionType: 'Automatic', TransmissionForwardGears: 4, TitleStatus: 'Clean', Sold: false},
        {id: 2, VIN: '1G1YG2D79G5106521', Year: 2016, Make: 'Chevrolet', Model: 'Corvette', Trim: 'Stingray Z51 1LT', Color: 'Laguna Blue', Mileage: 61993, VehicleType: 'Coupe', EngineType: 'V8', EngineDisplacementCCs: 6200, FuelType: 'Gasoline', TransmissionType: 'Manual', TransmissionForwardGears: 7, TitleStatus: 'Clean', Sold: false},
        {id: 3, VIN: '4MZHL04D993B01815', Year: 2009, Make: 'Buell', Model: '1125R', Trim: '', Color: 'Black / Red', Mileage: 22472, VehicleType: 'Superbike', EngineType: 'V2', EngineDisplacementCCs: 1125, FuelType: 'Gasoline', TransmissionType: 'Manual', TransmissionForwardGears: 6, TitleStatus: 'Clean', Sold: false},
        {id: 4, VIN: 'JYARP29Y9JA000125', Year: 2018, Make: 'Yamaha', Model: 'FJR1300A', Trim: 'JCL', Color: 'Matte Phantom Blue / Black', Mileage: 6892, VehicleType: 'Sport-Touring', EngineType: 'I4', EngineDisplacementCCs: 1298, FuelType: 'Gasoline', TransmissionType: 'Manual', TransmissionForwardGears: 6, TitleStatus: 'Clean', Sold: false}
      ]);
    });
};
