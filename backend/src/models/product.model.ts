import { Schema, model, type Model } from 'mongoose'
import type IProduct from '../interfaces/product'

class Product {
  public readonly model: Model<IProduct>

  constructor () {
    const productSchema = new Schema<IProduct>({
      name: String,
      description: String,
      price: Number,
      promotionalPrice: Number,
      image: String,
      quantity: Number
    })

    this.model = model<IProduct>('Product', productSchema)
  }

  async create (product: IProduct): Promise<IProduct> {
    const createdProduct = await this.model.create(product)
    return createdProduct
  }

  async update (id: string, product: IProduct): Promise<IProduct> {
    const updatedProduct = await this.model.findByIdAndUpdate(id, product, { new: true })
    return updatedProduct as IProduct
  }
}

export default new Product()

/*

{
  "_id": "65ac0901152eb446b4f1406f",
  "name": "PRODUTO LOKO",
  "description": "Cigarrao brutoooo",
  "price": 15,
  "quantity": 10,
  "__v": 0,
  "image": "http://res.cloudinary.com/dj2ku5dzm/image/upload/v1705773315/tabacaria/65ac0901152eb446b4f1406f.jpg"
}

{
  "_id": "65ac094c8e4a29a5cd188598",
  "name": "PRODUTO LOKO 2",
  "description": "Cigarrao brutoooo",
  "price": 15,
  "quantity": 10,
  "__v": 0,
  "image": "http://res.cloudinary.com/dj2ku5dzm/image/upload/v1705773390/tabacaria/65ac094c8e4a29a5cd188598.png"
}

*/
