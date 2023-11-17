import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LectorController } from './lector/lector.controller';
import { LectorService } from './lector/lector.service';
import { LectorModule } from './lector/lector.module';
import { LibroService } from './libro/libro.service';
import { LibroController } from './libro/libro.controller';
import { LibroModule } from './libro/libro.module';
import { PrestamosService } from './prestamo/prestamo.service';
import { PrestamoController } from './prestamo/prestamo.controller';
import { PrestamoModule } from './prestamo/prestamo.module';

@Module({
  imports: [
    LectorModule,
    AppModule,
    LibroModule,
    PrestamoModule
  ],
  controllers: [ ],
  providers: [AppService ],
})
export class AppModule {}
