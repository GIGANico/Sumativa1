import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarjuegoPage } from './agregarjuego.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AgregarjuegoPage', () => {
  let component: AgregarjuegoPage;
  let fixture: ComponentFixture<AgregarjuegoPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();


    fixture = TestBed.createComponent(AgregarjuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
