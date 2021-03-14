import React from 'react'
import "./HomeScreen.css"
import Nav from "./Nav"
import Banner from "./Banner"
import requests from "./Requests"
import Row from "./Row"

function HomeScreen() {
    return (
        <div className = "homeScreen">
            <Nav/>
            <Banner />

            <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow = {true}/>
            <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
            <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies} />
            <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
            <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
            <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentatries}/>
        </div>
    )
}

export default HomeScreen
