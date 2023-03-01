import React from 'react';

 
import Background from 'components/Background';
import SplitScreen from 'components/SplitScreen';


function Login() {
  // const dispatch = useDispatch();
  // const status = useSelector<RootState>(({ user }) => user.status);

  // const handleClickLogin = () => {
  //   dispatch(login());
  // };

  return (
    <Background key="Home" data-testid="Home">
      <SplitScreen />
      {/* <Container fullScreen>
        <Header>
          <Logo />
        </Header>
        <Heading>{name}</Heading>
        <Button
          busy={status === STATUS.RUNNING}
          data-testid="Login"
          onClick={handleClickLogin}
          size="xl"
          textTransform="uppercase"
          variant="white"
        >
          <Icon name="sign-in" />
          <Text ml={2}>Start</Text>
        </Button>
      </Container> */}
    </Background>
  );
}

export default Login;