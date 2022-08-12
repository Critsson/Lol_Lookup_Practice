import Searchbar from "../components/Searchbar"
import styles from "../styles/Search.module.css"

export default function Search({data}) {

    console.log(data);

    return (
        <div>
            <div className={styles.center_container}>
                <h1>LoL Lookup</h1>
                <Searchbar />
                
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Gl0star?api_key=RGAPI-a957c7c3-954d-49b6-add3-53fca96f91d0`)
    const data = await response.json()

    return {
        props: {
            data: data
        }
    }
}