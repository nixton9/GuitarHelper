import { useContext } from 'react'
import { CategoriesNav } from './CategoriesNav'
import { Styled } from '../styles/TopBar.styles'
import { MainContext } from '../utils/MainContext'
import { ModalTypes } from '../utils/types'
import { FaPlus, FaFilter, FaDrum } from 'react-icons/fa'

export const TopBar: React.FC = () => {
  const { setModal, query, setQuery } = useContext(MainContext)

  return (
    <Styled.Container>
      <Styled.Input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search videos"
      />
      <CategoriesNav />
      <Styled.Items>
        <Styled.Item>
          <FaPlus />
          <Styled.DropDown className="dropdown">
            <Styled.DropDownItem onClick={() => setModal(ModalTypes.ADDVIDEO)}>
              Link from Youtube
            </Styled.DropDownItem>
            <Styled.DropDownItem onClick={() => setModal(ModalTypes.ADDMUSIC)}>
              Music from computer
            </Styled.DropDownItem>
            <Styled.DropDownItem onClick={() => setModal(ModalTypes.SEARCH)}>
              Search on Youtube
            </Styled.DropDownItem>
          </Styled.DropDown>
        </Styled.Item>
        <Styled.Item
          onClick={() => setModal(ModalTypes.CATEGORIES)}
          className="categories"
        >
          <FaFilter />
        </Styled.Item>
        <Styled.Item onClick={() => setModal(ModalTypes.METRONOME)}>
          <FaDrum />
        </Styled.Item>
      </Styled.Items>
    </Styled.Container>
  )
}
