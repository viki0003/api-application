import MainSection from "../../global-components/MainSection"
import DataSection from "./DataSection"
import { CryptoProvider } from "@/src/APIHooks/CryptoContext";

const CryptoAPI = () => {
    return(
        <CryptoProvider>
            <MainSection header="Crypto Currency API" paragraph="This API is free and provides the extensive way of comprehensive data about cryptocurrencies. The component will display a list of cryptocurrencies"/>
            <DataSection/>
        </CryptoProvider>
    )
}

export default CryptoAPI