import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuepokeeresPage } from './quepokeeres.page';

describe('QuepokeeresPage', () => {
  let component: QuepokeeresPage;
  let fixture: ComponentFixture<QuepokeeresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuepokeeresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
