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
    /** String to display next to the checkbox */
    @Input() public label: string;

    /** Local state of the component */
    public state: boolean;

    /** Form control on change handler */
    public onChange: (_: boolean) => void;
    /** Form control on touch handler */
    public onTouch: (_: boolean) => void;

    /**
     * Toggle state of the checkbox
     */
    public toggle() {
        this.state = !this.state;
        if (this.onChange) {
            this.onChange(this.state);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: boolean) {
        this.state = value;
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: boolean) => void): void {
        this.onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: boolean) => void): void {
        this.onTouch = fn;
    }
}
