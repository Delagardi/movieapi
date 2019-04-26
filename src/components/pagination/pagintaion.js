import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { changeCurrentPageAction } from '../../actions';
import { Link } from 'react-router-dom';
import Pagination from 'react-paginating';

import './pagination.css';

class PaginationContainer extends Component {
  
  render() {
    const {
      totalPages,
      //totalTaskCount, 
      // currentPage,
      // changeCurrentPage
    } = this.props;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    // const renderPageNumbers = pageNumbers.map(number => {
    //   return (
    //     <li 
    //       className="page-item"
    //       key={number}
    //       id={number}>
    //       <Link 
    //         className="page-link" 
    //         to={`/${number}`}
    //         // onClick={() => changeCurrentPage(number)}
    //         >
    //         {number}</Link>
    //     </li>
    //   );
    // });
    const currentPage = 1;

    return (
      <Pagination 
        total={this.props.totalPages} 
        limit={19791} 
        pageCount={10} 
        currentPage={currentPage}>
        {({
          pages,
          currentPage,
          hasNextPage,
          hasPreviousPage,
          previousPage,
          nextPage,
          totalPages,
          getPageItemProps
        }) => (
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <Link 
                to="/?page=1"
                className="page-link">first</Link>
            </li>

            {hasPreviousPage && <Link to={`/?page=${previousPage}`}>{'<'}</Link>}

            {pages.map(page => {
              return (
                <li className="page-item">
                  <Link
                    key={page}
                    className="page-link"
                    style={currentPage === page ? { backgroundColor: '#fdce09' } : null}
                    to={`/?page=${page}`}
                  >
                    {page}
                  </Link>
                </li>
              );
            })}

            {hasNextPage && 
              <li className="page-item">
                <Link 
                  to={`/?page=${nextPage}`} className="page-link">
                  {'>'}
                </Link>
              </li>
            }
            <li className="page-item">
              <Link 
                to={`/?page=${totalPages}`}
                className="page-link">last</Link>
            </li>
          </ul>
        )}
      </Pagination>
    );
  }
}

const mapStateToProps = ({ totalPages }) => {
  return {
    totalPages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
  // return {
  //   changeCurrentPage: (newPage, maxPages) => dispatch(changeCurrentPageAction(newPage, maxPages))
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);

