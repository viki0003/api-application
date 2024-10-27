const HomeBanner = () => {
    return (
        <>
            <div className="home-banner">
                <div className="home-main-content">
                    <h1>Your Ultimate Gateway to Free APIs: Explore & Innovate!</h1>
                    <p>Welcome to your one-stop destination for free APIs! Our application offers an extensive library of APIs across various categories, complete with working models and ready-to-use code snippets. Whether you're a seasoned developer or just starting, find the perfect API to elevate your projects and bring your ideas to life!</p>
                    <button className="Btn-Container">
                        <span className="text">API List</span>
                        <span className="icon-Container">
                            <svg
                                width="16"
                                height="19"
                                viewBox="0 0 16 19"
                                fill="nones"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                                <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                                <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                                <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                                <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                                <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                                <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                                <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                                <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                                <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
                            </svg>
                        </span>
                    </button>

                </div>
            </div>
        </>
    )
}

export default HomeBanner