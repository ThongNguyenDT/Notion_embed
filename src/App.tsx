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
import { useParams } from 'react-router-dom'

function App() {
  const dfRecordMap = defaultRecordMap as unknown as ExtendedRecordMap
  const testRecordMap = myRecordMap
  const [recordMap, setRecordMap] = useState(dfRecordMap)
  const params = useParams();
  useEffect(() => {
    async function getStaticProps(id: any) {

      const data = await fetch(
        `https://notion-api.splitbee.io/v1/page/${id?id:'97025400bdcd412eb087dd130af3302d'}`
      ).then(res => res.json());

      const result = testRecordMap

      result.block = data
      console.log(result);

      setRecordMap(result as unknown as ExtendedRecordMap);
    }
    getStaticProps(params.id)
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
