import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoissonsComponent } from './poissons.component';

describe('PoissonsComponent', () => {
  let component: PoissonsComponent;
  let fixture: ComponentFixture<PoissonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoissonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoissonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
