import { render, screen, waitFor } from '@testing-library/react';
import PokemonCard from './components/PokemonCard';

test('pokemon card render name', async () => {
  const url = '/pokemon/1';

  render(<PokemonCard url={url} />);

  await waitFor(() => {
    // I'd look for a real text here that is renderer when the data loads
    const nameElement = screen.getByTestId('card-name');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent('bulbasaur');
  });
});
