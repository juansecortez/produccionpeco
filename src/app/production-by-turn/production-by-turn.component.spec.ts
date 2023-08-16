import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionByTurnComponent } from './production-by-turn.component';

describe('ProductionByTurnComponent', () => {
  let component: ProductionByTurnComponent;
  let fixture: ComponentFixture<ProductionByTurnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionByTurnComponent]
    });
    fixture = TestBed.createComponent(ProductionByTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
