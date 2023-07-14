import styles from './wyg.module.css';

/* eslint-disable-next-line */
export interface WygProps {}

export function Wyg(props: WygProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Wyg!</h1>
    </div>
  );
}

export default Wyg;
