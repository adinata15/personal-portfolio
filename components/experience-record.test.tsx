/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />
import { render, screen } from '@testing-library/react';
import { ExperienceRecord } from '@/components/experience-record';
import type { ExperienceRecord as RecordData } from '@/data/experiences';

const record: RecordData = {
    roles: [
        {
            duration: 'Jan 2020 - Dec 2020',
            title: 'Research Engineer',
            employer: 'Example Institute',
            employerLink: 'https://example.edu/institute',
            details: ['Shipped a data platform.'],
            skills: ['React'],
        },
    ],
    education: [
        {
            duration: '2016 - 2020',
            program: 'Computer Engineering',
            school: 'Example University',
            schoolLink: 'https://example.edu',
            details: ['Minor: Mathematics'],
        },
    ],
    certifications: [
        {
            title: 'Example Architect',
            issuer: 'Example Cloud',
            link: 'https://example.cloud/cert',
        },
    ],
};

it('shows a role, an education, and a certification with their links', () => {
    render(<ExperienceRecord record={record} />);

    expect(screen.getByRole('heading', { name: 'Research Engineer' })).toBeInTheDocument();
    expect(
        screen.getByRole('link', { name: 'Example Institute (opens in a new tab)' }),
    ).toHaveAttribute('href', 'https://example.edu/institute');

    expect(screen.getByRole('heading', { name: 'Computer Engineering' })).toBeInTheDocument();
    expect(
        screen.getByRole('link', { name: 'Example University (opens in a new tab)' }),
    ).toHaveAttribute('href', 'https://example.edu');

    expect(
        screen.getByRole('link', { name: 'Example Architect (opens in a new tab)' }),
    ).toHaveAttribute('href', 'https://example.cloud/cert');
    expect(screen.getByText('Example Cloud')).toBeInTheDocument();
});
