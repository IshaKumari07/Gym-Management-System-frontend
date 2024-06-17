import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmembershipComponent } from './addmembership.component';

describe('AddmembershipComponent', () => {
  let component: AddmembershipComponent;
  let fixture: ComponentFixture<AddmembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddmembershipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddmembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
