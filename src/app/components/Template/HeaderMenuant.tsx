import { NavLink } from 'react-router-dom'
import { Menu, MenuProps, MenuTheme } from 'antd'
import { CgMenuBoxed } from 'react-icons/cg'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const HeaderMenuant = () => {
  const { mode } = useSelector((state) => state.darkMode)

  const onClick: MenuProps['onClick'] = (e) => {}
  type MenuItem = Required<MenuProps>['items'][number]
  const { t } = useTranslation()
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    theme?: 'light' | 'dark'
  ): MenuItem {
    return {
      key,
      children,
      label,
      icon,
      theme,
    } as MenuItem
  }

  const [theme, setTheme] = useState<MenuTheme>('light')
  const changeTheme = (value: boolean) => {
    setTheme(value ? '#333' : 'light')
  }

  const items: MenuItem[] = [
    getItem(
      <span style={{ color: mode ? '#C6E0E3' : 'black' }}>
        {t('furnitureList')}
      </span>,
      'sub1',
      <CgMenuBoxed />,
      [
        getItem(
          <NavLink to="/yataq" style={{ color: mode ? '#C6E0E3' : 'black' }}>
            {t('bed')}
          </NavLink>,
          ''
        ),
        getItem(
          <NavLink to="/qonaq" style={{ color: mode ? '#C6E0E3' : 'black' }}>
            {t('guest')}
          </NavLink>,
          ''
        ),
        getItem(
          <NavLink to="/genc" style={{ color: mode ? '#C6E0E3' : 'black' }}>
            {t('young')}
          </NavLink>,
          ''
        ),
        getItem(
          <NavLink to="/masa" style={{ color: mode ? '#C6E0E3' : 'black' }}>
            {t('table')}
          </NavLink>,
          ''
        ),
      ]
    ),
  ]

  return (
    <>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
          background: mode ? '#333' : 'white',
          color: mode ? '#C6E0E3' : 'black',
        }}
        defaultSelectedKeys={['1']}
        mode="vertical"
        theme={mode ? 'dark' : 'light'}
        items={items}
      />
    </>
  )
}

export default HeaderMenuant
