import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {GastoIngreso, GastoIngresoRelations} from '../models';

export class GastoIngresoRepository extends DefaultCrudRepository<
  GastoIngreso,
  typeof GastoIngreso.prototype.idGastoIngreso,
  GastoIngresoRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(GastoIngreso, dataSource);
  }
}
