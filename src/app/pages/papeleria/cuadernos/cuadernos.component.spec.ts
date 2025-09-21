import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadernosComponent } from './cuadernos.component';

describe('CuadernosComponent', () => {
  let component: CuadernosComponent;
  let fixture: ComponentFixture<CuadernosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadernosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadernosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
