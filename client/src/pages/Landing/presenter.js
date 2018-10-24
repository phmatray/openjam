import React from 'react';
import { Grid, Divider, Container } from 'semantic-ui-react';
import { LoginScreen, BgWrap, GridContent, H1, H3, Ul, Li, Features } from './styles';
import Logo from './children/Logo';
import ButtonRegister from './children/ButtonRegister';
import ButtonLogin from './children/ButtonLogin';
import Div from '../../elements/Div';

const LandingPresenter = () => (
  <LoginScreen id="login-screen">
    <BgWrap id="bg-wrap">
      <Container>
        <GridContent>
          <Grid.Column width={10} only="tablet computer">
            <Features>
              <H1>Like and Tip your favorite artists</H1>
              <H3>
                {/* Découvrez la nouvelle plateforme orientée Remix et Electronic Music avant tout le monde. */}
                Discover the new platform oriented Remix and Electronic Music before anyone else.
              </H3>
              <Ul>
                <Li>
                  {/* Soutenez les artistes et la musique que vous aimez */}
                  Support the artists and music you love
                </Li>
                <Li>
                  {/* Adoptez la rémunération au chapeau en version digitale */}
                  Embrace hat-based remuneration in its digital version
                </Li>
              </Ul>
            </Features>
          </Grid.Column>
          <Grid.Column style={{ maxWidth: '320px' }}>
            <div className="step-inner">
              <Div mb="3em">
                <Logo />
              </Div>
              {/* S'inscrire */}
              <ButtonRegister />
              <Div mt="3em" mb="3em">
                <Divider horizontal inverted>
                  {/* Vous avez déjà un compte ? */}
                  Already have an account?
                </Divider>
              </Div>
              {/* Se connecter */}
              <ButtonLogin />
            </div>
          </Grid.Column>
        </GridContent>
      </Container>
    </BgWrap>
  </LoginScreen>
);

export default LandingPresenter;
