import { HeaderLanding } from "../components/Landing/HeaderLanding"
import { PrincipalContent } from "../components/Landing/PrincipalContent"
import { QuickTour } from "../components/Landing/QuickTour"
import { TopBar } from "../components/Landing/TopBar"

const LandingPage = () =>{ 
    return (
        <div>
            <TopBar/>
            <HeaderLanding/>
            <PrincipalContent/>
            <QuickTour/>
        </div>
    )
}
export default LandingPage