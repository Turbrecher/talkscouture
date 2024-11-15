import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuchoMasQueAnunciosComponent } from './mucho-mas-que-anuncios.component';

describe('MuchoMasQueAnunciosComponent', () => {
  let component: MuchoMasQueAnunciosComponent;
  let fixture: ComponentFixture<MuchoMasQueAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuchoMasQueAnunciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuchoMasQueAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
