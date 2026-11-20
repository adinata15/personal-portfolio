const personName = 'Adi Nata';

const specialtiesClause =
    'software engineer specializing in full-stack web, distributed backends, and secure cloud platforms';

function sentence(clause: string): string {
    return `${clause.charAt(0).toUpperCase()}${clause.slice(1)}.`;
}

/** Clauses are stored lowercase, so one continues a line after an em dash as written. */
function afterDash(prefix: string, clause: string): string {
    return `${prefix} — ${clause}`;
}

export const siteLines = {
    name: personName,
    portfolioTitle: `${personName}'s Portfolio`,
    specialties: sentence(specialtiesClause),
    heroKicker: 'Passionate about technology, nature, and cool stories.',
    about: `${sentence(`${specialtiesClause} across manufacturing, research, and government`)} Outside of work, I hike, read, and draw inspiration from nature for how I build.`,
    footerTagline: 'Software Engineer · Nature Enthusiast · Bookworm',
    rootDescription: `${afterDash(`Portfolio of ${personName}`, specialtiesClause)}.`,
    homeDescription: `${afterDash(personName, specialtiesClause)}. Explore projects, experience, and resume.`,
    experienceDescription: `${afterDash(
        `Professional experience, education, and certifications of ${personName}`,
        'research engineering, manufacturing software, and secure cloud platforms',
    )}.`,
    projectsDescription: `${afterDash(
        `Selected software projects by ${personName}`,
        'laser tag IoT systems, e-commerce, and this portfolio',
    )}.`,
} as const;
