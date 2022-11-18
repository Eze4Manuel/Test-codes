import parse from 'html-react-parser';
import type { FC } from 'react';

import styles from './WYSIWYGPreview.module.scss';
import type WYSIWYGPreviewProps from './WYSIWYGPreview.props';

const WYSIWYGPreview: FC<WYSIWYGPreviewProps> = ({ htmlString }) => {
  return (
    <div className={`${styles.container} grid w-full gap-5 font-lato`}>
      {parse(htmlString)}
    </div>
  );
};

export default WYSIWYGPreview;
