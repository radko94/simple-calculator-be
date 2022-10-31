import { Injectable } from '@nestjs/common';

import { evaluate } from 'mathjs';

@Injectable()
export class AppService {
  public evaluateExpression(expression: string): string {
    return evaluate(expression);
  }
}
