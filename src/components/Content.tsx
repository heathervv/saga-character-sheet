import { useContentManagerContext } from '../contexts/ContentManager/ContentManager'
import { SECTIONS, section_components } from '../data/sections'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Content = ({ className }: { className?: string }) => {
    const { activeSection } = useContentManagerContext()

    const ActiveSectionComponent = section_components[activeSection || SECTIONS.SECTION_ONE]

    return (
        <div className="lg:w-5/6">
            <Card className={className}>
                <ActiveSectionComponent />
            </Card>
            <div className="lg:hidden">
                <Footer />
            </div>
        </div>
    )
}

export default Content