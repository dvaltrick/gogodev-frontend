import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheArtigoComponent } from './detalhe-artigo.component';

describe('DetalheArtigoComponent', () => {
  let component: DetalheArtigoComponent;
  let fixture: ComponentFixture<DetalheArtigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheArtigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
