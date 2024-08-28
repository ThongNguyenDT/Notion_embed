import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'

import defaultRecordMap from './record-map.json'
import myRecordMap from './record-map copy.json'
import { useEffect, useState } from 'react'


function App() {
  const dfRecordMap = myRecordMap as unknown as ExtendedRecordMap
  const testRecordMap = myRecordMap 
  const [recordMap, setRecordMap] = useState(dfRecordMap)

  useEffect(() => {
    document.title = "Notion Render tool"
    async function getStaticProps(id: any) {

      const data = await fetch(
        `https://notion-fetch-api.vercel.app/api/${id?id:'97025400bdcd412eb087dd130af3302d'}`
      ).then(res => res.json());

      const result = testRecordMap

      result.block = data
      // console.log(`https://notion-fetch-api.vercel.app/api/${id?id:'97025400bdcd412eb087dd130af3302d'}`);

      setRecordMap(result as unknown as ExtendedRecordMap);
    }
      const parts = document.location.href.split('/');
      const notionIndex = parts.indexOf('Notion_embed');

      if (notionIndex !== -1 && parts[notionIndex + 1]) {
        const id = parts[notionIndex + 1];
        getStaticProps(id)
      }
  }, [])

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={true}
      darkMode={false}
      components={{
        Code,
        Collection,
        Equation,
        Pdf,
        Modal
      }}
    />
  )
}

export default App
