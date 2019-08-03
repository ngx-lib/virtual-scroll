import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollDirective } from './virtual-scroll.directive';

describe('VirtualScrollComponent', () => {
  let component: VirtualScrollDirective;
  let fixture: ComponentFixture<VirtualScrollDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualScrollDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
