import { TestBed, inject } from '@angular/core/testing';

import { GestaoClienteService } from './gestao-cliente.service';

describe('GestaoClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestaoClienteService]
    });
  });

  it('should be created', inject([GestaoClienteService], (service: GestaoClienteService) => {
    expect(service).toBeTruthy();
  }));
});
