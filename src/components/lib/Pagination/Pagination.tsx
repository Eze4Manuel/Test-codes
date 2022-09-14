import type { FC } from 'react';
import { Fragment } from 'react';
import ReactPaginate from 'react-paginate';

import Text from '../Text';
import styles from './Pagination.module.scss';
import type PaginationProps from './PaginationProps';

const Pagination: FC<PaginationProps> = ({ setPage, count, page }) => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div>
          <ReactPaginate
            breakLabel="..."
            onPageChange={(selectedItem) => setPage(selectedItem.selected + 1)}
            pageRangeDisplayed={2}
            pageCount={count}
            renderOnZeroPageCount={() => null}
            className={styles.container}
            pageClassName={styles.page}
            activeClassName={styles.active__page}
            previousLabel={
              <button
                disabled={page <= 1}
                className={`${styles.navigator} ${styles.navigator__previous}`}
              >
                <Text variant="caption">Previous</Text>
              </button>
            }
            nextLabel={
              <button
                disabled={page === count}
                className={`${styles.navigator} ${styles.navigator__next}`}
              >
                <Text variant="caption">Next</Text>
              </button>
            }
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Pagination;
