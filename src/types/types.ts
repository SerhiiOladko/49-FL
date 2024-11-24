export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number,
    count: number;
  };
}


// * типизация одного ревью из IStoreProduct
export interface IStoreReview {
  rating: number,
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

// * типизация одного продукта из IStoreData
export interface IStoreProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[],
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  },
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  // * тип review указан в отдельном интерфейсе
  reviews: IStoreReview[],
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  },
  images: string[],
  thumbnail: string;
}

// * типизация данных для сервера из Store.tsx
export interface IStoreData {
  products: IStoreProduct[];
  total: number,
  skip: number,
  limit: number;
}
