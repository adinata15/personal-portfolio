/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />
import { fireEvent, render, screen } from '@testing-library/react';
import { PageLinks } from '@/components/page-links';

function currentPages() {
    return screen
        .getAllByRole('link')
        .filter((link) => link.getAttribute('aria-current') === 'page')
        .map((link) => link.textContent);
}

it('links each Page to its path', () => {
    render(<PageLinks pathname="/" variant="bar" />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute(
        'href',
        '/experiences',
    );
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');
});

it('marks only Home on /', () => {
    render(<PageLinks pathname="/" variant="bar" />);

    expect(currentPages()).toEqual(['Home']);
});

it('marks only Experience on /experiences', () => {
    render(<PageLinks pathname="/experiences" variant="bar" />);

    expect(currentPages()).toEqual(['Experience']);
});

it('keeps Experience active on a nested path', () => {
    render(<PageLinks pathname="/experiences/talks" variant="drawer" />);

    expect(currentPages()).toEqual(['Experience']);
});

it('calls onNavigate when a drawer link is activated', () => {
    const onNavigate = vi.fn();
    render(
        <div onClick={(event) => event.preventDefault()}>
            <PageLinks pathname="/" variant="drawer" onNavigate={onNavigate} />
        </div>,
    );

    fireEvent.click(screen.getByRole('link', { name: 'Projects' }));

    expect(onNavigate).toHaveBeenCalledTimes(1);
});
