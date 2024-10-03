import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.css']
})
export class LocationSelectorComponent implements OnInit {
  locations: { department: string; municipality: string }[] = [];
  departments: string[] = ['Departamento 1', 'Departamento 2'];
  municipalities: string[] = ['Municipio 1', 'Municipio 2', 'Municipio 3'];

  constructor() {}

  ngOnInit(): void {
    this.addLocation();
  }

  addLocation(): void {
    this.locations.push({ department: '', municipality: '' });
  }
}
