import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterHubComponent } from './writer-hub.component';

describe('WriterHubComponent', () => {
  let component: WriterHubComponent;
  let fixture: ComponentFixture<WriterHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriterHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriterHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
