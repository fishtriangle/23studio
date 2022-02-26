import fs from 'fs'
import path from 'path'
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), 'projects')

export function getProjectsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allProjectsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const matterResult = matter(fileContents)
    // console.log(matterResult)

    return {
      id,
      ...matterResult.data
    }
  })

  return allProjectsData
}
