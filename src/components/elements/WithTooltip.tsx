import IconQuestion from "../../assets/images/icon-question"

export enum Direction {
    Top = "top",
    Right = "right",
    Bottom = "bottom",
    Left = "left"
}

export const LabelWithTooltip = ({ children, text, direction = Direction.Top }: { children: React.ReactNode; text: string; direction?: Direction }) => {
    return (
        <div>
            {children}
            {/* Apparently tailwind can't handle dynamic tooltip directions, so we have to hardcode each one */}
            {direction === Direction.Left && (
                <div className={`hidden md:inline-block tooltip tooltip-neutral tooltip-left pl-0.5`} data-tip={text}>
                    <IconQuestion className="w-4 h-4" />
                </div>
            )}
            {direction === Direction.Top && (
                <div className={`hidden md:inline-block tooltip tooltip-neutral tooltip-top pl-0.5`} data-tip={text}>
                    <IconQuestion className="w-4 h-4" />
                </div>
            )}
            {direction === Direction.Right && (
                <div className={`hidden md:inline-block tooltip tooltip-neutral tooltip-right pl-0.5`} data-tip={text}>
                    <IconQuestion className="w-4 h-4" />
                </div>
            )}
            {direction === Direction.Bottom && (
                <div className={`hidden md:inline-block tooltip tooltip-neutral tooltip-bottom pl-0.5`} data-tip={text}>
                    <IconQuestion className="w-4 h-4" />
                </div>
            )}
        </div>
    )
}

export default LabelWithTooltip