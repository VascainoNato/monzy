import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Express } from 'express';
import { ApiConsumes, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Uploads') 
@Controller('uploads')
export class UploadsController {
  constructor(
    @InjectQueue('uploadQueue') private readonly uploadQueue: Queue,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data') 
  @ApiBody({                       
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async upload(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo foi enviado.');
    }

    await this.uploadQueue.add('process-csv', {
      buffer: file.buffer,
      originalname: file.originalname,
    });

    return {
      message: 'Arquivo recebido e enviado para processamento!',
    };
  }
}
