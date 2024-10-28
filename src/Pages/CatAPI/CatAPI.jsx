import { CatApiProvider } from "../../APIHooks/CatApiContext"
import DataSection from "./Components/DataSection"
import MainSection from "./Components/MainSection"

const CatAPI = () => {
    return (
        <>
            <CatApiProvider>
                <MainSection />
                <DataSection />
            </CatApiProvider>
        </>
    )
}

export default CatAPI