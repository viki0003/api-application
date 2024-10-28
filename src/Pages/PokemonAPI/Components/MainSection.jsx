import { Link } from "react-router-dom"


const MainSection = () => {
    return (
        <>
            <div className="json-api-banner banner">
                <div className="container">
                    <h1>All About <strong>Pokemon API</strong></h1>
                    <p>
                        PokéAPI is free and open to use. It is also very popular. Because of this, we ask every developer to abide by our fair use policy.
                        PokéAPI is primarily an educational tool, and we will not tolerate denial of service attacks preventing people from learning.
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