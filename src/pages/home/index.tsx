import Layout from '../../layout/Layout'
import Slider from './Slider'
import About from './About'
import Firma from './Firma'
import Areas from './Areas'
import Equipo from './Equipo'
import Contacto from './Contacto'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()

  return (
    <Layout>
      <Slider lan={lan} />
      <About lan={lan} />
      <Firma lan={lan} />
      <Areas lan={lan} />
      <Equipo lan={lan} />
      <Contacto lan={lan} />
    </Layout>
  )
}

export default Index
