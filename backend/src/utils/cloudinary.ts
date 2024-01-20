import { v2 as cloudinary } from 'cloudinary'
import { configDotenv } from 'dotenv'

configDotenv()

const CLOUD_NAME = process.env.CLOUD_NAME
const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET
const COLLECTION = process.env.MONGO_COLLECTION

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
})

export async function handleUpload (
  file: any,
  customFilename: string
): Promise<any> {
  const uploadOptions: any = {
    resource_type: 'image',
    overwrite: true,
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    folder: COLLECTION,
    public_id: customFilename
  }

  const res = await cloudinary.uploader.upload(file, uploadOptions)
  return res
}
