import { 
  Container
} from './styles'

import AreaNavigation from '../../components/layout/AreaNavigation'
import SectionHeader from '../../components/layout/SectionHeader'
import SectionContent from '../../components/layout/SectionContent'
import SectionCards from '../../components/layout/SectionCards'
import SectionInformation from '../../components/layout/SectionInformation'
import SectionReviews from '../../components/layout/SectionReviews'
import SectionModules from '../../components/layout/SectionModules'
import SectionBonus from '../../components/layout/SectionBonus'
import SectionPaths from '../../components/layout/SectionPaths'
import SectionAccess from '../../components/layout/SectionAccess'
import SectionPlans from '../../components/layout/SectionPlans'

export default function Home(){
  return(
    <Container>
      <AreaNavigation/>
      <SectionHeader/>
      <SectionContent/>
      <SectionCards/>
      <SectionInformation/>
      <SectionReviews/>
      <SectionModules/>
      <SectionBonus/>
      <SectionPaths/>
      <SectionAccess/>
      <SectionPlans/>
    </Container>
  )
}