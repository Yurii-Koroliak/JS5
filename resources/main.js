// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, 
// середня витрата палива на 100 км., водії).
const car = {
    manufacturer: 'Audi',
    model: 'Rs-7 C8',
    yearManufacture: '2019',
    maxSpeed: '305Km/h',
    fuelCapacity: '75L',
    fuelUsage: '9.5',
    drivers: ['vasya', 'nikita', 'vlad']
};


// Метод, який виводить на екран інформацію про автомобіль.
alert(Object.values(car));
console.log(Object.entries(car));


// Додавання ім’я водія у список
const newDriver = prompt(`Write name of new driver`);
car.drivers.unshift(newDriver);
alert(`New list of drivers: ${car.drivers}`);


// Перевірка водія на наявність його ім’я у списку
const check = prompt(`What name do you want check?`);
alert(car.drivers.includes(check)); 


// Підрахунок необхідного часу та кількості палива для подолання
// переданої відстані. Враховуй, що через
// кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
const distance = prompt(`write your distance`);
const speed = prompt(`write your speed (max speed audi ${car.model}: ${car.maxSpeed})`)
if (speed > 305) {
    alert(`you can not drive width ${speed} km/h (max:${car.maxSpeed})`);
} else {
    const neededFuel = (Number(distance) * Number(car.fuelUsage)) / 100;
    alert(`for travel you need ${neededFuel}L fuel`);
    const neededTime = Math.ceil(Number(distance) / Number(speed));
    if (Number(neededTime) > 4) {
        const quantityBreaks = (Math.floor(neededTime / 4));
        alert(`for travel you need make ${quantityBreaks} breaks`);
        alert(`for travel you need ${Number(neededTime) + Number(quantityBreaks)} hours, width ${quantityBreaks} breaks.`);
    } else {
        alert(`for travel you need ${neededTime} hours`);
    }
}
