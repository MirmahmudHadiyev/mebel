import { useState } from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import { products } from 'store/product'
import { useTranslation } from 'react-i18next'
import i18n from 'hooks/Reactİ18.ts/Translation'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const search = ({ history }) => {
  interface User {
    key: number
    name: string
  }
  const { mode } = useSelector((state) => state.darkMode)
  const { t } = useTranslation()
  const [isActive, setIsActive] = useState(false)
  const searchHandle = (e) => {
    e.preventDefault()
  }

  const [filter, setFilter] = useState('')
  const Filterr = (e) => {
    setFilter(e.target.value)
    setIsActive((search_result_ul) => !search_result_ul)
  }
  const dataSearch = products.filter((item) => {
    if (filter == '') {
      return ''
    } else if (item.title.toLowerCase().includes(filter.toLowerCase())) {
      return item
    }
  })

  const [remove, setRemove] = useState(false)
  const ciliked = () => {
    setRemove(() => !remove)
  }

  return (
    <>
      <form
        method="get"
        className="headerForm"
        onSubmit={searchHandle}
        style={{
          background: mode ? '#888' : '',
          color: mode ? 'white' : 'black',
        }}
      >
        <input
          type="text"
          name="query"
          placeholder={t('search')}
          onChange={Filterr}
        />

        <button type="submit" className="shadow">
          {' '}
          <FaSearchPlus className="search" />{' '}
        </button>
      </form>

      <ul
        className={isActive ? 'search_result_ul' : 'search_result_remove'}
        onClick={ciliked}
        style={{
          display: remove ? 'none' : 'block',
          background: mode ? '#333' : 'white',
          color: mode ? 'white' : 'black',
        }}
      >
        {dataSearch
          .filter((product) => product.title.toLowerCase().includes(filter))
          .map((product) => (
            <NavLink to={`/search/${product.id}`} className="search_nav">
              <li key={product.id}>
                <img src={product.img} />
                <div>
                  <span className="search_li_span1">
                    {i18n.t(product.title)}
                  </span>
                  <span className="search_li_span2">{product.price}</span>
                </div>
              </li>
            </NavLink>
          ))}
      </ul>
    </>
  )
}

export default search
