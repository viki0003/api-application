import { Link } from "react-router-dom"

const MainSection = () => {
    return (
        <div className="json-api-banner banner">
            <div className="container">
                <h1>All About <strong>Crypto API</strong></h1>
                <p>
                    This API is free and provides comprehensive data about cryptocurrencies. The component will display a list of cryptocurrencies with their name, current price, and price change percentage over the last 24 hours.
                </p>
                <Link className="cta">
                    <span>Check More</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>
            </div>
        </div>

    )
}

export default MainSection