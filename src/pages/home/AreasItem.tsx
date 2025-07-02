interface Data {
  id: number
  title_es: string
  title_en: string
  text_es: string
  text_en: string
}

const AreasItem = ({ data, lan }: { data: Data; lan: string }) => {
  return (
    <article className='bg-black p-8 text-white flex flex-col gap-y-2 lg:gap-y-8'>
      <h2 className='font-medium lg:text-xl'>{lan === 'ESP' ? data.title_es : data.title_en}</h2>
      <hr className='border-primary w-20' />
      <p className='text-sm'>{lan === 'ESP' ? data.text_es : data.text_en}</p>
    </article>
  )
}

export default AreasItem
