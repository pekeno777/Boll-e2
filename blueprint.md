### Purpose and Capabilities
This project is an Astro.js static-first web application designed for Firebase Studio, focusing on high performance, SEO, and minimal JavaScript. It showcases a modern web architecture using Astro's Islands Architecture for interactive components and a server-first approach for content.

### Project Outline
This section details the design, style, and features implemented in the application.

*   **General Structure:** The application is built with Astro.js, utilizing `.astro` files for pages and layouts, and React (`.tsx`) for interactive components.
*   **Styling:** Primarily uses Tailwind CSS for a utility-first approach, with some custom CSS for specific elements.
*   **Performance:** Leverages Astro's partial hydration with `client:` directives to deliver minimal JavaScript, optimizing for Core Web Vitals.
*   **Routing:** Implements file-based routing where `.astro` files in `src/pages/` define routes.
*   **Data Fetching:** Data is fetched on the server using top-level `await` in the component frontmatter.
*   **Animations:** Uses AOS (Animate On Scroll) for scroll-triggered animations.
*   **Navigation (`src/sections/Nav.astro`):** A responsive navigation bar for site-wide access.
*   **Hero Section (`src/sections/Hero.astro`):** Introduces the company with a large title, a brief description, call-to-action buttons, and a comparison card with key metrics. Elements like the comparison card now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **About Section (`src/sections/About.astro`):** Provides an overview of the company's vision and mission, with content cards. Content cards use `bg-white/70 backdrop-blur-lg` for translucency.
*   **Services Section (`src/sections/Services.astro`):** Displays a catalog of services with interactive cards (`ServicesReact.tsx`). Each card provides a brief overview, and clicking expands to show detailed descriptions, features, and performance targets. A new **Service Workflow** area has been added to the extended card for a flowchart, using `bg-gray-100/50 backdrop-blur-sm`.
*   **Indicators Section (`src/sections/Indicators.astro`):** Showcases key performance indicators (KPIs) and charts related to processing volume and client satisfaction. Figures and charts now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **History Section (`src/sections/History.astro`):** Presents a timeline of the company's milestones. Timeline circles now use `border-4 border-gray-100/50` for translucency.
*   **Science Section (`src/sections/Science.astro`):** Details the technology behind the AI solutions, including machine learning, natural language processing, and automation. Technology stack figures now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **Team Section (`src/sections/Team.astro`):** Introduces key team members with their roles and backgrounds, and displays team statistics. Team member cards and the team stats block now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **Portfolio Section (`src/sections/Portfolio.astro`):** Highlights case studies and the overall impact of the company's solutions. Case study figures and portfolio stats now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **Contact Section (`src/sections/Contact.astro`):** Provides a contact form and company contact information. Contact form and info figures now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **Footer Section (`src/sections/Footer.astro`):** Contains copyright information, quick links, and social media icons. This section retains its distinct `bg-[#252525]` background.

### Plan and Steps for Current Change
**Goal:** Distribute "recurso" images to specific section backgrounds without blur, making them larger and ensuring they do not obstruct any content.

**Steps Taken:**

1.  **Reverted `src/layouts/Layout.astro`:** Removed the `<div id="background-recursos"></div>`.
2.  **Cleaned `src/styles/global.css`:** Removed the `#background-recursos` CSS rule.
3.  **Updated `src/sections/Hero.astro`:**
    *   Added `style` attribute to the `<section>` tag.
    *   Applied `background-image: url('/Recurso1.png'), url('/Recurso2.png');`.
    *   Set `background-repeat: no-repeat;`.
    *   **Adjusted `background-position`:** Changed from `10% 20%, 90% 80%;` to `5% 10%, 95% 90%;` to avoid the title.
    *   **Increased `background-size`:** Changed from `250px 250px, 350px 350px;` to `350px 350px, 450px 450px;`.
4.  **Updated `src/sections/About.astro`:**
    *   Added `style` attribute to the `<section>` tag.
    *   Applied `background-image: url('/Recurso3.png'), url('/Recurso4.png');`.
    *   Set `background-repeat: no-repeat;`.
    *   **Adjusted `background-position`:** Changed from `5% 5%, 85% 95%;` to `0% 10%, 100% 80%;`.
    *   **Increased `background-size`:** Changed from `280px 280px, 220px 220px;` to `380px 380px, 320px 320px;`.
5.  **Updated `src/sections/Contact.astro`:**
    *   Added `style` attribute to the `<section>` tag.
    *   Applied `background-image: url('/Recurso5.png'), url('/recurso 6.png');`.
    *   Set `background-repeat: no-repeat;`.
    *   **Adjusted `background-position`:** Changed from `20% 70%, 70% 30%;` to `5% 80%, 85% 20%;`.
    *   **Increased `background-size`:** Changed from `100px 100px, 220px 220px;` to `300px 300px, 450px 450px;`.
