import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    // Inyectas el repositorio para la entidad User
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Crea un nuevo usuario y lo guarda en la base de datos.
   * 1. Usa `async` porque `save` es una operación asíncrona.
   * 2. `create` solo crea la instancia, `save` la persiste en la BD.
   * 3. Retorna la promesa con el usuario guardado.
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  /**
   * Busca y retorna todos los usuarios de la base de datos.
   * 1. Usa `async` porque `find` es una operación asíncrona.
   * 2. Usa `await` para esperar el resultado y luego lo retorna.
   */
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /**
   * Busca un usuario por su ID.
   * 1. Usa `async` porque `findOne` es asíncrono.
   * 2. Si el usuario no se encuentra, arroja una excepción `NotFoundException`.
   */
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado.`);
    }
    return user;
  }

  /**
   * Actualiza un usuario por su ID.
   * 1. Usa `async` para las operaciones de BD.
   * 2. `preload` es un método útil de TypeORM: busca el usuario por ID
   * y lo fusiona con los nuevos datos del DTO.
   * 3. Si no encuentra el ID, `preload` retorna `undefined`, por lo que lanzamos un error.
   * 4. Guarda y retorna el usuario actualizado.
   */
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.preload({
      id: id,
      ...updateUserDto,
    });
    if (!user) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado para actualizar.`);
    }
    return this.userRepository.save(user);
  }

  /**
   * Realiza un "borrado lógico" (soft delete) de un usuario.
   * 1. Marca la función como `async`.
   * 2. Llama a `findOne` (que ya es async) para obtener el usuario.
   * `findOne` ya se encarga de lanzar el error si no lo encuentra.
   * 3. Modifica la propiedad `estatus`.
   * 4. Guarda el usuario actualizado con `save` y espera el resultado con `await`.
   * 5. Retorna el usuario actualizado.
   */
  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    user.status = false;
    return await this.userRepository.save(user);
  }
}