import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTransactionDto {
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({
    message: 'Please add some text',
  })
  text: string;

  @IsNumber()
  @IsNotEmpty({
    message: 'Please add a Positive or Negative number',
  })
  amount: number;
}
