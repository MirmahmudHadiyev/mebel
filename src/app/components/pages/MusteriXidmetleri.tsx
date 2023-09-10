import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
const MusteriXidmetleri = () => {
  const { t } = useTranslation()
  const { mode } = useSelector((state) => state.darkMode)
  return (
    <>
      <section
        className="musteri"
        style={{
          background: mode ? '#333' : 'white',
          color: mode ? 'white' : 'black',
        }}
      >
        <div>
          <p>{t('musteriF')}</p>
          <p>{t('musteriF1')}</p>
          <p>{t('musteriMeqaleF1')}</p>
          <p>{t('zemanet1')}</p>
          <p>{t('zemanet2')}!</p>
          <p>{t('chatdirilma1')}</p>
          <p>{t('chatdirilma2')}</p>
        </div>
      </section>
    </>
  )
}

export default MusteriXidmetleri
