var vehicles = [];
class Vehicle
{
  constructor(weight, length, price)
  {
    this.weight = weight;
    this.length = length;
    this.price = price;
  }
  getSpecs()
  {
    console.log("Характеристики: масса " + this.weight + ", длина " + this.length);
  }
  showPrice()
  {
    console.log("Эта приблуда стоит " + this.price);
  }
  go()
  {
    console.log("Обожемой, оно движецца");
  }
}

class Car extends Vehicle
{
  constructor(weight, length, price, brand, transmission)
  {
    super(weight, length, price);
    this.brand = brand;
    this.transmission = transmission;
  }
  go()
  {
    console.log("Машина поехала")
  }
  wash()
  {
    console.log("Машину моют")
  }
}

class Plane extends Vehicle
{
  constructor(weight, length, price, manufacturer)
  {
    super(weight, length, price);
    this.manufacturer = manufacturer;
  }
  go()
  {
    console.log("Самолет лихо полетел")
  }
  fuel()
  {
    console.log("Самолет заправляют")
  }
}

class Ship extends Vehicle
{
  constructor(weight, length, price, country)
  {
    super(weight, length, price);
    this.country = country;
  }
  go()
  {
    console.log("Корабль лихо пошел (не 'поплыл'!)");
  }
  train()
  {
    console.log("На корабле учат матросов");
  }
}
/* проверяем вручную, всё работает
var boeing = new Plane ("50", "75", "10 mil", "Boeing");
boeing.getSpecs();
boeing.showPrice();
boeing.fuel();
boeing.go();

var bmw = new Car ("1.5", "5", "30 thousand", "BMW", "auto");
bmw.getSpecs();
bmw.showPrice();
bmw.wash();
bmw.go();

var enterprise = new Ship ("10 000 tons", "300 meters", "50 mil", "Britain");
enterprise.getSpecs();
enterprise.showPrice();
enterprise.train();
enterprise.go();
*/
function createCar()
{
let newcarweight = prompt("Введите массу нового автомобиля");
let newcarlength = prompt("Введите длину нового автомобиля");
let newcarprice = prompt("Введите цену нового автомобиля");
let newcarbrand = prompt("Введите производителя нового автомобиля");
let newcartransm = prompt("Введите трансмиссию нового автомобиля");
var car = new Car (newcarweight, newcarlength, newcarprice, newcarbrand, newcartransm);
console.log("Машина создана!");
car.getSpecs();
car.go();
vehicles[0] = car;
}

function createPlane()
{
let newplaneweight = prompt("Введите массу нового самолета");
let newplanelength = prompt("Введите длину нового самолета");
let newplaneprice = prompt("А сколько новый самолет будет стоить?");
let newplanemanufacturer = prompt("Введите компанию-производителя нового самолета");
var plane = new Plane (newplaneweight, newplanelength, newplaneprice, newplanemanufacturer);
console.log("Самолет создан!");
plane.getSpecs();
plane.go();
vehicles[1] = plane;
}

function createShip()
{
  let newshipweight = prompt("Введите массу нового корабля");
  let newshiplength = prompt("Введите длину нового корабля");
  let newshipprice = prompt("Почем лодочку продавать будем?");
  let newshipcountry = prompt("Введите страну, под чьим флагом попывет");
  var ship = new Ship (newshipweight, newshiplength, newshipprice, newshipcountry);
  console.log("Корабль создан!");
  ship.getSpecs();
  ship.go();
  vehicles[2] = ship;
}

function showCar()
{
 vehicles[0].getSpecs();
 console.log("Дополнительные данные — производитель: " + vehicles[0].brand + ", тип трансмиссии: " + vehicles[0].transmission + ", цена: " + vehicles[0].price);
 console.log("-----");
}
function showPlane()
{
 vehicles[1].getSpecs();
 console.log("Дополнительные данные — производитель: " + vehicles[1].manufacturer + ", цена: " + vehicles[1].price);
 console.log("-----");
}
function showShip()
{
 vehicles[2].getSpecs();
 console.log("Дополнительные данные — родная страна: " + vehicles[2].country + ", цена: " + vehicles[2].price);
 console.log("-----");
}

function changeCar()
{
  let updcarweight = prompt("Введите уточненную массу автомобиля");
  let updcarlength = prompt("Введите уточненную длину автомобиля");
  let updcarprice = prompt("Введите уточненную цену автомобиля");
  let updcarbrand = prompt("Введите уточненного производителя автомобиля");
  let updcartransm = prompt("Введите уточненную трансмиссию автомобиля");
  vehicles[0].weight = updcarweight;
  vehicles[0].length = updcarlength;
  vehicles[0].price = updcarprice;
  vehicles[0].brand = updcarbrand;
  vehicles[0].transmission = updcartransm;
  console.log("Данные по машине обновлены!");
  vehicles[0].getSpecs();
}
function changePlane()
{
  let updplaneweight = prompt("Введите уточненную массу самолета");
  let updplanelength = prompt("Введите уточненную длину самолета");
  let updplaneprice = prompt("Почем мы будет продавать его сейчас?");
  let updplanemanufacturer = prompt("Кто теперь производит?");
  vehicles[1].weight = updplaneweight;
  vehicles[1].length = updplanelength;
  vehicles[1].price = updplaneprice;
  vehicles[1].manufacturer = updplanemanufacturer;
  console.log("Данные по самолету обновлены!");
  vehicles[1].getSpecs();
}
function changeShip()
{
  let updshipweight = prompt("Введите уточненную массу корабля");
  let updshiplength = prompt("Введите уточненную длину корабля");
  let updshipprice = prompt("Сколько теперь будет стоить?");
  let updshipcountry = prompt("Под чьим флагом будет сейчас?");
  vehicles[2].weight = updshipweight;
  vehicles[2].length = updshiplength;
  vehicles[2].price = updshipprice;
  vehicles[2].country = updshipcountry;
  console.log("Данные по кораблю обновлены!");
  vehicles[2].getSpecs();
}
