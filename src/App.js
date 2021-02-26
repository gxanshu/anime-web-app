import React from "react";
import Header from './components/header';
import Head from './components/head';
import Cards from './components/MoveCard.jsx';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import ReactDOM from 'react-dom';
import SearchBar from 'material-ui-search-bar';
import ResultCard from './components/Card';
export class Anime extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoaded: false,
            animeData: {}
        }
    }
    async componentDidMount() {
        const response = await fetch('https://api.jikan.moe/v3/top/anime');
        const json = await response.json();
        this.setState({
            isLoaded: true,
            animeData: json
        });
        await console.log(this.state.animeData);
    }
    render() {
        var { isLoaded, animeData } = this.state;
        var animeTop;
        var anime1, anime2, anime3;
        if (!isLoaded) {
            return (
                <h1>wait i am loading</h1>
            );
        } else {
            anime1 = animeData.top[(Math.floor(Math.random() * 50))];
            anime2 = animeData.top[(Math.floor(Math.random() * 50))];
            anime3 = animeData.top[(Math.floor(Math.random() * 50))];
            return (
                <Cards movieName1={anime1.title} movieType1={anime1.type} movieImg1={anime1.image_url} movieScore1={anime1.score} movieLink1={anime1.url} movieName2={anime2.title} movieType2={anime2.type} movieImg2={anime2.image_url} movieScore2={anime2.score} movieLink2={anime2.url} movieName3={anime3.title} movieType3={anime3.type} movieImg3={anime3.image_url} movieScore3={anime3.score} movieLink3={anime3.url} />
            );
        }
    };
};

var Rendom = Math.floor(Math.random() * 50);
console.log(Rendom);

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            animeData: {},
            value: ''
        }
    }
    async componentDidMount() {
        const response = await fetch('https://api.jikan.moe/v3/top/anime');
        const json = await response.json();
        this.setState({
            isLoaded: true,
            animeData: json
        });
        await console.log(this.state.animeData);
    }

    renderTheSearch(query) {
        console.log(query);
    }

    render() {
        var { isLoaded, animeData } = this.state;
        var animeTop;
        if (!isLoaded) {
            return (
                <h1>wait i am loading</h1>
            );
        } else {
            animeTop = animeData.top[Rendom];
            function generator() {
                ReactDOM.render(<Anime />, document.getElementById("card"));
            }
            return (
                <>
                    <Header />
                    <Head imgSrc={animeTop.image_url} heading={animeTop.title} startDate={animeTop.start_date} endDate={animeTop.end_date} type={animeTop.type} score={animeTop.score} episodes={animeTop.episodes} link={animeTop.url} />
                    <Container className="bg-center self-center text-center items-center my-10 -my-5">
                        <Button variant="contained" color="primary" onClick={() => generator()}>
                            Load Anime
                        </Button>
                        <SearchBar className="my-5"
                            value={this.state.value}
                            onChange={(newValue) => this.setState({ value: newValue })}
                            onRequestSearch={() =>  searchQuery(this.state.value)}
                        />
                    </Container>
                </>
            );
        }
    };
};

async function searchQuery(query) {
    const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1`);
    const resJson = await res.json();
    const result = await resJson.results[0];
    ReactDOM.render(<ResultCard imgSrc={result.image_url} name={result.title} url={ result.url}/>, document.getElementById('card'))

}

export function renderAll() {
    ReactDOM.render(<Anime />, document.getElementById("card"));
    ReactDOM.render(<App />, document.getElementById("root"));
}

export default App;