import React from 'react'
import './App.css'

import ToggleComponent from './components/ToggleComponent'
import { useFetchData } from './hooks/useFetchData'

const App = () => {
  const { data: sections } = useFetchData({ url: 'api/sections.json' })
  const { data: Qa1 } = useFetchData({
    url: 'api/company-dealings/qa.json',
  })
  const { data: Qa2 } = useFetchData({
    url: 'api/directors-officers-management/qa.json',
  })

  const createDirectoryStructure = (sections, parentId, id) => {
    return sections
      .filter((item) => item[id] === parentId)
      .map((item) => {
        const children = createDirectoryStructure(
          sections,
          item.id,
          'parentId'
        ).map((childNode) => {
          const queries = [...Qa1, ...Qa2].filter(
            (ques) => ques.sectionId === childNode.id
          )
          return { ...childNode, queries }
        })
        return { ...item, children }
      })
  }
  const chapters = createDirectoryStructure(sections, -1, 'id')

  console.log(chapters)

  return (
    <div>
      {chapters.length === 0 ? (
        <div>Loading....</div>
      ) : (
        chapters.map((item) => <ToggleComponent key={item.id} {...item} />)
      )}
    </div>
  )
}

export default App
