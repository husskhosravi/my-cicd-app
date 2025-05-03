import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';

describe('App', () => {
    it('should render app', () => {
        render(<App />);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});
