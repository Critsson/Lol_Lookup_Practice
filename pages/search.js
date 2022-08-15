import Searchbar from "../components/Searchbar"
import styles from "../styles/Search.module.css"
import React from "react"

export default function Search() {


    return (
        <div>
            <div className={styles.center_container}>
                <h1>LoL Lookup</h1>
                <Searchbar />
            </div>
        </div>
    )
}