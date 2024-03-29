import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddJobPage } from './add-job.page';

describe('AddJobPage', () => {
  let component: AddJobPage;
  let fixture: ComponentFixture<AddJobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
