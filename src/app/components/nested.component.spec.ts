import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

@Component({
  selector: 'my-collapsible-panel',
  template: ''
})
class CollapsiblePanel {}

@Component({
  selector: 'test',
  template: `
        <my-collapsible-panel></my-collapsible-panel>
  `
})
class NestedComponentTesting {}

describe('NestedComponentTesting', () => {
  describe('Mocking all nested components', () => {
    let component: NestedComponentTesting;
    let fixture: ComponentFixture<NestedComponentTesting>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [NestedComponentTesting, CollapsiblePanel]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NestedComponentTesting);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Ignoring nested components', () => {
    let component: NestedComponentTesting;
    let fixture: ComponentFixture<NestedComponentTesting>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [NestedComponentTesting],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NestedComponentTesting);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
