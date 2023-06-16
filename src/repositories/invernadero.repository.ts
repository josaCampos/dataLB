import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {Invernadero, InvernaderoRelations} from '../models';

export class InvernaderoRepository extends DefaultCrudRepository<
  Invernadero,
  typeof Invernadero.prototype.idInvernadero,
  InvernaderoRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(Invernadero, dataSource);
  }
}
