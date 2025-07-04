interface Data {
  id: number
  image: string
  name: string
  contact: string
  education_es: string
  education_en: string
  admitt: string
  languages_es: string
  languages_en: string
  text_es: string
  text_en: string
  linkedin: string
}

const EquipoItem = ({ data, lan, index }: { data: Data; lan: string; index: number }) => {
  return (
    <article className={index === 0 ? 'bg-secondary' : index === 1 ? 'bg-white' : 'bg-black text-white'}>
      <div className='w-full max-w-6xl m-auto grid grid-cols-1 lg:grid-cols-2 text-sm'>
        <div className='aspect-square lg:aspect-auto'>
          <img
            src={data.image}
            alt={data.name}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='px-4 lg:pl-12 flex flex-col gap-y-4 py-8 lg:py-12'>
          <h2 className='font-bold lg:text-xl mb-4'>{data.name}</h2>
          <div>{data.contact}</div>
          <hr className='border-primary w-40' />
          <div>
            <h3 className='font-bold'>{lan === 'ESP' ? 'Formación Académica' : 'Education'}</h3>
            <p className='whitespace-break-spaces'>{lan === 'ESP' ? data.education_es : data.education_en}</p>
          </div>
          <div>
            <h3 className='font-bold'>{lan === 'ESP' ? 'Admisiones Profesionales' : 'Admitted to practice'}</h3>
            <p className='whitespace-break-spaces'>{data.admitt}</p>
          </div>
          <div>
            <h3 className='font-bold'>{lan === 'ESP' ? 'Idiomas' : 'Languages'}</h3>
            <p className='whitespace-break-spaces'>{lan === 'ESP' ? data.languages_es : data.languages_en}</p>
          </div>
          <hr className='border-primary w-40' />
          <p className='whitespace-break-spaces'>{lan === 'ESP' ? data.text_es : data.text_en}</p>
          <a
            href={data.linkedin}
            target='_blank'
            rel='noreferrer'
            className='font-bold hover:underline'
          >
            {data.linkedin}
          </a>
        </div>
      </div>
    </article>
  )
}

export default EquipoItem
