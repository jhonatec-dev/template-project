/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router, type Request, type Response } from 'express'
import multer from 'multer'
import { handleUpload } from '../utils/cloudinary'

const router = Router()
const storage = multer.memoryStorage()
const upload = multer({ storage, fileFilter })

function fileFilter (
  req: Request,
  file: Express.Multer.File,
  callback: multer.FileFilterCallback
): void {
  const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'] // Adicione os formatos permitidos aqui

  if (allowedFormats.includes(file.mimetype)) {
    callback(null, true)
  } else {
    callback(new Error('Formato de arquivo não suportado'))
  }
}

// Adicione uma função para gerar um nome de arquivo personalizado
// Adicione uma função para gerar um nome de arquivo personalizado
const generateCustomFilename = (file: Express.Multer.File): string => {
  const originalname = file.originalname
  const extension = originalname.slice(
    ((originalname.lastIndexOf('.') - 1) >>> 0) + 2
  ) // Obtém a extensão do arquivo
  const customFilename =
    'arquivo_personalizado_' + Date.now() + '.' + extension
  console.log(customFilename, 'customFilename', originalname)
  return file.originalname
}

router.post(
  '/upload',
  upload.single('image'),
  async (req: Request, res: Response) => {
    try {
      console.log('FILE RIGHT HERE \n\n\n\n\n\n', req.file, '\n\n\n\n\n\n')
      console.log('BODY RIGHT HERE \n\n\n\n\n\n', req.body.name, '\n\n\n\n\n\n')
      if (req.file == null || req.file === undefined) {
        throw new Error('Arquivo não encontrado')
      }
      const b64 = Buffer.from(req.file.buffer).toString('base64')
      const dataURI = 'data:' + req.file.mimetype + ';base64,' + b64
      const customFilename = generateCustomFilename(req.file)
      const cldRes = await handleUpload(dataURI, customFilename)
      res.json(cldRes)
    } catch (error) {
      console.log('dentro da rota, erro: ', error)
      res.status(400).send({
        message: 'Erro ao enviar o arquivo',
        error
      })
    }
  }
)

export default router
