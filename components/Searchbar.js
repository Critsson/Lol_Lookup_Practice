import React from "react"
import styles from "../styles/Searchbar.module.css"

export default function Searchbar(props) {
    return (
        <div>
            <input className={styles.searchbar} type="text" placeholder="Summoner Name"></input>
        </div>
    )
}