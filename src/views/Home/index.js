import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//styled-components
import {Home, Title, Rocket} from './styles';

@inject('store')
@observer
class HomeView extends Component {

  render() {

    const {store:{app}} = this.props;

    return (
      <Home>
        <Title> {app.title} </Title>
        <Rocket> 🚀 </Rocket>
      </Home>
    )
  }
}

export default HomeView;
