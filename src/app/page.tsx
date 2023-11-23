import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFileLines, faUserDoctor, faArrowRightFromBracket, faChevronRight, faCalendarDays, faGear } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';


export default function Home() {
  return (
    <main>
      <div className="global">
        <div className="global-left">
          <div className="navbar">
          <Image
                src="/logo.png"
                alt="profile picture"
                width={40}
                height={40}
                className='img-profile'
                priority
              />
          <div className="navbar-itens">
          <FontAwesomeIcon icon={faHouse} size="xl"/>
          <div className='icon-selected'>
          <FontAwesomeIcon icon={faFileLines} size="xl" />
          </div>
          <FontAwesomeIcon icon={faCalendarDays} size="xl" />
          <FontAwesomeIcon icon={faUserDoctor} size="xl"/>
          <FontAwesomeIcon icon={faGear} size="xl" />
          </div>
          <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" />
          </div>

          <div className="content">
            <div className="content-top">
            <h1>Prontuário eletrônico</h1>
            <form>
              <input type="search" placeholder="Buscar paciente"/>
              <button type="submit">Search</button>
            </form>
  
            </div>
            <div className='card'>
              <Image
                src="/profile.png"
                alt="profile picture"
                width={120}
                height={120}
                className='img-profile'
                priority
              />
              <div>
                <h4>Helena da Silva Vasconcelos</h4>
                <p>Idade: 34</p>
                <p>Sexo: Feminino</p>
              </div>
              <div>
                <p>Cidade: Salvador</p>
                <p>Estado: Bahia</p>
                <p>Contato: 75 9999-6666</p>
              </div>
            </div>
            <h2>Histórico de atendimentos</h2>
            <div className="card-h">
              <div className="card-h-info">
              <p>Quinta, 09.09.2023, 9:00 | Dra. Juliana Almeida</p>
              </div>
                <div className="card-h-content">
                <div className='card-h-left'>
                  <h4>Resumo da consulta:</h4>
                  <p>Paciente buscou atendimento devido a dores na coluna, relatando sintomas específicos. Histórico revela condições pré-existentes e histórico familiar relevante.</p>
                </div>
                <div className='card-h-right'>
                  <h4>Diagnóstico:</h4>
                  <p> Paciente diagnosticado com lombalgia. O plano de tratamento envolve medicações analgésicas e fisioterapia.</p>
                </div>
              </div>
            </div>
            <div className="card-h">
              <div className="card-h-info">
              <p>Terça, 22.07.2023, 10:00 | Dr. André Pereira</p>
              </div>
                <div className="card-h-content">
                <div className='card-h-left'>
                  <h4>Resumo da consulta:</h4>
                  <p>Paciente buscou atendimento devido a dores na coluna, relatando sintomas específicos. Histórico revela condições pré-existentes e histórico familiar relevante.</p>
                </div>
                <div className='card-h-right'>
                  <h4>Diagnóstico:</h4>
                  <p> Paciente diagnosticado com lombalgia. O plano de tratamento envolve medicações analgésicas e fisioterapia.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="global-right">
          <h3>Agenda</h3>
          <p>Próximas consultas</p>
          <div className="card-a">
            <Image
              src="/agenda-1.png"
              alt="profile picture"
              className='img-agenda'
              width={40}
              height={40}
              priority
            />
            <div className="card-a-info">
              <h5>Lorem ipsum</h5>
              <p>Quarta, 22.11.2023</p>
              <p>11:00</p>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faChevronRight} size="xl" />
            </div>
          </div>
          <div className="card-a">
            <Image
              src="/agenda-2.png"
              alt="profile picture"
              className='img-agenda'
              width={40}
              height={40}
              priority
            />
            <div className="card-a-info">
              <h5>Isabela Pereira</h5>
              <p>Quinta, 23.11.2023</p>
              <p>9:00</p>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faChevronRight} size="xl" />
            </div>
          </div>
          <div className="card-a">
            <Image
              src="/agenda-3.png"
              alt="profile picture"
              className='img-agenda'
              width={40}
              height={40}
              priority
            />
            <div className="card-a-info">
              <h5>Gabriela Costa</h5>
              <p>Quinta, 23.11.2023</p>
              <p>10:00</p>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faChevronRight} size="xl" />
            </div>
          </div>
          <div className="card-a">
            <Image
              src="/agenda-4.png"
              alt="profile picture"
              className='img-agenda'
              width={40}
              height={40}
              priority
            />
            <div className="card-a-info">
              <h5>Rafael Oliveira</h5>
              <p>Quinta, 23.11.2023</p>
              <p>11:00</p>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faChevronRight} size="xl" />
            </div>
          </div>
          <div className="card-a">
            <Image
              src="/agenda-5.png"
              alt="profile picture"
              className='img-agenda'
              width={40}
              height={40}
              priority
            />
            <div className="card-a-info">
              <h5>Lucas Silva</h5>
              <p>Sexta, 24.11.2023</p>
              <p>9:00</p>
            </div>
            <div className="icon">
            <FontAwesomeIcon icon={faChevronRight} size="xl" />
            </div>
          </div>

        </div>
      </div>
      <div className='handtalk'>
      <Image
        src="/handtalk.png"
        alt="handtalk"
        width={40}
        height={80}
        priority
      />

      </div>
    </main>
  )
}
