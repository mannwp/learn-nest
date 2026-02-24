import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { CatController } from './cat/cat.controller';

@Module({
  imports: [CrudModule],
  controllers: [AppController, CatController],
  providers: [AppService],
})
export class AppModule {}
