import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.FloatingButtons(),
  ],
  footer: Component.Footer({
    links: {
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer({
      sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
          return a.displayName.localeCompare(b.displayName)
        }
        if (a.file && !b.file) {
          return -1
        } else {
          return 1
        }
      },
      folderClickBehavior: "link",
    })),
  ],
  right: [
    Component.Graph({ localGraph: { scale: 1, depth: 2, repelForce: 2, fontSize: 0.3 }, globalGraph: { scale: 1 } }),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display a single page (e.g. a single note)
export const homepageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    // Component.DesktopOnly(
    //   Component.Graph({
    //     localGraph: {
    //       depth: -1,
    //     },
    //     globalGraph: {},
    //   }),
    // ),
    Component.RecentNotes(),

  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
          return a.displayName.localeCompare(b.displayName)
        }
        if (a.file && !b.file) {
          return -1
        } else {
          return 1
        }
      },
    })),
  ],
  right: [
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    // Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
          return a.displayName.localeCompare(b.displayName)
        }
        if (a.file && !b.file) {
          return -1
        } else {
          return 1
        }
      },
      folderClickBehavior: "link"
    })),
  ],
  right: [
    Component.Darkmode(),
  ],
}
