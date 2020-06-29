export class Subscription {

  name: string;
  price: number;
  key?: string;
  isEdit?: boolean;

  constructor(values: any) {
    this.name = values.name;
    this.price = values.price;
    if (values.key) { this.key = values.key }
  }
}

