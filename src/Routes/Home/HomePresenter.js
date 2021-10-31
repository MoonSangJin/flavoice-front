import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../../Components/Form';
import Button from '../../Components/Button';
import Logo from '../../logo.png';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingVoicesIcon from '@mui/icons-material/SettingsVoice';
import Paper from '@mui/material/Paper';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';

const HomePresenter = ({ loginChecker, userPitch }) => {
  const history = useHistory();

  const moveTo = (target) => {
    history.push(`${target}`);
  };
  const handleLogOut = () => {
    console.log('hi');
    localStorage.clear();
    history.push('/');
  };
  return (
    <>
      <Form style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logo} style={{ marginBottom: '30px' }} alt="Logo" />
        <Text>당신의 최고 pitch는 : {userPitch || `?`}</Text>
        {!loginChecker && (
          <Link to="/">
            <Button content={'Sign In'} />
          </Link>
        )}
        <Link to="/recorder">
          <Button content={'Recorder'} />
        </Link>
        <Link to="/displayResult">
          <Button content={'Display Result'} />
        </Link>
        {/* <Link to="/displayComponents">
          <Button content={'Display Components'} />
        </Link> */}
        <Button
          content={'Tech Stack'}
          onClick={() =>
            window.open('https://github.com/justzino/flavoice', '_blank')
          }
        />

        {loginChecker && <Button content={'LogOut'} onClick={handleLogOut} />}
      </Form>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Guide"
            icon={<MenuBookTwoToneIcon />}
            onClick={() => moveTo('/guide')}
          />
          <BottomNavigationAction
            label="Recorder"
            icon={<SettingVoicesIcon />}
            onClick={() => moveTo('/recorder')}
          />
          <BottomNavigationAction
            label="My Song"
            icon={<FavoriteIcon />}
            onClick={() => moveTo('/displayResult')}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

const Text = styled.div`
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'ImcreSoojin';
  margin-bottom: 30px;
`;
export default HomePresenter;
