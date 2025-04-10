import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { UploadsController } from './uploads.controller';
import { UploadsProcessor } from './uploads.processor';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    BullModule.registerQueue({
      name: 'uploadQueue',
    }),
  ],
  controllers: [UploadsController],
  providers: [UploadsProcessor],
})
export class UploadsModule {}
