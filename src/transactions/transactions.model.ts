import { Column, DataType, Default, Model, Table } from 'sequelize-typescript';

@Table
export class Transaction extends Model {
  @Column
  text: string;

  @Column
  amount: number;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  createdAt: Date;
}
