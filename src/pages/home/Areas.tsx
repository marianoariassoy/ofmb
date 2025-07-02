import AreasItem from './AreasItem'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Areas = ({ lan }: { lan: string }) => {
  const { data, loading } = useFetch(`/areas`)

  if (loading)
    return (
      <div className='w-full h-full aspect-video'>
        <Loader />
      </div>
    )

  return (
    <section
      id='practicas'
      className='py-12 relative'
    >
      <div className='w-full max-w-6xl m-auto px-4 mb-12 lg:mb-40'>
        <h1 className='font-bold text-xl'>{lan === 'ESP' ? 'áreas de prácticas' : 'our areas of practice'}</h1>
      </div>
      <div className='w-full h-42 bg-primary hidden lg:block'></div>
      <img
        src='/assets/images/equipo.jpg'
        alt='Equipo'
        className='w-full mb-4 lg:mb-0'
      />
      <div className='lg:absolute w-full top-32 lg:top-40 z-20'>
        <div className='w-full max-w-6xl m-auto px-4 flex flex-col gap-y-20'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {data &&
              data.map(item => (
                <AreasItem
                  key={item.id}
                  data={item}
                  lan={lan}
                />
              ))}
          </div>
          <h1 className='font-bold text-xl hidden lg:block'>{lan === 'ESP' ? 'nuestro equipo' : 'our team'}</h1>
        </div>
      </div>
    </section>
  )
}

export default Areas
