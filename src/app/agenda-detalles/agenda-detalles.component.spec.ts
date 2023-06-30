import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaDetallesComponent } from './agenda-detalles.component';

describe('AgendaDetallesComponent', () => {
  let component: AgendaDetallesComponent;
  let fixture: ComponentFixture<AgendaDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaDetallesComponent]
    });
    fixture = TestBed.createComponent(AgendaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
