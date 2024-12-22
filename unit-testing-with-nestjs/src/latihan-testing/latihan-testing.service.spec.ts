import { Test, TestingModule } from '@nestjs/testing';
import { LatihanTestingService } from './latihan-testing.service';

describe('LatihanTestingService', () => {
  let service: LatihanTestingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LatihanTestingService],
    }).compile();

    service = module.get<LatihanTestingService>(LatihanTestingService);
  });

  it('create latihan', async () => {
    const newData = {
      name: 'nama 1',
      email: 'nama1@gmail.com',
    };
    expect(await service.create(newData)).toEqual([newData]);
  });

  it('find all latihan', async () => {
    const data1 = {
      name: 'nama 1',
      email: 'nama1@gmail.com',
    };
    const data2 = {
      name: 'nama 2',
      email: 'nama2@gmail.com',
    };
    await service.create(data1);
    await service.create(data2);
    expect(await service.findAll()).toEqual([data1, data2]);
  });

  it('find one latihan', async () => {
    const data1 = {
      name: 'nama 1',
      email: 'nama1@gmail.com',
    };
    const data2 = {
      name: 'nama 2',
      email: 'nama2@gmail.com',
    };
    await service.create(data1);
    await service.create(data2);
    expect(await service.findOne(data1.email)).toEqual(data1);
  });
});
