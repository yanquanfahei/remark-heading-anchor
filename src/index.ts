import { visit, Node } from 'unist-util-visit'
import { VFileWithOutput } from 'unified'

export interface IHeading {
  title: string;
  level: number;
  index: number | null;
  id: string;
}

export interface IAnchorOptions {
  idPrefix: string
}

export interface IExtendNode extends Node {
  depth: number;
  children: any[]
}

function getFileList(root: IExtendNode, options?: IAnchorOptions) {
  const headList: IHeading[] = [] 
  visit(root, (node, index: number | null) => {
    if (node.type === 'heading') {
      const id = options?.idPrefix ? `${options.idPrefix}${index}` : index + '';
      headList.push({
        title: node.children[0].value,
        index,
        id,
        level: node.depth
      })
    }
  })
  return headList
}


export default function remarkHeadingAnchor(options?: IAnchorOptions) {
  return (root: IExtendNode, file: VFileWithOutput<IHeading[]>) => {
    file.result = getFileList(root, options)
  }
} 