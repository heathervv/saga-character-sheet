import type { ReactElement } from "react"

const Card = ({ className, children }: { className?: string, children: ReactElement }) => (
    <section className={`card bg-base-100 card-border border-base-300 card-sm p-2 ${className}`}>
        {children}
    </section>
)

export default Card