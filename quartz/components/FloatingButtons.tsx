// @ts-ignore
import script from "./scripts/floatingButtons.inline"
import style from "./styles/floatingButtons.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const FloatingButtons: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
        <div class={classNames(displayClass, "floating-buttons")}>
            <button
                class="floating-btn"
                id="global-graph-icon"
                aria-label="Open Global Graph"
                title="Open Global Graph (Ctrl+G)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="5" r="2"></circle>
                    <circle cx="5" cy="19" r="2"></circle>
                    <circle cx="19" cy="19" r="2"></circle>
                    <circle cx="5" cy="5" r="2"></circle>
                    <line x1="12" y1="14" x2="5" y2="17"></line>
                    <line x1="12" y1="14" x2="19" y2="17"></line>
                    <line x1="12" y1="10" x2="19" y2="7"></line>
                    <line x1="12" y1="10" x2="5" y2="7"></line>
                </svg>
            </button>
            <button
                class="floating-btn"
                id="random-note-btn"
                aria-label="Open Random Note"
                title="Open Random Note"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <polyline points="16 3 21 3 21 8"></polyline>
                    <line x1="4" y1="20" x2="21" y2="3"></line>
                    <polyline points="21 16 21 21 16 21"></polyline>
                    <line x1="15" y1="15" x2="21" y2="21"></line>
                    <line x1="4" y1="4" x2="9" y2="9"></line>
                </svg>
            </button>
        </div>
    )
}

FloatingButtons.css = style
FloatingButtons.afterDOMLoaded = script

export default (() => FloatingButtons) satisfies QuartzComponentConstructor
