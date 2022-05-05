import Searchbar from "./Searchbar"


export default function Header({setCurrentData, setLocation}){



    return(<>
    <h1>Weather.me</h1>
    <Searchbar
    setCurrentData={setCurrentData}
    setLocation={setLocation}
    />
    </>)
}