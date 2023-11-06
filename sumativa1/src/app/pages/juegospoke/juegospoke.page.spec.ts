import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegospokePage } from './juegospoke.page';

describe('JuegospokePage', () => {
  let component: JuegospokePage;
  let fixture: ComponentFixture<JuegospokePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuegospokePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
