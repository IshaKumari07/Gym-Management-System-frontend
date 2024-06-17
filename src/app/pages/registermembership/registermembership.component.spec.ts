import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermembershipComponent } from './registermembership.component';

describe('RegistermembershipComponent', () => {
  let component: RegistermembershipComponent;
  let fixture: ComponentFixture<RegistermembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistermembershipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistermembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
