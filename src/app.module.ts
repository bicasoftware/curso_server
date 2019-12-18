import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeriodosModule } from './periodos/periodos.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { FaltasModule } from './faltas/faltas.module';

@Module({
  imports: [PeriodosModule, TypeOrmModule.forRoot(), FaltasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
