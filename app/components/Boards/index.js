import React from 'react';

class Boards extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" width="20" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/boards">
            <FormattedMessage {...messages.boards} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Boards;
