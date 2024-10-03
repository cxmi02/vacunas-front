import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  children: { name: string; age: number; municipality: string; vaccines: string }[] = [
    { name: 'Juan Pérez', age: 5, municipality: 'Municipio 1', vaccines: 'Vacuna A' },
    { name: 'Ana Gómez', age: 6, municipality: 'Municipio 2', vaccines: 'Vacuna B' },
    { name: 'Pedro Martínez', age: 4, municipality: 'Municipio 1', vaccines: 'Vacuna C' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
