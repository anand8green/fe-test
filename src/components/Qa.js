import React, { useState } from 'react'
import './qa.css'
const Qa = ({ qaId, tocId, question, answer }) => {
  const [isExpanded, toggleExpanded] = useState(false)

  return (
    <div className="qa" id={tocId}>
      <div className="tab" onClick={() => toggleExpanded(!isExpanded)}>
        <div
          id={qaId}
          className="question"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <button>{isExpanded ? '-' : '+'}</button>
      </div>
      {isExpanded && (
        <div className="tab">
          <div dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      )}
    </div>
  )
}
export default Qa
