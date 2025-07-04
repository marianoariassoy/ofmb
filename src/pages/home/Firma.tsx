const Firma = ({ lan }: { lan: string }) => {
  return (
    <section id='firma'>
      <div className='w-full max-w-6xl m-auto px-4 lg:px-8 py-4 flex flex-col gap-y-8 lg:gap-y-20'>
        <div>
          <h1 className='font-bold text-xl'>{lan === 'ESP' ? 'la firma' : 'about us '}</h1>
        </div>
        <div className='text-4xl lg:text-7xl font-medium'>
          {lan === 'ESP'
            ? 'Derecho Corporativo. Derecho comercial y Empresarial General. Derecho Migratorio.'
            : 'Corporate Law.  Commercial and General Business. Inmigration Law'}
        </div>
      </div>
    </section>
  )
}

export default Firma
