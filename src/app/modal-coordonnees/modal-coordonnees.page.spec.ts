import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCoordonneesPage } from './modal-coordonnees.page';

describe('ModalCoordonneesPage', () => {
  let component: ModalCoordonneesPage;
  let fixture: ComponentFixture<ModalCoordonneesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCoordonneesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCoordonneesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
