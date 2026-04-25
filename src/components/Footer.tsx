import { useState } from 'react'
import FAQ from './faq'

const Footer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = (value?: boolean) => {
        setIsOpen(value || !isOpen)
    }

    return (
        <>
            <footer className="p-4 flex justify-center">
                <button className="btn btn-sm btn-neutral" onClick={() => handleClick()}>What is going on here?</button>
            </footer>
            <FAQ isOpen={isOpen} handleOpen={handleClick} />
        </>
    )
}

export default Footer