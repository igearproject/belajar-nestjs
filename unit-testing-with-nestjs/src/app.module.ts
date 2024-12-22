import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LatihanTestingModule } from './latihan-testing/latihan-testing.module';

@Module({
  imports: [LatihanTestingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
