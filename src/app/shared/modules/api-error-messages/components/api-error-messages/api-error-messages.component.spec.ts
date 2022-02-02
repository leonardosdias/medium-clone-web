import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIErrorMessagesComponent } from './api-error-messages.component';

describe('APIErrorMessagesComponent', () => {
  let component: APIErrorMessagesComponent;
  let fixture: ComponentFixture<APIErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIErrorMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APIErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
