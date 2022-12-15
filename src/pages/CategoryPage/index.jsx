import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryPage() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>CategoryPage</div>
  )
}
