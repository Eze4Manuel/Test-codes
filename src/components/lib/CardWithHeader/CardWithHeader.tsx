import type { FC, PropsWithChildren } from 'react';

import styles from './CardWithHeader.module.scss';
import type CardWithHeaderType from './CardWithHeader.props';

const CardWithHeader: FC<PropsWithChildren<CardWithHeaderType>> = ({
  rightComponent,
  header,
  total,
  children,
  className,
}) => {
  return (
    <section className={`${styles.base} ${className}`}>
      <div className="flex items-center justify-between border-b-4 border-cci-grey pb-1 font-[700]">
        <h3 className="font-lato">
          {header} {total && `(${total})`}
        </h3>
        {rightComponent && <>{rightComponent}</>}
      </div>
      {children}
    </section>
  );
};
export default CardWithHeader;
