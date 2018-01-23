import { TestBed, inject } from '@angular/core/testing';

import { DetalheArtigoService } from './detalhe-artigo.service';

describe('DetalheArtigoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetalheArtigoService]
    });
  });

  it('should be created', inject([DetalheArtigoService], (service: DetalheArtigoService) => {
    expect(service).toBeTruthy();
  }));
});
