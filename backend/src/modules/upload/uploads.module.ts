import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { UploadsController } from './uploads.controller';

@Module({
  imports: [BullModule.registerQueue({
    name: 'uploads',
  })],
  controllers: [UploadsController],
})
export class UploadsModule {}
