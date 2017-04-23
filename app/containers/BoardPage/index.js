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
    const japaneseAnimeMangaBoardTag = <FormattedMessage {...messages.japaneseAnimeMangaBoard.tag[0]} />.props[0];
    const japaneseAnimeCuteBoard = <FormattedMessage {...messages.japaneseAnimeCuteBoard.tag[0]} />.props[0];
    const japaneseAnimeWallpapersBoard = <FormattedMessage {...messages.japaneseAnimeWallpapersBoard.tag[0]} />.props[0];
    const japaneseMechaBoard = <FormattedMessage {...messages.japaneseMechaBoard.tag[0]} />.props[0];
    const japaneseCosplayBoard = <FormattedMessage {...messages.japaneseCosplayBoard.tag[0]} />.props[0];
    const japaneseCuteMaleBoard = <FormattedMessage {...messages.japaneseCuteMaleBoard.tag[0]} />.props[0];
    const japaneseFlashBoard = <FormattedMessage {...messages.japaneseFlashBoard.tag[0]} />.props[0];
    const japaneseTransportationBoard = <FormattedMessage {...messages.japaneseTransportationBoard.tag[0]} />.props[0];
    const japaneseOtakuCultureBoard = <FormattedMessage {...messages.japaneseOtakuCultureBoard.tag[0]} />.props[0];

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
              <a href={japaneseAnimeMangaBoardTag}><FormattedMessage {...messages.japaneseAnimeMangaBoard} /></a>
            </ListItemTitle>
          </ListItem>
        </List>
      </div>
    );
  }
}
