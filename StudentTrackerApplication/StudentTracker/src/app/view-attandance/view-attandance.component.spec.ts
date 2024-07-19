import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttandanceComponent } from './view-attandance.component';

describe('ViewAttandanceComponent', () => {
  let component: ViewAttandanceComponent;
  let fixture: ComponentFixture<ViewAttandanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAttandanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAttandanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

