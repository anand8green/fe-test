import React, { useState } from 'react'
import './toggleComponent.css'
import Qa from './Qa'

const ToggleComponent = ({ title, children, queries }) => {
  const [isExpanded, toggleExpanded] = useState(false)
  return (
    <div className="container">
      <div className="tab" onClick={() => toggleExpanded(!isExpanded)}>
        <h3>{title}</h3>
        <button>{isExpanded ? '-' : '+'}</button>
      </div>
      {isExpanded &&
        queries?.map((query) => (
          <Qa
            key={query.qa_id}
            qaId={query.qa_id}
            tocId={query.tocId}
            question={query.question}
            answer={query.answer}
          />
        ))}
      {isExpanded &&
        children?.map((item) => (
          <div className="tab-inner">
            <ToggleComponent key={item.title} {...item} />
          </div>
        ))}
    </div>
  )
}
export default ToggleComponent
