import { Test, TestingModule } from '@nestjs/testing';
import { MongoUser } from './mongo-user';

describe('MongoUser', () => {
  let provider: MongoUser;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoUser],
    }).compile();

    provider = module.get<MongoUser>(MongoUser);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
