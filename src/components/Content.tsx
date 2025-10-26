import { useContentManagerContext } from '../contexts/ContentManager/ContentManager'
import { SECTIONS, section_components } from '../data/sections'
import Card from '../components/Card'

const Content = ({ className }: { className?: string }) => {
    const { activeSection } = useContentManagerContext()

    const ActiveSectionComponent = section_components[activeSection || SECTIONS.SECTION_ONE]

    return (
        <Card className={className}>
            <ActiveSectionComponent />
        </Card>
    )
}

export default Content