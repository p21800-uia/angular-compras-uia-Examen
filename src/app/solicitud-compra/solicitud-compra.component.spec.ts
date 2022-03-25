import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudCompraComponent } from './solicitud-compra.component';

describe('SolicitudCompraComponent', () => {
  let component: SolicitudCompraComponent;
  let fixture: ComponentFixture<SolicitudCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
