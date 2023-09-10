import { useSelector } from 'react-redux'

const magazalarimiz = () => {
    const { mode } = useSelector((state) => state.darkMode)
  return (
    <>
      <section className="magaza" style={{
        background: mode ? '#333' : '#ece8e8',
        color: mode ? 'white' : 'black',
      }}>
        <div className="xerite">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9582524048187!2d-122.42377728432723!3d37.744123621694605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e42e1b683a9%3A0x225f82d9da5726a2!2s60+29th+St+%23343%2C+San+Francisco%2C+CA+94110%2C+USA!5e0!3m2!1sen!2sin!4v1501570738622"></iframe>
        </div>

        <ul>
          <li>Magaza 1<br/> Albert Aqarunov 8 Bakı, Azerbaycan <br/>0.6 km Directions</li>
          <li>
            Mağaza 2 <br/>Babək prospekti 36a Bakı, Azerbaycan <br/>Phone: +994 50 555 66
            88 <br/>Email: magaza2@mebel.com <br/>3.6 km Directions
          </li>
          <li>
            Mağaza 3<br/> Babək prospekti 41a Bakı, Azerbaycan <br/>Phone: +994 50 555 66
            88 <br/>Email: magaza3@mebel.com <br/> km Directions
          </li>
          <li>
            Mağaza 4<br/> H. Zərdabi küç 73 -2 3 Tac binalarının altı Bakı,
            Azerbaycan <br/>Phone: +994 50 555 66
            88 <br/>Email: magaza4@mebel.com <br/>5.8
            km Directions
          </li>
        </ul>
      </section>
    </>
  )
}

export default magazalarimiz
