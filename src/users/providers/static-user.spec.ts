import { Test, TestingModule } from '@nestjs/testing';
import { StaticUser } from './static-user';

describe('StaticUser', () => {
  let provider: StaticUser;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaticUser],
    }).compile();

    provider = module.get<StaticUser>(StaticUser);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
