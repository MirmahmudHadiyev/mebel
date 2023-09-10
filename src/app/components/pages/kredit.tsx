import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const kredit = () => {
  const { t } = useTranslation()
  const { mode } = useSelector((state) => state.darkMode)
  return (
    <>
      <section className="kredit" style={{
        background: mode ? '#333' : '#ece8e8',
        color: mode ? 'white' : 'black',
      }}>
        <span>
          {t('deyisF')}
        </span>
        <p>
          {t('yanlisF')}
        </p>
        <p>
          {' '}
          {t('mudafieF')}
        </p>
        <div className="sertler" style={{color: mode ? 'black' : 'black'}}>
          <span className='p1'>{t('sert')}</span>
          <div>
            <p className='p1'>{t('xidmetF')}</p>
            <p>{t('komissiyaF')}</p>
          </div>
          <div>
            <p className='p1'>{t('sertF')}</p>
            <p>
              {t('sert1F')}
            </p>
          </div>
          <div>
            <p className='p1'>{t('prosesF')}</p>
            <p>
              {t('proses1F')}
            </p>
          </div>
          <div>
            <p className='p1'>{t('odenisF')}</p>
            <p>
              {t('odenis1F')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default kredit
