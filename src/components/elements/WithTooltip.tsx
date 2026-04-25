import IconQuestion from "../../assets/images/icon-question"

// @TODO FIXME: tooltip direction is not being respected.
export const LabelWithTooltip = ({ children, text, direction = "top" }: { children: React.ReactNode; text: string; direction?: "top" | "right" | "bottom" | "left" }) => {
    return (
        <div>
            {children}
            <div className={`hidden md:inline-block tooltip tooltip-neutral tooltip-${direction} pl-0.5`} data-tip={text}>
                <IconQuestion className="w-4 h-4" />
            </div>
        </div>
    )
}

export default LabelWithTooltip