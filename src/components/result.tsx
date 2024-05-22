import React from 'react'

const Result = ({results}:any) => {
  return (
    <div>
      {results && results.map((result:any) => {
        
        return <h1 key={result.id}>{result.name}</h1>
      })}
    </div>
  )
}

export default Result
