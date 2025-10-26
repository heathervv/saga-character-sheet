import IconExternal from '../assets/images/icon-external'

const Header = () => (
    <header className="flex pb-4">
        <h1 className="flex-1 text-base-content font-semibold">Legacy & Saga | Character Sheet</h1>
        <a className="flex items-center text-base-content text-sm" href="" target="_blank">
            Rules
            <IconExternal className="pl-1 w-5 h-5 text-info" />
        </a>
    </header>
)

export default Header
