import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemorasPorEquipoComponent } from './demoras-por-equipo.component';

describe('DemorasPorEquipoComponent', () => {
  let component: DemorasPorEquipoComponent;
  let fixture: ComponentFixture<DemorasPorEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemorasPorEquipoComponent]
    });
    fixture = TestBed.createComponent(DemorasPorEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
