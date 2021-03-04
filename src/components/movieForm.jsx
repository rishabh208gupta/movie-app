import React, { Component } from 'react';
import Form from './common/form';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import  Joi  from 'joi-browser';

class MovieForm extends Form {
   
    state = { 
        data : {
            
            title : "",
            genreId : "",
            numberInStock : "",
            dailyRentalRate : ""
        },
        errors : {},
        genres : []
     }
     schema ={
         _id : Joi.string(),
         title : Joi.string().required(),
         genreId : Joi.string().required(),
         numberInStock : Joi.number().required(),
         dailyRentalRate : Joi.number().required()
     }

     componentDidMount(){
         const genres = getGenres();
         this.setState({ genres });

         const movieId = this.props.match.params.id;
         if(movieId === "new") return ;

         const movie = getMovie(movieId);
         if(!movie) return this.props.history.replace("/not-found");
        //console.log(movie);
         this.setState({data : this.mapToViewModel(movie)});
     }
     mapToViewModel = (movie)=>{
        //console.log(movie.genre._id);
        return {
            _id : movie._id,
            title : movie.title,
            genreId : movie.genre._id,
            numberInStock : movie.numberInStock,
            dailyRentalRate : movie.dailyRentalRate
        };
     }

     doSubmit = ()=>{
         console.log("submittted");
        saveMovie(this.state.data);
        this.props.history.push("/movies");
     }
    render() { 
        return (
            <div>
                <h1>Movie form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title")}
                    {this.renderSelect("genreId","Genre",this.state.genres)}
                    {this.renderInput("numberInStock","number")}
                    {this.renderInput("dailyRentalRate","number")}
                    {this.renderButton("submit")}
                </form>
            </div>
            
          );
    }
}
 
export default MovieForm;

