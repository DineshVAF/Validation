import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutformComponent } from './putform.component';

describe('PutformComponent', () => {
  let component: PutformComponent;
  let fixture: ComponentFixture<PutformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
