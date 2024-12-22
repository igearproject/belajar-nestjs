import { Module } from '@nestjs/common';
import { LatihanTestingService } from './latihan-testing.service';

@Module({
  providers: [LatihanTestingService]
})
export class LatihanTestingModule {}
