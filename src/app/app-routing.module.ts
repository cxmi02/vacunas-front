import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationSelectorComponent } from './components/location-selector/location-selector.component';
import { ChildrenComponent } from './components/children/children.component';

const routes: Routes = [
  { path: '', redirectTo: '/children', pathMatch: 'full' },
  { 
    path: 'children', 
    component: ChildrenComponent,
    children: [
      { path: '', component: LocationSelectorComponent },
      { path: 'location-selector', component: LocationSelectorComponent },
    ]
  },
  { path: '**', redirectTo: '/children' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
