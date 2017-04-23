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
    const japaneseAnimeMangaBoardTag = "thread/" + <FormattedMessage {...messages.japaneseAnimeMangaBoard.tag[0]} />.props[0];
    const japaneseAnimeCuteBoardTag = "thread/" + <FormattedMessage {...messages.japaneseAnimeCuteBoard.tag[0]} />.props[0];
    const japaneseAnimeWallpapersBoardTag = "thread/" + <FormattedMessage {...messages.japaneseAnimeWallpapersBoard.tag[0]} />.props[0];
    const japaneseMechaBoardTag = "thread/" + <FormattedMessage {...messages.japaneseMechaBoard.tag[0]} />.props[0];
    const japaneseCosplayBoardTag = "thread/" + <FormattedMessage {...messages.japaneseCosplayBoard.tag[0]} />.props[0];
    const japaneseCuteMaleBoardTag = "thread/" + <FormattedMessage {...messages.japaneseCuteMaleBoard.tag[0]} />.props[0];
    const japaneseFlashBoardTag = "thread/" + <FormattedMessage {...messages.japaneseFlashBoard.tag[0]} />.props[0];
    const japaneseTransportationBoardTag = "thread/" + <FormattedMessage {...messages.japaneseTransportationBoard.tag[0]} />.props[0];
    const japaneseOtakuCultureBoardTag = "thread/" + <FormattedMessage {...messages.japaneseOtakuCultureBoard.tag[0]} />.props[0];

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
          <ListItem>
            <ListItemTitle>
              <a href={japaneseAnimeCuteBoardTag}><FormattedMessage {...messages.japaneseAnimeCuteBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={japaneseAnimeWallpapersBoardTag}><FormattedMessage {...messages.japaneseAnimeWallpapersBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={japaneseMechaBoardTag}><FormattedMessage {...messages.japaneseMechaBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={japaneseTransportationBoardTag}><FormattedMessage {...messages.japaneseTransportationBoard} /></a>
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <a href={japaneseOtakuCultureBoardTag}><FormattedMessage {...messages.japaneseOtakuCultureBoard} /></a>
            </ListItemTitle>
          </ListItem>
        </List>
      </div>
    );
  }
}
