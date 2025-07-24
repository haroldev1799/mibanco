import { Component } from '@angular/core';
import { VEHICLE_LIST_IMPORTS } from './vehicle-list-constants';
import { InputData } from '@shared/interfaces/input.dto';
import { ButtonData, ButtonType } from '@shared/interfaces/button.dto';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [...VEHICLE_LIST_IMPORTS],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent {

  
  searchInput: InputData = {
      label: 'Buscar factura',
      name: 'search',
      type: 'text',
      value: '',
      placeholder: 'Buscar factura',
      clear: true,
  }

  BUTTON_DATA: Record<'AGREGAR', ButtonData> = {
      AGREGAR: {
          text: 'Cotizar',
          type: ButtonType.DARK,
      },
  }

}
