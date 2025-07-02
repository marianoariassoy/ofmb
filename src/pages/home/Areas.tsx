import AreasItem from './AreasItem'

const Areas = ({ lan }: { lan: string }) => {
  const data = [
    {
      id: 1,
      title_es: 'Derecho Corporativo.',
      title_en: 'Corporate Law.',
      text_es:
        'Contamos con un profundo conocimiento en estructuras societarias —tanto para entidades offshore como locales, y asistimos a nuestros clientes en la creación y desarrollo de negocios en los Estados Unidos. Ya sea que se trate del fundador de una startup o de una empresa consolidada, ofrecemos soluciones prácticas y con visión de futuro para satisfacer sus necesidades.',
      text_en:
        'Our team is well-versed in corporate structures -structuring offshore and domestic entities-, by assisting clients in starting and growing businesses in the U.S.  Whether you’re the founder of a startup or an established company, our team provides practical, forward-thinking solutions to meet your needs.'
    },
    {
      id: 2,
      title_es: 'Derecho Comercial y Empresarial General.',
      title_en: 'Commercial and General Business Law.',
      text_es:
        'Con amplia experiencia en la redacción de todo tipo de contratos comerciales, el estudio asiste a sus clientes frente a marcos regulatorios complejos.',
      text_en:
        'With extensive experience in drafting all types of commercial agreements, the firm assists clients in navigating complex regulatory frameworks.'
    },
    {
      id: 3,
      title_es: 'Derecho Migratorio.',
      title_en: 'Inmigration Law.',
      text_es:
        'Nuestra práctica migratoria se enfoca en asesorar a personas extranjeras y empresas que desean reubicarse, invertir o comenzar una nueva etapa en los Estados Unidos.',
      text_en:
        'Our immigration practice focuses on assisting foreign individuals and businesses looking to relocate, invest, or start anew in the United States. '
    }
  ]
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
            {data.map(item => (
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
