import { describe, expect, it } from 'vitest';
import { render, screen } from './utils/test-utils/test-utils.jsx';
import App from './App.jsx';

describe('App', () => {
    it('should render app', () => {
        render(<App />);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});
