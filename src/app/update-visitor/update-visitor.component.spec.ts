import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVisitorComponent } from './update-visitor.component';

describe('UpdateVisitorComponent', () => {
  let component: UpdateVisitorComponent;
  let fixture: ComponentFixture<UpdateVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
