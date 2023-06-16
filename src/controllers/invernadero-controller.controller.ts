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
import {Invernadero} from '../models';
import {InvernaderoRepository} from '../repositories';

export class InvernaderoControllerController {
  constructor(
    @repository(InvernaderoRepository)
    public invernaderoRepository : InvernaderoRepository,
  ) {}

  @post('/invernaderos')
  @response(200, {
    description: 'Invernadero model instance',
    content: {'application/json': {schema: getModelSchemaRef(Invernadero)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Invernadero, {
            title: 'NewInvernadero',
            exclude: ['idInvernadero'],
          }),
        },
      },
    })
    invernadero: Omit<Invernadero, 'idInvernadero'>,
  ): Promise<Invernadero> {
    return this.invernaderoRepository.create(invernadero);
  }

  @get('/invernaderos/count')
  @response(200, {
    description: 'Invernadero model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Invernadero) where?: Where<Invernadero>,
  ): Promise<Count> {
    return this.invernaderoRepository.count(where);
  }

  @get('/invernaderos')
  @response(200, {
    description: 'Array of Invernadero model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Invernadero, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Invernadero) filter?: Filter<Invernadero>,
  ): Promise<Invernadero[]> {
    return this.invernaderoRepository.find(filter);
  }

  @patch('/invernaderos')
  @response(200, {
    description: 'Invernadero PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Invernadero, {partial: true}),
        },
      },
    })
    invernadero: Invernadero,
    @param.where(Invernadero) where?: Where<Invernadero>,
  ): Promise<Count> {
    return this.invernaderoRepository.updateAll(invernadero, where);
  }

  @get('/invernaderos/{id}')
  @response(200, {
    description: 'Invernadero model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Invernadero, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Invernadero, {exclude: 'where'}) filter?: FilterExcludingWhere<Invernadero>
  ): Promise<Invernadero> {
    return this.invernaderoRepository.findById(id, filter);
  }

  @patch('/invernaderos/{id}')
  @response(204, {
    description: 'Invernadero PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Invernadero, {partial: true}),
        },
      },
    })
    invernadero: Invernadero,
  ): Promise<void> {
    await this.invernaderoRepository.updateById(id, invernadero);
  }

  @put('/invernaderos/{id}')
  @response(204, {
    description: 'Invernadero PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() invernadero: Invernadero,
  ): Promise<void> {
    await this.invernaderoRepository.replaceById(id, invernadero);
  }

  @del('/invernaderos/{id}')
  @response(204, {
    description: 'Invernadero DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.invernaderoRepository.deleteById(id);
  }
}
