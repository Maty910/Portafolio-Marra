export function Projects ({ projectName, imgFileName }) {
    return ( 
      <main>
        <section className="pm-reel-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kc0lnXQw6K4?si=UZrEYnTwnjc4gjcJ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        <section className="pm-projects-container">
            <div className="pm-project">
                <a href="">
                    <div className="pm-project-image">
                        <img src={`./../public/img/${imgFileName}`} alt="Imagen del proyecto"/>
                        <span class="pm-project-text">{projectName}</span>
                    </div>
                </a>
            </div>
        </section>
      </main>
    )
}