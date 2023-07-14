import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  recipes: {name:string, image:string, description:string}[] = [
    {name: 'Hamburguesas', image:'../../../assets/hamburguesas.jpg', description:'una pequeña descripcion de las hamburgesas'},
    {name: 'Macarrones con queso', image:'../../../assets/macarrones-queso.jpg', description:'una pequeña descripcion de los macarrones con queso'},
    {name: 'Macarrones con salsa', image:'../../../assets/macarrones-salsa.jpg', description:'una pequeña descripcion de las macarrones con salsa'},
    {name: 'Nugets con salsa BBQ y Miel', image:'../../../assets/nugets-miel-bbq.jpg', description:'una pequeña descripcion de los nugets'},
    {name: 'Salchipapa con nugets', image:'../../../assets/salchipapa-pollo.jpg', description:'una pequeña descripcion de la salchipapa con nugets'},
    {name: 'Spagetis con albondigas', image:'../../../assets/spaguetis-albondigas.jpg', description:'una pequeña descripcion de los spagetis con albondigas'},
    {name: 'Torta de chocolate', image:'../../../assets/torta-chocolate.jpg', description:'una pequeña descripcion de la torta con chocolate'}
  ];

}
