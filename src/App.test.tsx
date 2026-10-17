import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { personalInfo, projects } from './data/portfolioData';

const mockFetch = jest.fn();

beforeEach(() => {
  mockFetch.mockReset();
  // Codeforces rating lookup in Achievements
  mockFetch.mockResolvedValue({ ok: true, json: async () => ({ result: [] }) });
  global.fetch = mockFetch as unknown as typeof fetch;
});

test('shows the name as the page heading straight away', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(personalInfo.name);
});

test('links to the resume from the header', () => {
  render(<App />);
  const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
  expect(resumeLinks.length).toBeGreaterThan(0);
  resumeLinks.forEach((link) => expect(link).toHaveAttribute('href', personalInfo.resumeUrl));
});

test('opens and closes the project details dialog', async () => {
  render(<App />);
  const featured = projects.find((project) => project.featured)!;

  userEvent.click(screen.getByRole('button', { name: `View details for ${featured.title}` }));
  const dialog = await screen.findByRole('dialog');
  expect(dialog).toHaveTextContent(featured.fullDescription);

  userEvent.click(screen.getByRole('button', { name: /close project details/i }));
  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
});

test('submits the contact form to Netlify Forms', async () => {
  render(<App />);
  mockFetch.mockResolvedValueOnce({ ok: true });

  userEvent.type(screen.getByLabelText('Name'), 'Ada');
  userEvent.type(screen.getByLabelText('Email'), 'ada@example.com');
  userEvent.type(screen.getByLabelText('Message'), 'Hello there');
  userEvent.click(screen.getByRole('button', { name: /send message/i }));

  expect(await screen.findByText(/your message is on its way/i)).toBeInTheDocument();
  const [url, init] = mockFetch.mock.calls[mockFetch.mock.calls.length - 1];
  expect(url).toBe('/');
  const body = new URLSearchParams(init.body);
  expect(body.get('form-name')).toBe('contact');
  expect(body.get('email')).toBe('ada@example.com');
  expect(body.get('message')).toBe('Hello there');
});

test('offers an email fallback when the form submission fails', async () => {
  render(<App />);
  mockFetch.mockResolvedValueOnce({ ok: false, status: 404 });

  userEvent.type(screen.getByLabelText('Name'), 'Ada');
  userEvent.type(screen.getByLabelText('Email'), 'ada@example.com');
  userEvent.type(screen.getByLabelText('Message'), 'Hello there');
  userEvent.click(screen.getByRole('button', { name: /send message/i }));

  const fallback = await screen.findByRole('link', { name: /send it by email instead/i });
  expect(fallback.getAttribute('href')).toMatch(/^mailto:/);
});
