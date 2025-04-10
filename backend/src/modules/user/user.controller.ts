// src/modules/user/user.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  findAll() {
    return [{ id: 1, name: 'User Test' }]; // placeholder
  }
}
