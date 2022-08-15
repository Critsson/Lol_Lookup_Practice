import React from "react"
import styles from "../styles/Searchbar.module.css"

export default function Searchbar(props) {

    const [text, setText] = React.useState("")
    const [summoner, setSummoner] = React.useState({})

    const updateSearch = (e) => {
        setText(e.target.value)
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        const fixedText = text.replaceAll(" ", "%20")
        try {
            const response = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${fixedText}?api_key=${process.env.RIOT_API}`)
            const data = await response.json()
            setSummoner(data)
        } catch (error) {
            console.error(error)
        }

    }

    console.log(text)
    console.log(summoner)

    return (
        <div>
            <form onSubmit={(e) => handleSearch(e)}>
                <input onChange={(e) => updateSearch(e)} className={styles.searchbar} value={text} type="text" placeholder="Summoner Name"></input>
                <button>Submit</button>
            </form>
            {summoner.id !== undefined &&
                <div>
                    <p>{summoner.name}</p>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/${summoner.profileIconId}.png`}></img>
                    <p>{summoner.summonerLevel}</p>
                </div>}
        </div>
    )
}