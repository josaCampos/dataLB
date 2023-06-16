import {Entity, model, property} from '@loopback/repository';

@model()
export class Invernadero extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idInvernadero?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  cultivo: string;

  @property({
    type: 'string',
    required: true,
  })
  variedad: string;


  constructor(data?: Partial<Invernadero>) {
    super(data);
  }
}

export interface InvernaderoRelations {
  // describe navigational properties here
}

export type InvernaderoWithRelations = Invernadero & InvernaderoRelations;
