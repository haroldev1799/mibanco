import { Component, Input } from '@angular/core'
import { TooltipComponent } from '../tooltip/tooltip.component'
import { InputData } from '@shared/interfaces/input.dto'

@Component({
    selector: 'app-label',
    standalone: true,
    templateUrl: './label.component.html',
    styleUrl: './label.component.scss',
    imports: [TooltipComponent],
})
export class LabelComponent {
    @Input() data!: InputData
}
