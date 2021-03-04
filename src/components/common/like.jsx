import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    render() { 
        return ( <div>
            <i onClick={this.props.onLikeClick} style={{cursor:'pointer'}} className={this.setHeart()} aria-hidden="true"></i>
        </div> );
    }

    setHeart(){
        return this.props.liked ? "fa fa-heart" : "fa fa-heart-o";
    }
}
 
export default Like;