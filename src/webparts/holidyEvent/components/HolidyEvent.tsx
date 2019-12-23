import * as React from 'react';
import styles from './HolidyEvent.module.scss';
import { IHolidyEventProps } from './IHolidyEventProps';
import { escape } from '@microsoft/sp-lodash-subset';

import Football from '../Football/Football';



export default class HolidyEvent extends React.Component<IHolidyEventProps, {}> {
  public render(): React.ReactElement<IHolidyEventProps> {
    return (
      <div className={styles.holidyEvent}>
        <div className={styles.container}>
          <div className={styles.row}>
            <Football />
          </div>
        </div>
      </div>
    );
  }
}
