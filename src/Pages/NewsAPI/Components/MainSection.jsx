import { Link } from "react-router-dom"

const MainSection = () => {
    return (
        <>
            <div className="json-api-banner banner">
                <div className="container">
                    <h1>All About <strong>NewsAPI</strong></h1>
                    <p>
                        Locate articles and breaking news headlines from news sources and blogs across the web with JSON API. News API is a simple, easy-to-use REST API.
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
        </>
    )
}

export default MainSection