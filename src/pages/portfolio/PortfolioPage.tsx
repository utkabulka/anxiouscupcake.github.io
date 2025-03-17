import '../../styles/PortfolioPage.css'
import PortfolioCard from '../../components/PortfolioCard'
import {
  PATH_PORTFOLIO,
  PATH_BLOCKY_PARKOUR,
  PATH_CALORIE_TRACKER,
} from '../../Constants'

function PortfolioPage() {
  return (
    <div className='portfolio-grid'>
      <div className='portfolio-column'>
        <PortfolioCard
          title='Honest Calorie'
          subtitle='An open-source calorie tracking app.'
          href={`${PATH_PORTFOLIO}/${PATH_CALORIE_TRACKER}`}
        />
        <PortfolioCard
          title='Sample Card'
          subtitle="A sample card. It's here just for testing."
          href={`#`}
        />
      </div>
      <div className='portfolio-column'>
        <PortfolioCard
          title='Blocky Parkour'
          subtitle='A short 3D platformer.'
          href={`${PATH_PORTFOLIO}/${PATH_BLOCKY_PARKOUR}`}
        />
        <PortfolioCard
          title='Sample Card'
          subtitle="A sample card. It's here just for testing."
          href={`#`}
        />
        <PortfolioCard
          title='Sample Card'
          subtitle="A sample card. It's here just for testing."
          href={`#`}
        />
      </div>
    </div>
  )
}

export default PortfolioPage
