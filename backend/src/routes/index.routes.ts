/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import multer from 'multer'
import productModel from '../models/product.model'
import { handleUpload } from '../utils/cloudinary'

const router = Router()
const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post('/products', upload.single('image'), async (req, res) => {
  try {
    if (req.file == null || req.file === undefined) {
      throw new Error('Arquivo não encontrado')
    }
    const newProduct = req.body
    const b64 = Buffer.from(req.file.buffer).toString('base64')
    const dataURI = 'data:' + req.file.mimetype + ';base64,' + b64
    const newProductDB = await productModel.create(newProduct)
    const responseImg = await handleUpload(dataURI, newProductDB._id)
    newProductDB.image = responseImg.url
    const responseUpdate = await productModel.update(
      newProductDB._id,
      newProductDB
    )
    res.send(responseUpdate)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.put('/products/:id', upload.single('image'), async (req, res) => {
  try {
    if (req.file == null || req.file === undefined) {
      throw new Error('Arquivo não encontrado')
    }
    const newProduct = req.body
    const { id } = req.params
    const b64 = Buffer.from(req.file.buffer).toString('base64')
    const dataURI = 'data:' + req.file.mimetype + ';base64,' + b64
    const responseImg = await handleUpload(dataURI, id)
    newProduct.image = responseImg.url
    const responseUpdate = await productModel.update(id, newProduct)
    res.send(responseUpdate)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

export default router
