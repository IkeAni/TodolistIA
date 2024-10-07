import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function App() {

  const location = useLocation();

  const currentTab = location.pathname;

  return (
    <div className="App">
      <nav>
        <Tabs value={currentTab} centered>
          <Tab label="Home" component={Link} to="/home" value="/home"/>
          <Tab label="Todos" component={Link} to="/" value="/"/>
          <Tab label="About" component={Link} to="/about" value="/about"/>
          <Tab label="Contact" component={Link} to="/contact" value="/contact"/>
        </Tabs>
      </nav>
      <Outlet />
      <Container maxWidth="xl">
        <CssBaseline />
      </Container>
  </div>
  )
}

export default App
