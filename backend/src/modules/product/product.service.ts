import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filters: {
    name?: string;
    sortBy?: 'name' | 'price_usd' | 'expiration';
    order?: 'asc' | 'desc';
    uploadId?: string; 
  }) {
    const where: any = {};

    if (filters.name) {
      where.name = { contains: filters.name, mode: 'insensitive' };
    }

    if (filters.uploadId) {
      where.uploadId = filters.uploadId; 
    }

    const orderBy: any = {
      [filters.sortBy || 'createdAt']: filters.order || 'asc',
    };

    return await this.prisma.product.findMany({
      where,
      orderBy,
    });
  }
}
