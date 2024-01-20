import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'dj2ku5dzm',
  api_key: '817853282463639',
  api_secret: 'O8kVVwHAk7Taz2MO5m3hDHidHVk'
})

export async function handleUpload (
  file: any,
  customFilename: string
): Promise<any> {
  const uploadOptions: any = {
    resource_type: 'image',
    overwrite: true,
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp']
  }

  uploadOptions.public_id = customFilename

  const res = await cloudinary.uploader.upload(file, uploadOptions)
  return res
}
