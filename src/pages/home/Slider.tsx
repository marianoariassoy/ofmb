import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'

interface Item {
  id: number
  image: string
  title_es: string
  title_en: string
}

interface SliderItemProps {
  data: Item
  lan: string
}

const SliderItem = ({ data, lan }: SliderItemProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = data.image

    image.onload = () => {
      setIsLoading(false)
    }
  }, [data.image])

  return isLoading ? (
    <div className='w-full h-screen'>
      <Loader />
    </div>
  ) : (
    <div className='relative h-screen w-full'>
      <div className='absolute w-full left-0 top-1/2 z-20 px-4'>
        <div className='w-full flex flex-col gap-2 lg:gap-4 max-w-3xl m-auto p-8 backdrop-blur-md bg-black/30 text-center'>
          <span className='text-primary font-medium text-sm'>
            {lan === 'ESP'
              ? 'DERECHO CORPORATIVO, COMERCIAL Y EMPRESARIAL GENERAL, y DERECHO MIGRATORIO'
              : 'CORPORATE LAW, COMMERCIAL AND GENERAL BUSINESS and IMMIGRATION LAW'}
          </span>
          <span className='text-white font-bold text-3xl lg:text-5xl'>
            {lan === 'ESP' ? data.title_es : data.title_en}
          </span>
        </div>
      </div>

      <img
        src={data.image}
        className='w-full h-full object-cover fade-in'
      />
    </div>
  )
}

const Slider = ({ lan }: { lan: string }) => {
  const { data, loading } = useFetch(`/home`)

  const sliderProperties = {
    autoplay: true,
    infinite: true,
    duration: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    indicators: false,
    arrows: false,
    pauseOnHover: false
  }

  if (loading)
    return (
      <div className='w-full h-full aspect-video'>
        <Loader />
      </div>
    )

  return (
    <div
      className='w-full h-full'
      id='slider'
    >
      <Slide {...sliderProperties}>
        {data &&
          data.map(item => (
            <SliderItem
              key={item.id}
              data={item}
              lan={lan}
            />
          ))}
      </Slide>
    </div>
  )
}

export default Slider
