import { remark } from "remark"
import remarkHeadingAnchor from "../src/index.js"

async function main() {
  const file = await remark()
  .use(remarkHeadingAnchor, {
    idPrefix: 'heading-'  
  })
  .process('# title')

  console.log(file, 'file') // [ { title: 'title', index: 0, id: 'heading-0', level: 1 } ] 
}

main()