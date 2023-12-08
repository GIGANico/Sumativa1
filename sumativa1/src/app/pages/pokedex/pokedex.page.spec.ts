import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexPage } from './pokedex.page';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PokedexPage', () => {
  let component: PokedexPage;
  let fixture: ComponentFixture<PokedexPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    }).compileComponents();


    fixture = TestBed.createComponent(PokedexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
