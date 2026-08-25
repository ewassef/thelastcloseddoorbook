/**
 * Derived from https://sessionize.com/eddie-wassef/.
 *
 * Sessionize has no public speaker API and blocks cross-origin reads, so this
 * is a committed snapshot rather than a live feed. Update `updated` whenever
 * you refresh it — the speaking section prints that date.
 */

export const SPEAKING = {
  source: "https://sessionize.com/eddie-wassef/",
  updated: "2026-08-24",
  topics: [
    "Platform Engineering",
    "Cloud Native & Kubernetes",
    "Kubernetes Operators",
    "Security & Compliance",
    "All Things Data",
    "AI in the Enterprise",
  ],
  talks: [
    {
      title: "Platform Engineering: The Bedrock of Modern Development",
      blurb:
        "The shift from siloed IT practice to integrated, automated platform work, and the pivotal role platform engineering now plays in modern software delivery.",
      url: "https://sessionize.com/s/eddie-wassef/platform-engineering-the-bedrock-of-modern-develop/92788",
    },
    {
      title: "Panel: Securing the Platform: From Supply Chain to Runtime",
      blurb:
        "Securing dependencies, managing vulnerabilities, access control, and runtime threat monitoring, where platform engineering meets security.",
      url: "https://sessionize.com/s/eddie-wassef/panel-securing-the-platform-from-supply-chain-to-r/148061",
    },
    {
      title: "Empowering Teams to Excel: Forging 10x Developer Platforms",
      blurb:
        "Selecting and integrating tools into an internal developer platform, with case studies from organizations that have already walked the path.",
      url: "https://sessionize.com/s/eddie-wassef/empowering-teams-to-excel-navigating-the-galaxy-of/92216",
    },
    {
      title: "Dropping SBOMs: The Four-Letter Word Your Company Considers Safe for Work",
      blurb:
        "Executive orders, NIS2, and whether enterprises can secure fast-moving cloud native technology using other fast-moving cloud native technology.",
      url: "https://sessionize.com/s/eddie-wassef/dropping-sboms-the-four-letter-word-that-your-comp/94467",
    },
    {
      title: "Unleashing Potential with Platform Engineering",
      blurb:
        "Fundamentals, evolution, and strategic benefits for CTOs, architects, and engineers deciding how far to take it.",
      url: "https://sessionize.com/s/eddie-wassef/unleashing-potential-with-platform-engineering/92220",
    },
    {
      title: "Statefulsets on Kubernetes: Guardians of Your Data Galaxy",
      blurb:
        "How stateful workloads survive volatile infrastructure, and why databases can be microservices too.",
      url: "https://sessionize.com/s/eddie-wassef/statefulsets-on-kubernetes-the-guardians-of-your-d/92218",
    },
  ],
  events: [
    { name: "Civo Navigate Local: Tampa", date: "April 2024", place: "Tampa, Florida" },
    { name: "KubeCon + CloudNativeCon Europe 2024", date: "March 2024", place: "Paris, France" },
    { name: "Civo Navigate North America 2024", date: "February 2024", place: "Austin, Texas" },
    {
      name: "CNCF-hosted Co-located Events North America 2023",
      date: "November 2023",
      place: "Chicago, Illinois",
    },
  ],
} as const;
