import { render, screen } from '@testing-library/react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Modal from './index';

const contextValue = {
  removeItem: jest.fn(),
  modal: jest.fn(),
  setModal: jest.fn(),
  postModal: [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
  ],
};

describe('<Modal />', () => {
  it('Should render modal', () => {
    const { debug } = render(
      <GlobalContext.Provider value={contextValue}>
        <Modal />
      </GlobalContext.Provider>
    );
    debug();

    expect(screen.getByText(/Foto/i)).toBeInTheDocument();
  });

  it('Shouls math snapshot', () => {
    const { container } = render(
      <GlobalContext.Provider value={contextValue}>
        <Modal />
      </GlobalContext.Provider>
    );
  
    expect(container.firstChild).toMatchSnapshot();
  });
});