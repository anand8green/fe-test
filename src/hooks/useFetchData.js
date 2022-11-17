import React, { useEffect, useState } from 'react'

export const useFetchData = ({ url }) => {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((json) => setdata(json))
  }, [])

  return {
    data,
  }
}
