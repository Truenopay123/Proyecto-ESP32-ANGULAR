import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumasComponent } from './plumas.component';

describe('PlumasComponent', () => {
  let component: PlumasComponent;
  let fixture: ComponentFixture<PlumasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlumasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlumasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
