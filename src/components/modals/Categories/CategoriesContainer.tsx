import React, { useState, useContext } from 'react'
import { Categories } from './Categories'
import { MainContext } from '../../../utils/MainContext'
import { SingleModalProps } from '../../../utils/types'

const CategoriesContainer: React.FC<SingleModalProps> = ({
  setIsLoading,
  setError
}) => {
  const { categories, addCategory, deleteCategory } = useContext(MainContext)

  const [name, setName] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (name) {
      const newCategory = {
        id: name.toLowerCase().replace(' ', ''),
        label: name
      }
      addCategory(newCategory)
      setName('')
    }
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      deleteCategory(id)
    }
  }

  return (
    <Categories
      name={name}
      setName={setName}
      categories={categories}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
    />
  )
}

export default CategoriesContainer
