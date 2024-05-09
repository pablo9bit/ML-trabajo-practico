import { render, fireEvent, waitFor } from '@testing-library/react';
import Search from '../components/UI/Search';
import  SearchContext  from '../contexts/SearchContext';
import { MemoryRouter } from 'react-router-dom';

describe('Search component', () => {
  it('should update searchValue in context when input changes', () => {
    const setSearchValue = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchContext.Provider value={{ searchValue: '', setSearchValue }}>
        <MemoryRouter>
          <Search />
        </MemoryRouter>
      </SearchContext.Provider>
    );

    const input = getByPlaceholderText('Nunca dejes de buscar');
    fireEvent.change(input, { target: { value: 'test' } });

    expect(setSearchValue).toHaveBeenCalledWith('test');
  });

  it('should navigate to "/items" with search query when form is submitted', async () => {
    const setSearchValue = jest.fn();
    const { getByPlaceholderText, getByRole } = render(
      <SearchContext.Provider value={{ searchValue: '', setSearchValue }}>
        <MemoryRouter initialEntries={['/']}>
          <Search />
        </MemoryRouter>
      </SearchContext.Provider>
    );

    const input = getByPlaceholderText('Nunca dejes de buscar');
    const button = getByRole('button');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/items');
      expect(window.location.search).toBe('?search=test');
    });
  });

  it('should not navigate when input is empty', async () => {
    const setSearchValue = jest.fn();
    const { getByRole } = render(
      <SearchContext.Provider value={{ searchValue: '', setSearchValue }}>
        <MemoryRouter initialEntries={['/']}>
          <Search />
        </MemoryRouter>
      </SearchContext.Provider>
    );

    const button = getByRole('button');

    fireEvent.click(button);

    await waitFor(() => {
      expect(window.location.pathname).not.toBe('/items');
      expect(window.location.search).not.toBe('?search=test');
    });
  });
});
