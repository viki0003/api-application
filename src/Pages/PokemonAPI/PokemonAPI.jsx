
import MainSection from './Components/MainSection'
import DataSection from './Components/DataSection'
import PokemonProvider from '../../APIHooks/PokemonContext';

const PokemonAPI = () => {

    return (
        <>
            <PokemonProvider>
                <MainSection />
                <DataSection />
            </PokemonProvider>
        </>
    )
}

export default PokemonAPI