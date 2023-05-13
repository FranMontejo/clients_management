import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPatienceComponent } from './add-new-patience.component';

describe('AddNewPatienceComponent', () => {
  let component: AddNewPatienceComponent;
  let fixture: ComponentFixture<AddNewPatienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewPatienceComponent]
    });
    fixture = TestBed.createComponent(AddNewPatienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
