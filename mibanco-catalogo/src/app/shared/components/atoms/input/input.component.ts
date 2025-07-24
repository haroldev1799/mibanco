import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core'
import { NgClass } from '@angular/common'
import { InputData } from '@shared/interfaces/input.dto'

@Component({
    selector: 'app-input',
    standalone: true,
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    imports: [NgClass],
})
export class InputComponent {
    @ViewChild('input') input!: ElementRef

    @Input() data!: InputData
    @Input() error: boolean = false
    @Input() readonly: boolean = false
    @Input() percentage: boolean = false

    @Output() emitValue = new EventEmitter<string>()
    @Output() emitFocus = new EventEmitter()
    @Output() emitClear = new EventEmitter()

    disabledHandleClear = false

    handleChange(event: Event) {
        const { value } = event.target as HTMLInputElement
        if (this.data.clear) this.disabledHandleClear = value.length !== 0
        this.data.value = value
        this.emitValue.emit(value)
    }

    handleFocus() {
        this.emitFocus.emit()
    }

    handleClear(event: Event) {
        event.stopPropagation()
        this.input.nativeElement.value = ''
        this.disabledHandleClear = false
        this.emitValue.emit('')
        this.emitClear.emit()
    }
}
