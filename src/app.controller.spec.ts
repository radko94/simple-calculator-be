import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.handleExpression('2 * 2')).toBe(4);
    });

    it('should return "Hello World!"', () => {
      expect(appController.handleExpression('2 + 3')).toBe(5);
    });

    it('should return "Hello World!"', () => {
      expect(appController.handleExpression('2 - 3')).toBe(-1);
    });

    it('should return "Hello World!"', () => {
      expect(appController.handleExpression('4 / 2')).toBe(2);
    });
  });
});
