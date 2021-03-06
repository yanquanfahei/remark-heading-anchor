# Install

```js
npm i remark-heading-anchor
```

## Examples

``` jsx
import { remark } from "remark"
import remarkHeadingAnchor from "remark-heading-anchor"
import ReactMarkdown from 'react-markdown'

async function main() {
  const file = await remark()
  .use(remarkHeadingAnchor, {
    idPrefix: 'heading-'  
  })
  .process('# title')

  console.log(file, 'file') // [{title: 'title', level: 1, id: 'heading-0', index: 0}] 
}

main()

const HeadingComponent = ({ index, children }) => {
  return React.createElement(
    `h1`,
    {
      id: `heading-${index}`, // heading-0
    },
    children
  );
};

const App = () => {
  return (
    <ReactMarkdown
      components={{
        h1: HeadingComponent,
      }}
        includeElementIndex // Use with idPrefix
      >
      {/* ...content */}
    </ReactMarkdown>
  )
}

```
