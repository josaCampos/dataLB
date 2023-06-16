import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Alerta, AlertaRelations} from '../models';

export class AlertaRepository extends DefaultCrudRepository<
  Alerta,
  typeof Alerta.prototype.idAlerta,
  AlertaRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Alerta, dataSource);
  }
}
