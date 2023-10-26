import { render, screen } from '@testing-library/react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Posts from '.';

const contextValue = {
  removeItem: jest.fn(),
  currentItems: [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
  ],
};

describe('<Posts />', () => {
  it('Should render posts', () => {
    const { debug } = render(
      <GlobalContext.Provider value={contextValue}>
        <Posts />
      </GlobalContext.Provider>
    );
    debug();

    expect(screen.getAllByRole('heading', { name: /Foto/i })).toHaveLength(contextValue.currentItems.length);
  });

  it('Shouls math snapshot', () => {
    const { container } = render(
      <GlobalContext.Provider value={contextValue}>
        <Posts />
      </GlobalContext.Provider>
    );
  
    expect(container.firstChild).toMatchSnapshot();
  });
});