import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonPage } from './pokemon.page';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PokemonPage', () => {


  const fakeActivatedRoute = {
    snapshot: { data: {} }
  } as ActivatedRoute;

  let component: PokemonPage;
  let fixture: ComponentFixture<PokemonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute}, HttpClient, HttpHandler ]
      
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
