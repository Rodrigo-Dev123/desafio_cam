import './styles.css';
import Posts from '../../components/Posts';
import GlobalProvider from '../../contexts/GlobalContext';

function Home() {

  return (
    <GlobalProvider>
      <Posts />
    </GlobalProvider>

  );
}

export default Home;