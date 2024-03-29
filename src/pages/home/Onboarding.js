import React, { PureComponent } from 'react';
import { routeLocal } from '@routes';

import { Grid, GridCell } from '@components/grid';
import { H1, H6 } from '@components/typography';
import { Button } from '@components/button';
import { Modal } from '@components/modal';

import { white } from '@components/values/colors';
import { textLevel1 } from '@components/values/shadows';

class Onboarding extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      currentStep: 0,
    };
  }

  componentDidMount() {
    const onboarding = window.localStorage.getItem('onboarding');
    if (!onboarding) {
      this.toggleVisible(true);

      window.localStorage.setItem('onboarding', 1);
    }
  }

  toggleVisible = (visible) => {
    this.setState({
      visible,
    });
  };

  nextStep = () => {
    this.setState(state => ({
      currentStep: state.currentStep + 1,
    }));
  };

  close = () => {
    this.toggleVisible(false);
  };

  render() {
    const steps = [
      /* 1. Welcome to Crate */
      <Grid key={0} alignCenter={true} style={{ height: '100%', textAlign: 'center', color: white }}>
        {/* Left - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>Welcome to Crate</H1>

          <H6 style={{ marginTop: '0.5em' }}>Your monthly subscription of trendy <br/> clothes and accessories</H6>

          <Button theme="primary" style={{ marginTop: '1.5em' }} onClick={this.nextStep}>Next</Button>
        </GridCell>

        {/* Right - Image */}
        <GridCell>
          <img src={`${routeLocal}/images/collage.png`} alt="collage" title="products collage" style={{ width: 400 }}/>
        </GridCell>
      </Grid>,

      /* 2. For Men */
      <Grid key={1} alignCenter={true} style={{ height: '100%', textAlign: 'center', color: white }}>
        {/* Left - Image */}
        <GridCell>
          <img src={`${routeLocal}/images/collage.png`} alt="collage" title="products collage" style={{ width: 400 }}/>
        </GridCell>

        {/* Right - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>For Men</H1>

          <H6 style={{ marginTop: '0.5em' }}>Your monthly subscription of trendy <br/> clothes and accessories</H6>

          <Button theme="primary" style={{ marginTop: '1.5em' }} onClick={this.nextStep}>Next</Button>
        </GridCell>
      </Grid>,

      /* 3. For Women */
      <Grid key={2} alignCenter={true} style={{ height: '100%', textAlign: 'center', color: white }}>
        {/* Left - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>For Women</H1>

          <H6 style={{ marginTop: '0.5em' }}>Your monthly subscription of trendy <br/> clothes and accessories</H6>

          <Button theme="primary" style={{ marginTop: '1.5em' }} onClick={this.nextStep}>Next</Button>
        </GridCell>

        {/* Right - Image */}
        <GridCell>
          <img src={`${routeLocal}/images/collage.png`} alt="collage" title="products collage" style={{ width: 400 }}/>
        </GridCell>
      </Grid>,

      /* 4. Fix me up */
      <Grid key={3} alignCenter={true} style={{ height: '100%', textAlign: 'center', color: white }}>
        {/* Center - Headline and info */}
        <GridCell>
          <H1 font="secondary" style={{ textShadow: textLevel1 }}>Fix me up</H1>

          <H6 style={{ marginTop: '0.5em' }}>Subscribe to your crate!</H6>

          <Button theme="primary" style={{ marginTop: '1.5em' }} onClick={this.close}>Start</Button>
        </GridCell>
      </Grid>,
    ];

    return (
      <div>
        {/* Modal */}
        <Modal visible={this.state.visible}>
          {steps[this.state.currentStep]}
        </Modal>
      </div>
    );
  }
}

export default Onboarding;
