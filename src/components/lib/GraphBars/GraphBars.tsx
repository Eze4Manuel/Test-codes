import styles from './GraphBars.module.scss';

const GraphBars = () => {
  return (
    <div className={`${styles.base}`}>
      <div className={`${styles.bars} h-[47px]`}></div>
      <div className={`${styles.bars} h-[70px]`}></div>
      <div className={`${styles.bars} h-[82px]`}></div>
      <div className={`${styles.bars} h-[47px]`}></div>
      <div className={`${styles.bars} h-[70px]`}></div>
      <div className={`${styles.bars} h-[106px]`}></div>
      <div className={`${styles.bars} h-[82px]`}></div>
    </div>
  );
};

export default GraphBars;
