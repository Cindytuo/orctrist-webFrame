import React from 'react';
import * as styles from './style.less';
import logo from '@/images/OIP.jpg';
interface IProps {};

class Main extends React.Component<IProps> {
  render() {
    return (
      <div className={styles.main}>
        Welcome to Orcrist Organization!
        <div className={styles.main__logo}>
          <img src={logo} alt= '' />
        </div>
      </div>
     
    )
  }
}

export default Main;