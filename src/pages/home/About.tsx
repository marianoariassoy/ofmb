const About = ({ lan }: { lan: string }) => {
  return (
    <section>
      <div className='w-full max-w-6xl m-auto px-4 lg:px-8 py-12 mt-8 lg:mt-20 flex flex-col lg:flex-row gap-x-20 gap-y-8'>
        <div className='pt-2'>
          <img
            src='/assets/logo2.svg'
            alt='Logo 2'
            className='h-26'
          />
        </div>
        <div className='flex gap-8 text-xs flex-1 leading-5'>
          {lan === 'ESP' ? (
            <>
              <p>
                En <strong>O´FARRELL Ι MANTILLA + BLOCH</strong> nos dedicamos a brindar servicios legales de alta
                calidad, adaptados a las necesidades específicas de cada cliente. Nuestro objetivo es construir
                relaciones duraderas actuando como asesores estratégicos de confianza, mediante una comunicación
                transparente, una dedicación constante y un acompañamiento integral en cada etapa del camino.
              </p>
              <p>
                Nuestro estudio centra su práctica en{' '}
                <strong> DERECHO CORPORATIVO, COMERCIAL Y EMPRESARIAL GENERAL, y DERECHO MIGRATORIO,</strong> ofreciendo
                experiencia y soluciones innovadoras para personas y empresas. Estamos comprometidos a ayudar a nuestros
                clientes a navegar entornos legales complejos de manera eficaz y rentable.
              </p>
            </>
          ) : (
            <>
              <p>
                At <strong>O´FARRELL Ι MANTILLA + BLOCH</strong> we are dedicated to delivering high-quality legal
                services tailored to the unique needs of each client. Our goal is to forge lasting partnerships with our
                clients by serving as their trusted strategic advisor, by providing transparent communication,
                unwavering dedication, and comprehensive support at every step of the journey.
              </p>
              <p>
                Our firm focuses its practice on{' '}
                <strong> CORPORATE LAW, COMMERCIAL AND GENERAL BUSINESS, and IMMIGRATION LAW,</strong>
                offering expertise and innovative solutions for individuals and businesses. We are committed to helping
                our clients navigate complex legal landscapes effectively and cost-efficiently.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
