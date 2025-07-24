import { TableModule } from 'primeng/table'
import { MenuModule } from 'primeng/menu'
import { DatePipe, PercentPipe, NgIf, NgClass } from '@angular/common'
import { ButtonComponent } from '@components/atoms/button/button.component'
import { InputComponent } from '@components/atoms/input/input.component'
import { TooltipComponent } from '@components/atoms/tooltip/tooltip.component'

export const VEHICLE_LIST_IMPORTS = [
    TableModule,
    MenuModule,
    ButtonComponent,
    TooltipComponent,
    InputComponent,
    DatePipe,
    PercentPipe,
    NgIf,
    NgClass,
];
