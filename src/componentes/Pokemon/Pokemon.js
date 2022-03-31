import './Pokemon.css'
function Pokemon(props){
    return(
        <div className="lista">
            <li>{props.pokemon.name}</li>
        </div>
    )
}

export default Pokemon