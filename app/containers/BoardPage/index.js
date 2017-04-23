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
            </ListItemTitle>
          </ListItem>
<li><a href="//boards.4chan.org/a/" class="boardlink"></a></li>
<li><a href="//boards.4chan.org/c/" class="boardlink">Anime/Cute</a></li>
<li><a href="//boards.4chan.org/w/" class="boardlink">Anime/Wallpapers</a></li>
<li><a href="//boards.4chan.org/m/" class="boardlink">Mecha</a></li>
<li><a href="//boards.4chan.org/cgl/" class="boardlink">Cosplay &amp; EGL</a></li>
<li><a href="//boards.4chan.org/cm/" class="boardlink">Cute/Male</a></li>
<li><a href="//boards.4chan.org/f/" class="boardlink">Flash</a></li>
<li><a href="//boards.4chan.org/n/" class="boardlink">Transportation</a></li>
<li><a href="//boards.4chan.org/jp/" class="boardlink">Otaku Culture</a></li>
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
