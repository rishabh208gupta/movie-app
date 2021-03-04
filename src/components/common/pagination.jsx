import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
    state = { 
      pageSize : this.props.pageSize,
      itemCount : this.props.itemCount,
      
     }
    render() { 
      const pagesCount = Math.ceil(this.state.itemCount/this.state.pageSize);
      if(pagesCount===1) return null;
      const pages = _.range(1,pagesCount+1);



        return ( 

          
          <nav>
            <ul className="pagination">
           { pages.map((page)=>(
            <li key={page} className="page-item"><a className="page-link">{page}</a></li>
           ))
        }
              
            </ul>
          </nav>
           
              
  
         );
    }
}
 
export default Pagination;