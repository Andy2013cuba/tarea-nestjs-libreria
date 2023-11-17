import { Module } from '@nestjs/common';
import { LectorController } from './lector.controller';
import { LectorService } from './lector.service';

@Module({
  imports: [],
  controllers: [LectorController],
  providers: [LectorService],
})
export class LectorModule {}