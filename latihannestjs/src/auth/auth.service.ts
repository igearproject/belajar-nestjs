import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { hash, genSalt, compare } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const checkUserExists = await this.prisma.users.findFirst({
      where: { email: data.email },
    });
    if (checkUserExists) {
      throw new HttpException(
        'user already registered',
        HttpStatus.BAD_REQUEST,
      );
    }
    data.password = await hash(data.password, await genSalt());

    await this.prisma.users.create({
      data: data,
    });

    return {
      statusCode: 200,
      message: 'regiter succesfully',
    };
  }

  async login(data: LoginDto) {
    const checkUser = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });
    if (!checkUser) {
      throw new HttpException(
        'wroong email or password !',
        HttpStatus.BAD_REQUEST,
      );
    }
    const checkPassword = await compare(data.password, checkUser.password);
    if (!checkPassword) {
      throw new HttpException(
        'wroong email or password',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      const token = await this.generateJWT({
        userId: checkUser.id,
        name: checkUser.name,
      });

      return {
        statusCode: 200,
        message: 'login successfully',
        data: {
          accessToken: token,
        },
      };
    }
  }

  async generateJWT(
    payload: any,
    expiredIn: string = process.env.JWT_EXPIRED_IN,
  ) {
    return await this.jwtService.sign(payload, {
      expiresIn: expiredIn,
    });
  }

  async profile(userId: number) {
    return this.prisma.users.findFirst({
      where: { id: userId },
      select: {
        name: true,
        email: true,
        avatar: true,
        tasks: true,
      },
    });
  }

  async uploadAvatar(userId: number, avatar: string) {
    const checkUser = await this.prisma.users.findFirst({
      where: { id: userId },
    });
    if (!checkUser) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
    const updateAvatar = await this.prisma.users.update({
      data: { avatar },
      where: { id: userId },
    });
    return {
      statusCode: 200,
      message: 'update avatar successfully',
      data: updateAvatar,
    };
  }
}
