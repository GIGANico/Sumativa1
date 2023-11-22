import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarjuegoPage } from './modificarjuego.page';

describe('ModificarjuegoPage', () => {
  let component: ModificarjuegoPage;
  let fixture: ComponentFixture<ModificarjuegoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificarjuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
