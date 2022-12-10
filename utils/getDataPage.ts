import path from "path"
import { promises as fs } from 'fs'

export async function getDataPageFromJSON(file: string): Promise<{ sections: any, meta: any }> {
  const bucket = path.join(process.cwd(), process.env.DIRECTORY!);

  return JSON.parse(await fs.readFile(`${bucket}/${file}`, 'utf8'))
}