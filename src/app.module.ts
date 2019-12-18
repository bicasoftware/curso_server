import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeriodosModule } from './periodos/periodos.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { FaltasModule } from './faltas/faltas.module';
import { ServiceController } from './service/service.controller';

@Module({
  imports: [PeriodosModule, TypeOrmModule.forRoot(), FaltasModule],
  controllers: [AppController, ServiceController],
  providers: [AppService],
})
export class AppModule {}
