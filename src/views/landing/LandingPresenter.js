import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Grid, Divider, Container } from 'semantic-ui-react';

import BackgroundScreen from '../../components/BackgroundScreen';
import Div from '../../components/Div';

import Logo from './landing-presenter/Logo';
import ButtonRegister from './landing-presenter/ButtonRegister';
import ButtonLogin from './landing-presenter/ButtonLogin';
import { GridContent, H1, H3, Ul, Li, Features } from './landing-presenter/Atoms';

const LandingPresenter = ({ t }) => (
  <BackgroundScreen>
    <Container>
      <GridContent>
        <Grid.Column width={10} only="tablet computer">
          <Features>
            <H1>{t('pages.landing.header')}</H1>
            <H3>{t('pages.landing.subheader')}</H3>
            <Ul>
              <Li>{t('pages.landing.bullet1')}</Li>
              <Li>{t('pages.landing.bullet2')}</Li>
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
                {t('pages.landing.already')}
              </Divider>
            </Div>
            {/* Se connecter */}
            <ButtonLogin />
          </div>
        </Grid.Column>
      </GridContent>
    </Container>
  </BackgroundScreen>
);

export default withNamespaces('common')(LandingPresenter);
