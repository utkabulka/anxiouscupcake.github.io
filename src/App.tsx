import './styles/App.css'
import ContactsPage from './pages/ContactsPage'
import CenteredHeader from './components/CentertedHeader'
import { Route, Switch } from 'wouter'
import BlockyParkourPage from './pages/portfolio/BlockyParkourPage'
import {
  PATH_BLOCKY_PARKOUR,
  PATH_CALORIE_TRACKER,
  PATH_PORTFOLIO,
} from './Constants'
import ResumePage from './pages/resume/ResumePage'
import PortfolioPage from './pages/portfolio/PortfolioPage'
import Nav from './components/menu/Nav'
import CalorieTrackerPage from './pages/portfolio/CalorieTrackerPage'

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path='/' component={ResumePage} />
        <Route path='/resume' component={ResumePage} />
        <Route path={`/${PATH_PORTFOLIO}`} component={PortfolioPage} />
        <Route
          path={`/${PATH_PORTFOLIO}/${PATH_CALORIE_TRACKER}`}
          component={CalorieTrackerPage}
        />
        <Route
          path={`/${PATH_PORTFOLIO}/${PATH_BLOCKY_PARKOUR}`}
          component={BlockyParkourPage}
        />
        <Route path='/contacts' component={ContactsPage} />
        <Route>
          <CenteredHeader text='404: no such page' />
        </Route>
      </Switch>
    </>
  )
}

export default App
