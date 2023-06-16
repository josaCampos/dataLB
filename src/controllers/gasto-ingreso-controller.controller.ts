import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {GastoIngreso} from '../models';
import {GastoIngresoRepository} from '../repositories';

export class GastoIngresoControllerController {
  constructor(
    @repository(GastoIngresoRepository)
    public gastoIngresoRepository : GastoIngresoRepository,
  ) {}

  @post('/gasto-ingresos')
  @response(200, {
    description: 'GastoIngreso model instance',
    content: {'application/json': {schema: getModelSchemaRef(GastoIngreso)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GastoIngreso, {
            title: 'NewGastoIngreso',
            exclude: ['idGastoIngreso'],
          }),
        },
      },
    })
    gastoIngreso: Omit<GastoIngreso, 'idGastoIngreso'>,
  ): Promise<GastoIngreso> {
    return this.gastoIngresoRepository.create(gastoIngreso);
  }

  @get('/gasto-ingresos/count')
  @response(200, {
    description: 'GastoIngreso model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(GastoIngreso) where?: Where<GastoIngreso>,
  ): Promise<Count> {
    return this.gastoIngresoRepository.count(where);
  }

  @get('/gasto-ingresos')
  @response(200, {
    description: 'Array of GastoIngreso model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(GastoIngreso, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(GastoIngreso) filter?: Filter<GastoIngreso>,
  ): Promise<GastoIngreso[]> {
    return this.gastoIngresoRepository.find(filter);
  }

  @patch('/gasto-ingresos')
  @response(200, {
    description: 'GastoIngreso PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GastoIngreso, {partial: true}),
        },
      },
    })
    gastoIngreso: GastoIngreso,
    @param.where(GastoIngreso) where?: Where<GastoIngreso>,
  ): Promise<Count> {
    return this.gastoIngresoRepository.updateAll(gastoIngreso, where);
  }

  @get('/gasto-ingresos/{id}')
  @response(200, {
    description: 'GastoIngreso model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(GastoIngreso, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(GastoIngreso, {exclude: 'where'}) filter?: FilterExcludingWhere<GastoIngreso>
  ): Promise<GastoIngreso> {
    return this.gastoIngresoRepository.findById(id, filter);
  }

  @patch('/gasto-ingresos/{id}')
  @response(204, {
    description: 'GastoIngreso PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GastoIngreso, {partial: true}),
        },
      },
    })
    gastoIngreso: GastoIngreso,
  ): Promise<void> {
    await this.gastoIngresoRepository.updateById(id, gastoIngreso);
  }

  @put('/gasto-ingresos/{id}')
  @response(204, {
    description: 'GastoIngreso PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() gastoIngreso: GastoIngreso,
  ): Promise<void> {
    await this.gastoIngresoRepository.replaceById(id, gastoIngreso);
  }

  @del('/gasto-ingresos/{id}')
  @response(204, {
    description: 'GastoIngreso DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.gastoIngresoRepository.deleteById(id);
  }
}
