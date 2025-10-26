import { useState } from 'react'
import FAQ from './faq'

const Footer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = (value?: boolean) => {
        setIsOpen(value || !isOpen)
    }

    return (
        <>
            <footer className="absolute bottom-0 left-0 w-screen p-4 flex justify-center">
                <button className="btn btn-sm btn-primary" onClick={() => handleClick()}>What is going on here?</button>
            </footer>
            <FAQ isOpen={isOpen} handleOpen={handleClick} />
        </>
    )
}

export default Footer