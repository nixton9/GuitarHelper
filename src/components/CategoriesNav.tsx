import React, { useContext } from 'react'
import { Styled } from '../styles/CategoiresNav.styles'
import { MainContext } from '../utils/MainContext'
import { Category } from '../utils/types'
import { capitalize } from '../utils/helpers'

interface CategoriesNavProps {
  activeCategory: string
  setActiveCategory: (active: string) => void
}

export const CategoriesNav: React.FC<CategoriesNavProps> = ({
  activeCategory,
  setActiveCategory
}) => {
  const { categories } = useContext(MainContext)

  const visibleCategories: Category[] = [
    { id: 'all', label: 'All' },
    ...categories
  ]

  return (
    <Styled.Container>
      <Styled.Nav>
        {visibleCategories.map(cat => (
          <Styled.Item
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={activeCategory === cat.id ? 'active' : ''}
          >
            {capitalize(cat.label)}
          </Styled.Item>
        ))}
      </Styled.Nav>
    </Styled.Container>
  )
}
