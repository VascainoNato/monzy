// src/modules/auth/auth.controller.ts
import {
  Controller,
  Get,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleRedirect(@Req() req: Request, @Res() res: Response) {
    const user = req.user as {
      email: string;
      name: string;
      image?: string;
    };

    const existingUser = await this.userService.findUserByEmail(user.email);

    const finalUser = existingUser
      ? existingUser
      : await this.userService.createUser(user.email, '', user.name);

    const token = this.jwtService.sign({
      sub: finalUser.id,
      email: finalUser.email,
    });

    return res.redirect(`http://localhost:3000/auth/callback?token=${token}`);
  }
}
