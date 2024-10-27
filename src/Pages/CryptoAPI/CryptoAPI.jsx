import DataSection from './Components/DataSection';
import MainSection from './Components/MainSection';
import CryptoProvider from '../../APIHooks/CryptoContext';

const CryptoAPI = () => {

    return (
        <>
            <CryptoProvider>
                <MainSection />
                <DataSection />
            </CryptoProvider>
        </>
    );
};

export default CryptoAPI;
