import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'a-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxComponent),
            multi: true
        }
    ]
})
export class CheckboxComponent implements ControlValueAccessor {
    /** ID of the checkbox element */
    @Input() public id: string;
    /** CSS class to add to the root element of the component */
    @Input() public klass = 'default';
    /** State of the checkbox */
    @Input() public model: boolean;
    /** String to display next to the checkbox */
    @Input() public label: string;
    /** Change emitter for the date timestamp */
    @Output() public modelChange = new EventEmitter<boolean>();

    /** Form control on change handler */
    public onChange: (_: boolean) => void;
    /** Form control on touch handler */
    public onTouch: (_: boolean) => void;

    /**
     * Toggle state of the checkbox
     */
    public toggle() {
        this.model = !this.model;
        this.modelChange.emit(this.model);
    }

    /**
     * Update local value when form control value is changed
     * @param value
     */
    public writeValue(value: boolean) {
        this.model = value;
        this.modelChange.emit(this.model);
    }

    /**
     * Register on change callback given for form control
     * @param fn
     */
    public registerOnChange(fn: (_: boolean) => void): void {
        this.onChange = fn;
    }

    /**
     * Register on touched callback given for form control
     * @param fn
     */
    public registerOnTouched(fn: (_: boolean) => void): void {
        this.onTouch = fn;
    }
}
