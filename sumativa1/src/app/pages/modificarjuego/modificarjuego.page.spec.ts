import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarjuegoPage } from './modificarjuego.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { ActivatedRoute } from '@angular/router';

describe('ModificarjuegoPage', () => {
  const fakeActivatedRoute = {
    snapshot: { data: { } }
  } as ActivatedRoute;

  let component: ModificarjuegoPage;
  let fixture: ComponentFixture<ModificarjuegoPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute}, SQLite ]
    }).compileComponents();



    fixture = TestBed.createComponent(ModificarjuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
