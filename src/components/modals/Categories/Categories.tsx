import React from 'react'
import { Styled } from '../../../styles/Modal.styles'
import { Category } from '../../../utils/types'
import { capitalize } from '../../../utils/helpers'
import { FaTrash } from 'react-icons/fa'

interface CategoriesProps {
  name: string
  setName: (name: string) => void
  categories: Category[]
  handleSubmit: (e: React.FormEvent) => void
  handleDelete: (id: string) => void
}

export const Categories: React.FC<CategoriesProps> = ({
  name,
  setName,
  categories,
  handleSubmit,
  handleDelete
}) => {
  return (
    <>
      <Styled.FormFlex onSubmit={handleSubmit}>
        <Styled.Input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Category name"
        />
        <Styled.Button disabled={!name}>Create</Styled.Button>
      </Styled.FormFlex>

      {categories.length ? (
        <Styled.CategoriesList>
          {categories.map(cat => (
            <Styled.Category key={cat.id}>
              <h4>{capitalize(cat.label)}</h4>
              <span onClick={() => handleDelete(cat.id)}>
                <FaTrash />
              </span>
            </Styled.Category>
          ))}
        </Styled.CategoriesList>
      ) : (
        <Styled.Message>You haven't created any categories yet</Styled.Message>
      )}
    </>
  )
}
