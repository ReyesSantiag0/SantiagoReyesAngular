import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';

  name: string = 'Jorge Collazos';
  age: number = 35;
  phone: null = null;
  otrotipo: undefined = undefined;
  cualquier: any;
  variostipos: string | number = 10; //'esto es un dato'; //Varios tipos de variable ene una sola
  listCars: Array<any> = [1, 'cadena', null];
  listCars2: Array<CarModel> = [
    {
      marca: 'Ford',
      modelo: 'Ranger',
      year: 2021,
    },

    {
      marca: 'Chevrolet',
      modelo: 'Aveo',
      year: 2020,
    },
  ];

  lista_prod_01: Array<Producto> = [
    {
      codigo_prod: 123,
      nombre_prod: 'escoba',
      valor: 5000,
      cantidad: 2,
      embalaje: 'bolsa',
      precio_costo: 10000,
    },

    {
      codigo_prod: 124,
      nombre_prod: 'trapeador',
      valor: 4000,
      cantidad: 2,
      embalaje: 'ninguno',
      precio_costo: 8000,
    },
  ];

  lista_prod_02: Array<Producto> = [
    {
      codigo_prod: 234,
      nombre_prod: 'arroz',
      valor: 2500,
      cantidad: 2,
      embalaje: 'bolsa',
      precio_costo: 5000,
    },

    {
      codigo_prod: 124,
      nombre_prod: 'atún',
      valor: 5000,
      cantidad: 1,
      embalaje: 'ninguno',
      precio_costo: 5000,
    },
  ];

  lista_prod_03: Array<Producto> = [
    {
      codigo_prod: 345,
      nombre_prod: 'protector solar',
      valor: 10000,
      cantidad: 3,
      embalaje: 'ninguna',
      precio_costo: 30000,
    },

    {
      codigo_prod: 346,
      nombre_prod: 'Labial',
      valor: 5000,
      cantidad: 3,
      embalaje: 'ninguno',
      precio_costo: 15000,
    },
  ];

  //DEFINICION DE OBJETOS

  car: any = {
    marca: 'Chevrolet',
    modelo: 'spark',
    year: 2000,
  };

  car2: CarModel = {
    marca: 'NMW',
    modelo: 'Toyota',
    year: 2022,
  };

  celular: CellPhone = {
    marca: 'Xiaomi',
    color: 'Negro',
    capacidad: 128,
    precio: 1000000,
    procesador: 'Snapdragon',
  };
}

//Interfaces: Es definir un contrato de operacion, que condiciona a las variables a comportarse
//de una manera determinada

interface CarModel {
  marca: string;
  modelo: string;
  year: Number;
}

interface CellPhone {
  marca: string;
  color: string;
  capacidad: number;
  precio: Number;
  procesador: string;
}

interface Producto {
  codigo_prod: number | string;
  nombre_prod: string;
  valor: number;
  cantidad: number;
  embalaje: string | null;
  precio_costo: number;
}

//DEFINIR VARIABLES, CARACTERISTICAS, VARIABLES
// PARA USAR EN VISTAS

//EXAMPLE: Definir 3 listas que dependan de la definición de
//datos de una interface denominada productos
//en cada lista definir 2 objetos dependientes de la interface
