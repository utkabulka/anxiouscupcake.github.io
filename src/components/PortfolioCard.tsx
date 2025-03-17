import '../styles/PortfolioCard.css'

type PortfolioCardProps = {
  title: string
  subtitle: string
  href: string
}

function PortfolioCard({
  title = 'Portfolio card',
  subtitle = 'A subtitle',
  href = '#',
}: PortfolioCardProps) {
  return (
    <a href={href} className='portfolio-card'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </a>
  )
}

export default PortfolioCard
