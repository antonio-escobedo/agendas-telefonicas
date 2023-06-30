import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAgendaComponent } from './actualizar-agenda.component';

describe('ActualizarAgendaComponent', () => {
  let component: ActualizarAgendaComponent;
  let fixture: ComponentFixture<ActualizarAgendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarAgendaComponent]
    });
    fixture = TestBed.createComponent(ActualizarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
