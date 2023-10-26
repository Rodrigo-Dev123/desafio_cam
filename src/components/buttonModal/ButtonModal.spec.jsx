import { fireEvent, render, screen } from '@testing-library/react';
import { GlobalContext } from '../../contexts/GlobalContext';
import ButtonModal from './index';
import userEvent from '@testing-library/user-event';

const contextValue = {
    setPostModal: jest.fn(),
    modal: jest.fn(),
    setModal: jest.fn(),
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

describe('<ButtonModal />', () => {
    it('Should render ButtonModal', () => {
        const { debug } = render(
            <GlobalContext.Provider value={contextValue}>
                <ButtonModal id={'buttonModal'}/>
            </GlobalContext.Provider>
        );
        debug();
        expect(screen.getByRole('button', {name: /Ver mais/i})).toBeInTheDocument();
    });

    it('Shouls math snapshot', () => {
        const { container } = render(
            <GlobalContext.Provider value={contextValue}>
                <ButtonModal />
            </GlobalContext.Provider>
        );

       expect(container.firstChild).toMatchSnapshot();
    });
});