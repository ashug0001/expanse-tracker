import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './transactions.model';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction)
    private transactionModel: typeof Transaction,
  ) {}

  create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const { text, amount } = createTransactionDto;
    return this.transactionModel.create({ text, amount });
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionModel.findAll();
  }

  findOne(id: number): Promise<Transaction | null> {
    return this.transactionModel.findOne({ where: { id } });
  }

  remove(id: number): number {
    return id;
  }
}
