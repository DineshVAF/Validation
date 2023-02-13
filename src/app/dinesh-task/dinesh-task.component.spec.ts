import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DineshTaskComponent } from './dinesh-task.component';

describe('DineshTaskComponent', () => {
  let component: DineshTaskComponent;
  let fixture: ComponentFixture<DineshTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DineshTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DineshTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
