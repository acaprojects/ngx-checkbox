import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ACustomEventsModule } from '@acaprojects/ngx-custom-events';

import { ACheckboxComponent } from './checkbox.component';

describe('ACheckboxComponent', () => {
    let fixture: ComponentFixture<ACheckboxComponent>;
    let component: ACheckboxComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ACheckboxComponent],
            imports: [ACustomEventsModule]
        }).compileComponents();
        fixture = TestBed.createComponent(ACheckboxComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    }));

    it('should create a checkbox', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should have a box', async(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.box')).toBeTruthy();
    }));

    it('should have a label', async(() => {
        component.label = 'This is a test label';
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('label').textContent).toContain('This is a test label');
    }));

    it('should toggle state', async(() => {
        expect(component.state).toBeFalsy();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.active')).toBeFalsy();
        component.toggle();
        fixture.detectChanges();
        expect(component.state).toBeTruthy();
        expect(compiled.querySelector('.active')).toBeTruthy();
    }));

    it('should toggle state from label being tapped', async(() => {
        component.label = 'This is a test label';
        fixture.detectChanges();
        expect(component.state).toBeFalsy();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.active')).toBeFalsy();
        const label: HTMLLabelElement = compiled.querySelector('label');
        label.dispatchEvent(new Event('tapped'));
        fixture.detectChanges();
        expect(component.state).toBeTruthy();
        expect(compiled.querySelector('.active')).toBeTruthy();
    }));

    it('should toggle state from box being tapped', async(() => {
        component.label = 'This is a test label';
        fixture.detectChanges();
        expect(component.state).toBeFalsy();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.active')).toBeFalsy();
        const box: HTMLDivElement = compiled.querySelector('.box');
        box.dispatchEvent(new Event('tapped'));
        fixture.detectChanges();
        expect(component.state).toBeTruthy();
        expect(compiled.querySelector('.active')).toBeTruthy();
    }));
});
