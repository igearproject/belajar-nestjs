import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    // type UserWithoutPassword = Omit<User, 'password'>;

    await this.appService.create(name, email, hashPassword);
    // const { ...userWithoutPassword } = { ...user };
    // const { password , ...result } = user;
    return {
      message: 'Register user successfully',
    };
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
    // if wont to use express to request
    // @Res() response: Response,
  ) {
    const user = await this.appService.findOne({
      where: { email },
    });

    if (!user) {
      throw new BadRequestException('wrong email or password !');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('wrong email or password !!');
    }

    const jwt = await this.jwtService.signAsync({
      userId: user.id,
      userName: user.name,
    });

    response.cookie('jwt', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 1000 * 24, //24 jam on ms
    });

    // return response.json({
    //   message: 'Login successfully',
    // });
    return {
      message: 'Login successfully',
    };
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const jwt = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(jwt);
      if (!data) {
        throw new UnauthorizedException();
      }
      const user = await this.appService.findOne({
        where: { id: data['userId'] },
      });

      // const { password, ...result } = user;
      // return result;
      delete user.password;
      return user;
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');

    return {
      message: 'logout successfully',
    };
  }
}
