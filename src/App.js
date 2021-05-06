import React, { useState } from "react";
import './App.css';
import axios from "axios";

function AboutFilm (props){

  return(
    <div className="conteiner">
      <div className="poster"></div>
      <table className="tableFilm">
        <tr>
          <td>Title:</td>
          <td>{props.Title}</td>
        </tr>
        <tr>
          <td>Released:</td>
          <td>{props.Released}</td>
        </tr>
        <tr>
          <td>Country:</td>
          <td>{props.Country}</td>
        </tr>
        <tr>
          <td>Director:</td>
          <td>{props.Director}</td>
        </tr>
        <tr>
          <td>Production:</td>
          <td>{props.Production}</td>
        </tr>
        <tr>
          <td>Runtime:</td>
          <td>{props.Runtime}</td>
        </tr>
        <tr>
          <td>imdbRating:</td>
          <td>{props.imdbRating}</td>
        </tr>
        <tr>
          <td>Plot:</td>
          <td>{props.Plot}</td>
        </tr>
        <tr>
          <td>Actors:</td>
          <td>{props.Actors}</td>
        </tr>
        <tr>
          <td>Writer:</td>
          <td>{props.Writer}</td>
        </tr>
        <tr>
          <td>Awards:</td>
          <td>{props.Awards}</td>
        </tr>
        <tr>
          <td>BoxOffice:</td>
          <td>{props.BoxOffice}</td>
        </tr>
      </table>
    </div>
  );
};


function App(props) {
  
  const [filmName, setFilmName] = useState("");
  const handlerChange = event => {
    setFilmName(event.target.value);
  };
  const [typeFilm, setTypeFilm] = useState("full");
  const handlerChangeType = event => {
    setTypeFilm(event.target.value);
  };
  const [Title, setTitle] = useState("");
  const [Released, setReleased] = useState("");
  const [Country, setCountry] = useState("");
  const [Director, setDirector] = useState("");
  const [Production, setProduction] = useState("");
  const [Runtime, setRuntime] = useState("");
  const [imdbRating, setimdbRating] = useState("");
  const [Plot, setPlot] = useState("");
  const [Actors, setActors] = useState("");
  const [Writer, setWriter] = useState("");
  const [Awards, setAwards] = useState("");
  const [BoxOffice, setBoxOffice] = useState("");

  const handlerSubmit = async event => {
    
    event.preventDefault();
    let filmAsk = "t=" + filmName + "&plot=" + typeFilm;
    const query = 'http://www.omdbapi.com/?i=tt3896198&apikey=f7ed1e54&' + filmAsk;

    let resp = await axios.get(query);
    setTitle(resp.data.Title)
    setReleased(resp.data.Released);
    setCountry(resp.data.Country);
    setDirector(resp.data.Director);
    setProduction(resp.data.Production);
    setRuntime(resp.data.Runtime);
    setimdbRating(resp.data.imdbRating);
    setPlot(resp.data.Plot);
    setActors(resp.data.Actors);
    setWriter(resp.data.Writer);
    setAwards(resp.data.Awards);
    setBoxOffice(resp.data.BoxOffice);
    document.querySelector(".poster").style.backgroundImage = 'url(' + resp.data.Poster + ')';
    document.querySelector(".conteiner").style.display = 'flex';
  };
  return (
    <>
    <header className="App-header">
      <div className="logo"></div>
      <p className="App-name">Search films</p>
      <p className="numberPhone">+38 038 *** ** **</p>
      <div className="box">
          <input type="text" className="inputmedcine" placeholder="Enter a name of film..." onChange={handlerChange}/>
          <select className="type" name="type" onChange={handlerChangeType}>
            <option value="full">Full</option>
            <option value="short">Short</option>
          </select>
      </div>
      <form onSubmit={handlerSubmit}>
        <input type="submit" className="submitmedcine" value="search" ></input>
      </form>
    </header>
      <AboutFilm 
      Title={Title}	
      Released={Released}	
      Country={Country}	
      Director={Director}	
      Production={Production}	
      Runtime={Runtime}	
      imdbRating={imdbRating}	
      Plot={Plot}	
      Actors={Actors}	
      Writer={Writer}	
      Awards={Awards}	
      BoxOffice={BoxOffice}
      />
    </>
  );
};

export default App;
