import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(email: string, password: string, name: string) {
    console.warn('Creating user:', { email, name });
  
    const hashedPassword =
      password && password.length >= 6 ? await hash(password, 10) : '';
  
    return this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
  }

  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async login(email: string, password: string) {
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new Error('User not found'); 
    }

    const isPasswordValid = await compare(password, user.password); 
    if (!isPasswordValid) {
      throw new Error('Invalid password'); 
    }

    return user; 
  }
}