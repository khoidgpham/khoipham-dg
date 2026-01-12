import { FullSlug, SimpleSlug, simplifySlug } from "../../util/path"
import type { ContentDetails } from "../../plugins/emitters/contentIndex"

document.addEventListener("nav", async (e: CustomEventMap["nav"]) => {
    const randomNoteBtn = document.getElementById("random-note-btn")

    if (!randomNoteBtn) return

    async function navigateToRandomNote() {
        try {
            // Fetch the content index
            const data: Map<SimpleSlug, ContentDetails> = new Map(
                Object.entries<ContentDetails>(await fetchData).map(([k, v]) => [
                    simplifySlug(k as FullSlug),
                    v,
                ]),
            )

            // Get current page slug
            const currentSlug = simplifySlug(e.detail.url)

            // Get all available pages excluding the current one
            const allPages = Array.from(data.keys()).filter(
                (slug) => !slug.startsWith("tags/") && slug !== currentSlug,
            )

            if (allPages.length === 0) {
                console.warn("No other pages available for random navigation")
                return
            }

            // Select a random page
            const randomIndex = Math.floor(Math.random() * allPages.length)
            const randomSlug = allPages[randomIndex]

            // Navigate to the random page
            const targetUrl = new URL(`/${randomSlug}`, window.location.origin)
            window.spaNavigate(targetUrl)
        } catch (error) {
            console.error("Error navigating to random note:", error)
        }
    }

    randomNoteBtn.addEventListener("click", navigateToRandomNote)
    window.addCleanup(() => randomNoteBtn.removeEventListener("click", navigateToRandomNote))
})
