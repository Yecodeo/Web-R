import React, { Component } from 'react';
import { Jumbotron, Badge, Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { getDemo } from '../redux/actions/demoAction';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Jumbotron className="mt-5">
            <h1 className="display-3">React Boilerplate</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos,
              dolorem expedita facere inventore libero molestiae odio! Aperiam deserunt dolorum
              ipsum maiores, sit ullam voluptatibus? Animi esse expedita porro.
            </p>
            <hr className="my-2" />
            <h3>
              <Badge className="p-3" color="success">yecodeo.fr</Badge>
            </h3>
          </Jumbotron>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  demo: state.demo,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getDemo }, dispatch);

App.propTypes = {
  getDemo: Proptypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
