import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TijerasComponent } from './tijeras.component';

describe('TijerasComponent', () => {
  let component: TijerasComponent;
  let fixture: ComponentFixture<TijerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TijerasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TijerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
