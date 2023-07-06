import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditissueComponent } from './editissue.component';

describe('EditissueComponent', () => {
  let component: EditissueComponent;
  let fixture: ComponentFixture<EditissueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditissueComponent]
    });
    fixture = TestBed.createComponent(EditissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
