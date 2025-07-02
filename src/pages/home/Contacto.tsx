const Contacto = ({ lan }: { lan: string }) => {
  const url = 'http://backend.ligadecapitanes.com.ar/ofmb/assets'

  return (
    <section
      className='relative bg-black text-white '
      id='contacto'
    >
      <div className='absolute w-full top-0 z-20 hidden lg:block'>
        <div className='w-full max-w-6xl m-auto px-4 pt-12 lg:pt-32'>
          <h1 className='font-bold text-xl text-black'>{lan === 'ESP' ? 'contacto' : 'contact us'}</h1>
        </div>
      </div>
      <img
        src='/assets/images/contacto.jpg'
        alt='Contacto'
        className='w-full'
      />
      <div className='w-full max-w-6xl m-auto flex justify-between py-12 px-4'>
        <div className='flex flex-col gap-y-4 text-sm'>
          <h2 className='font-bold lg:text-xl text-primary'>{lan === 'ESP' ? 'Contacto' : 'Contact Us'}</h2>
          <div>
            <a
              href='mailto:info@ofmb.law'
              className='hover:underline'
            >
              info@ofmb.law
            </a>{' '}
            <br />
            110 East 31st Street 4th Floor, <br /> New York, NY 10016
          </div>
          <hr className='border-primary w-40' />
          <div>
            <h3>{lan === 'ESP' ? 'Para asuntos de inmigración ' : 'For immigration matters'}</h3>
            +1 786 5890864 <br />
            333 NE 24th St, Suite 309, <br />
            Miami, FL, USA 33137 <br />
            <a
              href='http://www.inmigracionlaw.com/agendar-consulta/'
              className='hover:underline'
            >
              https://inesblochlaw.com/agendar-consulta/
            </a>
          </div>
        </div>
        <div className='text-right'>
          <img
            src='/assets/iso.svg'
            alt='Logo'
            className='h-20 lg:h-54 opacity-30'
          />
        </div>
      </div>
      <div className='w-full max-w-6xl m-auto px-4'>
        <div className='border-t border-white flex flex-col lg:flex-row gap-2 justify-between text-sm pt-4 pb-8 '>
          <div className='flex flex-col lg:flex-row gap-x-4'>
            {lan === 'ESP' ? (
              <>
                <a
                  href={url + '/ofmb-terminos-y-condiciones.docx'}
                  className='hover:underline'
                  target='_blank'
                  rel='noreferrer'
                >
                  Terminos y Condiciones
                </a>
                <a
                  href={url + '/ofmb-politicas-de-privacidad.docx'}
                  className='hover:underline'
                  target='_blank'
                  rel='noreferrer'
                >
                  Politicas de Privacidad
                </a>
              </>
            ) : (
              <>
                <a
                  href={url + '/ofmb-terminos-y-condiciones-ingles.docx'}
                  className='hover:underline'
                  target='_blank'
                  rel='noreferrer'
                >
                  Terms and Conditions
                </a>
                <a
                  href={url + '/ofmb-politicas-de-privacidad-ingles.docx'}
                  className='hover:underline'
                  target='_blank'
                  rel='noreferrer'
                >
                  Privacy Policy
                </a>
              </>
            )}
          </div>
          <div>2025 O’FMB. TODOS LOS DERECHOS RESERVADOS</div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
