import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Post()
  public handleExpression(@Body('expression') expression: string): string {
    return this.appService.evaluateExpression(expression);
  }
}
