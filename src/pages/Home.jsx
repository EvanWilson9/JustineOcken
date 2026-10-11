import { Link } from "react-router-dom";

const featured = [
  {
    src: "/images/drawings/horse2.jpg",
  },
  {
    src: "/images/drawings/people3.jpg",
  },
  {
    src: "/images/sculptures/cowboy.jpg",
  },
  {
    src: "/images/drawings/objects.jpg",
  },
];

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">Artist · Indiana</p>
          <h1>
            Stories drawn from
            <em> open country</em>
          </h1>
          <p className="lede">
            Colored pencil, paint, and sculpture for the people, animals, and
            landscapes that make a place feel like home.
          </p>
          <div className="hero-actions">
            <Link to="/gallery" className="btn btn-primary">
              View the gallery
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              Commission
            </Link>
          </div>
        </div>
        <figure className="hero-frame">
          <img
            src="/images/drawings/horse4.jpg"
            alt="Horse artwork by Justine Ocken"
          />
        </figure>
      </section>

      <section className="awards-bar" aria-label="Selected honors">
        <p>
          <span>Scholastics</span>
          Gold Key &amp; eight additional awards
        </p>
        <p>
          <span>Indiana State Fair</span>
          Seven special merits
        </p>
        <p>
          <span>Connections Calendar</span>
          2024 Artist of the Year
        </p>
      </section>

      <section className="essay-block">
        <div className="essay-text">
          <p className="kicker">Why art</p>
          <h2>A family trade, in a different medium.</h2>
          <p>
            Art has always been a prominent part of my life. My parents are both
            artisans who created and ran their own business making cowboy tack
            and wear as a way to showcase who their clients are as people.
          </p>
          <p>
            After watching them I found my own way to do this in my own style.
            Through colored pencil, paint, sculpture and more I showcase stories
            of the most beautiful people and parts of the world.
          </p>
        </div>
        <figure className="essay-photo offset-right">
          <img src="/images/justine-portrait.jpg" alt="Justine Ocken" />
        </figure>
      </section>

      <section className="practice-row" aria-label="Studio practice">
        <article>
          <p className="kicker">01</p>
          <h3>Drawing</h3>
          <p>Colored pencil studies of horses, people, still life, and the quiet details of a place.</p>
        </article>
        <article>
          <p className="kicker">02</p>
          <h3>Sculpture</h3>
          <p>Clay figures and family portraits — work you can walk around, not only look at.</p>
        </article>
        <article>
          <p className="kicker">03</p>
          <h3>Commissions</h3>
          <p>Custom pieces built around a story: a person, an animal, or the land they live on.</p>
        </article>
      </section>

      <section className="essay-block reverse">
        <figure className="essay-photo offset-left">
          <img
            src="/images/justine-prof.jpg"
            alt="Justine working on a drawing"
          />
        </figure>
        <div className="essay-text">
          <p className="kicker">The journey</p>
          <h2>Work shown across Indiana.</h2>
          <p>
            My art has been showcased all over Indiana through contests such as
            the Scholastic Art &amp; Writing Awards, the Indiana State Fair, and
            the Indiana Connections Calendar.
          </p>
          <p>
            Notable achievements include one Gold Key as well as eight other
            Scholastic awards, seven Indiana State Fair special merits, and
            Artist of the Year for the 2024 Indiana Connections Calendar.
          </p>
        </div>
      </section>

      <section className="featured-work" aria-labelledby="featured-title">
        <header className="featured-head">
          <div>
            <p className="kicker">Selected work</p>
            <h2 id="featured-title">A few pieces from the studio.</h2>
          </div>
          <Link to="/gallery" className="text-link">
            See the full collection
          </Link>
        </header>
        <div className="featured-grid">
          {featured.map((work, index) => (
            <Link
              to="/gallery"
              className={`gallery-tile featured-tile tile-${index + 1}`}
              key={work.src}
              aria-label={`View selected artwork ${index + 1} in the gallery`}
            >
              <img src={work.src} alt="" />
            </Link>
          ))}
        </div>
        <aside className="gallery-note">
          <p>Want to live with a piece, or commission one in a similar spirit?</p>
          <Link to="/contact" className="text-link">
            Commission
          </Link>
        </aside>
      </section>

      <section className="commission-band">
        <figure className="commission-media">
          <img
            src="/images/justine-family.jpg"
            alt="Sculptural work with family members"
          />
        </figure>
        <div className="commission-copy">
          <p className="kicker">Commissions</p>
          <h2>A custom piece, made with a story.</h2>
          <p>
            I enjoy creating art with a story. If you want a custom and
            meaningful piece in any medium, I would be more than happy to work
            with you to make it a reality. I specialize in organic subjects such
            as people, plants, and animals — but I enjoy a challenge, so if
            you&apos;re not sure, just ask.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Commission
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
