import {Entity, model, property} from '@loopback/repository';

@model()
export class GastoIngreso extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idGastoIngreso?: number;

  @property({
    type: 'string',
    required: true,
  })
  concepto: string;

  @property({
    type: 'string',
    required: true,
  })
  monto: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;


  constructor(data?: Partial<GastoIngreso>) {
    super(data);
  }
}

export interface GastoIngresoRelations {
  // describe navigational properties here
}

export type GastoIngresoWithRelations = GastoIngreso & GastoIngresoRelations;
