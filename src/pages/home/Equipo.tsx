import EquipoItem from './EquipoItem'

const Equipo = ({ lan }: { lan: string }) => {
  const data = [
    {
      id: 1,
      image: '/assets/equipo/1.jpg',
      name_es: 'ESTEBAN N. O’FARRELL, Esq.',
      name_en: 'ESTEBAN N. O’FARRELL, Esq.',
      contact: 'T. +1 (305) 468-4614 Ι E. esteban@ofmb.law',
      education_es:
        'Northwestern University School of Law - LL.M. con Honores. Universidad Católica Argentina, abogado (equivalente a J.D.).',
      education_en:
        'Northwestern University School of Law - LL.M. with Honors Universidad Católica Argentina, abogado (J.D. equivalent)',
      admitted: 'Nueva York, Argentina, U.S. Tax Court',
      languages_es: 'Inglés, Español',
      languages_en: 'English, Spanish',
      text_es:
        'Esteban cuenta con más de 15 años de experiencia ejerciendo como abogado en Nueva York. Ha asesorado a clientes en temas de derecho corporativo, propiedad intelectual, planificación patrimonial y tributación internacional. Cuenta con experiencia laboral en estudios jurídicos de Nueva York como Hughes Hubbard & Reed y Grant, Herrmann, Schwartz & Klinger LLP, así como en estudios jurídicos argentinos, entre ellos JP O’Farrell Abogados, del cual fue socio fundador.',
      text_en:
        'Esteban has over 15 years of practicing as a New York lawyer.  He has been advising clients on corporate law, intellectual property law, trust and estate matters and International Tax matters. He has work experience in New York Law Firms, such as Hughes Hubbard & Reed and Grant, Herrmann, Schwartz & Klinger LLP, also in Argentinean Law Firms such as JP O’Farrell Abogados where he was a founding partner.',
      linkedin: 'https://www.linkedin.com/in/estebanofarrell/'
    },
    {
      id: 2,
      image: '/assets/equipo/2.jpg',
      name_es: 'DIEGO R. MANTILLA, Esq.',
      name_en: 'DIEGO R. MANTILLA, Esq.',
      contact: 'T. +1 (561) 527.2733 Ι E. diego@ofmb.law',
      education_es:
        'Georgetown University Law Center – LL.M. Pontificia Universidad Católica Argentina, abogado (equivalente a J.D.)',
      education_en:
        'Georgetown University Law Center - LL.M. P. Universidad Católica Argentina, abogado (J.D. equivalent))',
      admitted: 'Nueva York, Argentina, U.S. Supreme Court',
      languages_es: 'Inglés, Español',
      languages_en: 'English, Spanish',
      text_es:
        'Con más de dos décadas de experiencia legal internacional, Diego centra su práctica en el asesoramiento a startups y personas físicas en la estructuración de sus negocios, el cumplimiento normativo y el desarrollo de estrategias de entrada a mercados de forma ágil y eficiente. Ha ocupado cargos directivos en empresas globales de primer nivel y en prestigiosos estudios jurídicos, donde gestionó transacciones de alto valor y asuntos legales complejos en una amplia variedad de industrias. Más allá de su práctica legal, Diego participa activamente en el sector agroindustrial y es Agente de Fútbol licenciado por la FIFA. Gracias a su formación multidisciplinaria y amplia trayectoria, ofrece asesoramiento personalizado a empresas que operan en un mercado global en constante evolución.',
      text_en:
        'Diego focuses his practice in advising startups and individuals on structuring robust legal frameworks, ensuring regulatory compliance, and facilitating seamless market entry strategies. He has held senior positions at leading global companies and top-tier law firms, where he managed high-stakes transactions and complex legal matters across a broad range of industries. Beyond his legal practice, Diego is actively involved in agribusiness and is a licensed FIFA Football Agent. He uses his wide background and broad experience to offer customized advice to businesses in todays fast-changing global market.',
      linkedin: 'https://www.linkedin.com/in/diegomantilla/'
    },
    {
      id: 3,
      image: '/assets/equipo/3.jpg',
      name_es: 'INÉS BLOCH, Esq.',
      name_en: 'INÉS BLOCH, Esq.',
      contact: 'T. +1 (305) 205.0837 Ι E. ines@ofmb.law',
      education_es:
        'University of Miami School of Law - Juris Doctor, University of Miami School of Law - LL.M. oriented to business law, Paris-Panthéon-Assas université, Licence droit (J.D. equivalent)',
      education_en:
        'University of Miami School of Law - Juris Doctor, University of Miami School of Law - LL.M. oriented to business law, Paris-Panthéon-Assas université, Licence droit (J.D. equivalent)',
      admitted: 'Nueva York ',
      languages_es: 'Inglés, Frances, Español',
      languages_en: 'English, French, Spanish',
      text_es:
        'Inés Bloch es una abogada de inmigración, miembro del NYSBA y de AILA. Cuenta con una amplia experiencia asesorando a clientes tanto en Estados Unidos como en el extranjero, incluidos emprendedores e inversionistas. Inés brinda asesoramiento estratégico en visas tales como E-2, O-1, EB-5, L-1, TN, H-1B, entre otras. Trabaja de cerca con startups, pequeñas y medianas empresas, así como con clientes individuales. Su enfoque práctico y centrado en el cliente la convierte en una asesora de confianza en asuntos migratorios complejos. Reconocida por su dedicación y profundo conocimiento legal, ofrece soluciones personalizadas para cada caso. Obtuvo su título de abogada (J.D.) y un LL.M. en la Facultad de Derecho de la Universidad de Miami, con especialización en derecho comercial. También obtuvo un título en derecho en la Universidad Panthéon-Assas de París, Francia. Los clientes acuden a ella en busca de representación legal de alta calidad y asesoría experta en inmigración. Domina los idiomas inglés, español y francés.',
      text_en:
        'Ines Bloch is an immigration attorney, a member of the New York State Bar Association and AILA. She has extensive experience advising both U.S. and international clients, including entrepreneurs and investors. Ines provides strategic guidance on E-2, O-1, EB-5, L-1, TN, H-1B, and other visa categories. She works closely with startups, small and medium-sized businesses, and individual clients. Her practical, client-focused approach makes her a trusted advisor in complex immigration matters. Known for her dedication and deep legal knowledge, she offers tailored solutions to every case. She holds a J.D. and LL.M. from the University of Miami School of Law, with a focus on business law.  She also earned a law degree from Panthéon-Assas University in Paris, France. Ines is fluent in English, Spanish, and French. Clients turn to her for high-quality legal representation and expert immigration counsel.',
      linkedin: 'https://www.linkedin.com/in/inesblochlaw/ '
    }
  ]
  return (
    <section id='equipo'>
      <div className='w-full max-w-6xl m-auto px-4 py-12'>
        <h2 className='text-4xl lg:text-7xl font-medium text-right'>{lan === 'ESP' ? 'Equipo' : 'Team'}</h2>
      </div>
      <div>
        {data.map((item, index) => (
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
