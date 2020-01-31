const express = require('express');

const router = express.Router();

const vehiclesModel = require('./vehiclesModel.js');

const apiBase = '/api/vehicles';

router.post('/', (req, res) => {
  // console.log(`POST: VIN='${req.body.VIN}', Year=${req.body.Year}, Make='${req.body.Make}', Model='${req.body.Model}', Mileage=${req.body.Mileage}`);
  if (!req.body.VIN || !req.body.Year || !req.body.Make || !req.body.Model || !req.body.Mileage) {
    // console.log(`Something required is missing!`);
    // console.log(`Missing VIN? ${!req.body.VIN}`);
    // console.log(`Missing Year? ${!req.body.Year}`);
    // console.log(`Missing Make? ${!req.body.Make}`);
    // console.log(`Missing Model? ${!req.body.Model}`);
    // console.log(`Missing Mileage? ${!req.body.Mileage}`);
    res.status(400).json({ success: false, errorMessage: "Missing required data!" });
  } else {
    vehiclesModel.insert(req.body)
      .then(vehicle => {
        console.log(`POST ${apiBase} insert():\n`, vehicle);
        res.status(201).json({ success: true, vehicle: vehicle });
      })
      .catch(err => {
        res.status(500).json({ success: false, errorMessage: "There was an error while saving the vehicle to the database." });
      });
  }
});

router.get('/', (req, res) => {
  vehiclesModel.get()
    .then(vehicles => {
      console.log(`GET ${apiBase}/ get():\n`, vehicles);
      res.status(200).json({ success: true, vehicles: vehicles });
    })
    .catch(err => {
      res.status(500).json({ success: false, errorMessage: "The vehicle information could not be retrieved" });
    });
});
router.get('/:id', (req, res) => {
  const vehicleId = req.params.id;

  vehiclesModel.get(vehicleId)
    .then(vehicle => {
      console.log(`GET ${apiBase}/:vehicleId get(${vehicleId}):\n`, vehicle);
      if (vehicle) {
        res.status(200).json({ success: true, vehicle: vehicle });
      } else {
        res.status(404).json({ success: false, errorMessage: "The vehicle with the specified ID does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ success: false, errorMessage: "The vehicle information could not be retrieved." });
    });
});

router.put('/:id', (req, res) => {
  const vehicleId = req.params.id;

  if (!req.body.VIN || !req.body.Year || !req.body.Make || !req.body.Model || !req.body.Mileage) {
    res.status(400).json({ success: false, errorMessage: "Please provide required data for the vehicle." });
  } else {
    vehiclesModel.get(vehicleId)
      .then(vehicle => {
        if (vehicle) {
          vehiclesModel.update(vehicleId, req.body)
            .then(vehicleIdUpdated => {
              console.log(`PUT ${apiBase}/:vehicleId update(${vehicleId}):\n`, vehicleIdUpdated);
              if (vehicleIdUpdated) {
                res.status(200).json({ success: true, vehicleIdUpdated: parseInt(vehicleId, 10) });
              }
            })
            .catch(err => {
              res.status(500).json({ success: false, errorMessage: "The vehicle information could not be modified." });
            });
        } else {
          res.status(404).json({ success: false, errorMessage: "The vehicle with the specified ID does not exist." });
        }
      });
  }
});

router.delete('/:id', (req, res) => {
  const vehicleId = req.params.id;

  vehiclesModel.get(vehicleId)
    .then(vehicle => {
      if (vehicle) {
        vehiclesModel.remove(vehicleId)
          .then(vehicleIdRemoved => {
            console.log(`DELETE ${apiBase}/:vehicleId remove(${vehicleId}):`, vehicleIdRemoved);
            if (vehicleIdRemoved) {
              res.status(200).json({ success: true, vehicleIdRemoved: parseInt(vehicleId, 10) });
            }
          })
          .catch(err => {
            res.status(500).json({ success: false, errorMessage: "The vehicle could not be removed." });
          });
      } else {
        res.status(404).json({ success: false, errorMessage: "The vehicle with the specified ID does not exist." });
      }
    });
});

module.exports = router;