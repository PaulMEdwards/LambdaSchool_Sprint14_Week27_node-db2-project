const db = require('../dbConfig.js');

module.exports = {
  get,
  insert,
  update,
  remove,
};

function get(id) {
  if (id) {
    return db("Vehicles")
      .where("id", id)
      .first();
  } else {
    return db("Vehicles");
  }
};

function insert(vehicle) {
  return db("Vehicles")
    .insert(vehicle)
    .then(([id]) => this.get(id));
};

function update(id, vehicleChanges) {
  return db("Vehicles")
    .where("id", id)
    .update(vehicleChanges)
    .then(count => (count > 0 ? this.get(id) : null));
};

function remove(id) {
  return db("Vehicles")
    .where("id", id)
    .del();
};
