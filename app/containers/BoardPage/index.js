/*
 * BoardPage
 *
 * List all the boards
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import H2 from 'components/H2';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class BoardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const val = <FormattedMessage {...messages.scaffoldingHeader} />;
    return (
      <div>
        <Helmet
          title="Board Page"
          meta={[
            { name: 'description', content: 'Board page of React.js Boilerplate application' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <H2>
          <FormattedMessage {...messages.japaneseBoard} />
        </H2>
        <List>
          <ListItem>
            <ListItemTitle>
              <a href={val.props.defaultMessage}><FormattedMessage {...messages.scaffoldingHeader} /></a>
              <FormattedMessage {...messages.scaffoldingHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.scaffoldingMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.feedbackHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.feedbackMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.routingHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.routingMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.networkHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.networkMessage} />
            </p>
          </ListItem>

          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.intlHeader} />
            </ListItemTitle>
            <p>
              <FormattedMessage {...messages.intlMessage} />
            </p>
          </ListItem>
        </List>
      </div>
    );
  }
}
