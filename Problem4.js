

const car = {
  brand: "Audi",
  model: "500",
  displayDetails: function () {
    console.log(`Brand: [${this.brand}], Model: [${this.model}]`);
  },
};

car.displayDetails();
