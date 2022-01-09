import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import * as styles from './Pagination.module.scss';

const cx = classNames.bind(styles);

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}) => {
  const prevClassName = cx({
    [styles.paginationPrevLink]: true,
    [styles.paginationPrevLinkDisable ]: !hasPrevPage,
  });

  const nextClassName = cx({
    [styles.paginationNextLink]: true,
    [styles.paginationNextLinkDisable]: !hasNextPage,
  });

  return (
    <div className={styles.pagination}>
      <div className={styles.paginationPrev}>
        <Link
          rel="prev"
          to={hasPrevPage ? prevPagePath : '/'}
          className={prevClassName}
        >
          {PAGINATION.PREV_PAGE}
        </Link>
      </div>
      <div className={styles.paginationNext}>
        <Link
          rel="next"
          to={hasNextPage ? nextPagePath : '/'}
          className={nextClassName}
        >
          {PAGINATION.NEXT_PAGE}
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
