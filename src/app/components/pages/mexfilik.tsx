import { useTranslation } from "react-i18next"
import { useSelector } from 'react-redux'

const mexfilik = () => {
    const {t} = useTranslation();
    const { mode } = useSelector((state) => state.darkMode)

  return (
    <>
      <section className="mexfi" style={{
        background: mode ? '#333' : '#ece8e8',
        color: mode ? 'white' : 'black',
      }}>
        <span className="mexfi_span">{t('mexfi1F')}</span>
        <div className="mexfi_div">
            <p>{t('mexfiF')}</p>
            <p>{t('qeydiyyatF')}</p>
            <p>{t('topMelumatF')}</p>
            <p>{t('topMelumat1F')}</p>
            <p>{t('tehlukesizlikF')}</p>
            <p>{t('tehlukesizlik1F')}</p>
            <p>{t('COOKIESF')}</p>
            <p>{t('COOKIES1F')}</p>
        </div>
      </section>
    </>
  )
}

export default mexfilik
