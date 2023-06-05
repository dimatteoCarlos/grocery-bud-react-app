import Title from '../components/Title';
import Alert from './Alert';

const titleObj = {
  docNewTitle: 'Grocery Bud | By CADR',
  title: 'Grocery Bud app',
  subTitle: '',
};

const Header = ({ alert, setAlert,showAlert }) => {
  return (
    <div className='header-container'>
      <Alert alert={alert} setAlert={setAlert} showAlert={showAlert}/>
      <Title {...titleObj}></Title>
    </div>
  );
};

export default Header;
