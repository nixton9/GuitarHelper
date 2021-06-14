import React, { useContext } from 'react'
import { Styled } from '../styles/CategoiresNav.styles'
import { MainContext } from '../utils/MainContext'
import { Category } from '../utils/types'
import { capitalize } from '../utils/helpers'

export const CategoriesNav: React.FC = () => {
  const { categories, activeCategory, setActiveCategory } =
    useContext(MainContext)

  const visibleCategories: Category[] = [
    { id: 'all', label: 'All' },
    ...categories
  ]

  return (
    <div>
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
    </div>
  )
}
