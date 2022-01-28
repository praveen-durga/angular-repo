import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  private productList: Array<any> = [
    {
      id: 1,
      product: 'Chais',
      supplierId: 1,
      categoryId: 1,
      unit: '10 boxes x 20 bags',
      price: 18,
    },
    {
      id: 2,
      product: 'Chang',
      supplierId: 1,
      categoryId: 1,
      unit: '24 - 12 oz bottles',
      price: 19,
    },
    {
      id: 3,
      product: 'Aniseed Syrup',
      supplierId: 1,
      categoryId: 2,
      unit: '12 - 550 ml bottles',
      price: 10,
    },
  ];

  constructor() {}
}
