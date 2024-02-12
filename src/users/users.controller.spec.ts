import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const serviceProvider={
    useFactory: () =>({
    // findAll:jest.fn(()=>"users"),
    create:jest.fn(),
    findAll:jest.fn(),
    find:jest.fn(),
    update:jest.fn(),
    remove:jest.fn()
  
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll',()=>
  {
    it('should return a status of 400',()=>
    {
      expect(controller.findAll());
    });
  });

});
