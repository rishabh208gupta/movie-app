import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { Link, Redirect } from 'react-router-dom';
export class Movie extends Component {
    state = { 
        movieCount : getMovies().length,
        movies : getMovies(),
        pageSize: 4
     }
    render() { 
        if(this.state.movieCount===0) return <p>there are no movies in database</p>;

        return (
            <React.Fragment>
                 <main className="container">
                <div>
                    <h6>showing {this.state.movieCount} movies in database</h6>
                </div>
                <div><button onClick={()=>this.props.history.push("/movies/new")} className="btn btn-primary">New Movie</button></div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.rendorMovies() }
                    </tbody>
                    
                </table>
                <Pagination itemCount={this.state.movieCount} pageSize={this.state.pageSize} />
            </main>
            </React.Fragment>
           
          );
    }

    rendorMovies(){
        

        return this.state.movies.map((movie)=>
        <tr key={movie._id}>
            
            <td><Link to ={"/movies/"+movie._id}>{movie.title}</Link></td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><Like liked={movie.liked} onLikeClick={()=>{this.handleLikeDislike(movie)}}></Like></td>
            <td><button className="btn btn-danger btn-sm" onClick={()=>this.handleDelete(movie)}>delete</button></td>
        </tr>);
    }

    handleDelete( movie ){
        const movies = this.state.movies.filter((m)=>m._id!==movie._id);
        this.setState({
             movieCount : this.state.movieCount -1,
             movies : movies
            })
    }

    handleLikeDislike(movie){
        console.log(movie);
        const movies = [...this.state.movies];
        const i = movies.indexOf(movie);
        movies[i] = movie;
        movies[i].liked = !movies[i].liked;

        this.setState({movies: movies});
    }

    
}
 
