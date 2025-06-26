import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    // Import necessary modules here, e.g., TypeOrmModule for database access
    TypeOrmModule.forFeature([User]), // Uncomment if using TypeORM with User entity
    // Other modules can be imported as needed  
  ],
  exports: [ TypeOrmModule ] // Export UsersService if it needs to be used in other modules
})
export class UsersModule {}
