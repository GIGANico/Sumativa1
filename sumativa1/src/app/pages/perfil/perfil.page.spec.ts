import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { CommonModule } from '@angular/common';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [CommonModule], // Incluir CommonModule en imports
    }).compileComponents();


    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
