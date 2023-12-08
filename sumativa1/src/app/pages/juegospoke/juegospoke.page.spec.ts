import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegospokePage } from './juegospoke.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('JuegospokePage', () => {
  let component: JuegospokePage;
  let fixture: ComponentFixture<JuegospokePage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(JuegospokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
