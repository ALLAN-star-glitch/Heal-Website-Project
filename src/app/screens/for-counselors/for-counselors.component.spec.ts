import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCounselorsComponent } from './for-counselors.component';

describe('ForCounselorsComponent', () => {
  let component: ForCounselorsComponent;
  let fixture: ComponentFixture<ForCounselorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForCounselorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForCounselorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
