import EquipoItem from './EquipoItem'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'

const Equipo = ({ lan }: { lan: string }) => {
  const { data, loading } = useFetch(`/team`)

  if (loading)
    return (
      <div className='w-full h-full aspect-video'>
        <Loader />
      </div>
    )

  return (
    <section id='equipo'>
      <div className='w-full max-w-6xl m-auto px-4 py-12'>
        <h2 className='text-4xl lg:text-7xl font-medium text-right'>{lan === 'ESP' ? 'Equipo' : 'Team'}</h2>
      </div>
      <div>
        {data &&
          data.map((item, index) => (
            <EquipoItem
              key={item.id}
              data={item}
              lan={lan}
              index={index}
            />
          ))}
      </div>
      <div className='bg-primary '>
        <div className='w-full max-w-6xl m-auto flex justify-between items-center px-4 py-12 text-white'>
          <div className='flex-1 font-medium lg:text-xl tracking-wide'>Attorneys at Law</div>
          <div className='text-right'>
            <img
              src='/assets/iso.svg'
              alt='logo'
              className='h-20 lg:h-54'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Equipo
