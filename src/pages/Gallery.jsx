import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const drawingFiles = [
  "dog2.jpg",
  "dog3.jpg",
  "dog5.jpg",
  "horse-style.jpg",
  "horse2.jpg",
  "horse4.jpg",
  "horse6.jpg",
  "horse7.jpg",
  "horse8.jpg",
  "horse9.jpg",
  "horse10.jpg",
  "object4.jpg",
  "object5.jpg",
  "object6.jpg",
  "objects3.jpg",
  "people3.jpg",
  "people4.jpg",
  "people5.jpg",
  "people6.jpg",
  "people7.jpg",
  "people8.jpg",
  "people9.jpg",
  "people10.jpg",
  "coin1.jpg",
  "coin2.jpg",
  "coin3.jpg",
  "coin4.jpg",
  "coin5.jpg",
  "coin6.jpg",
  "coin7.jpg",
  "coin8.jpg",
  "coin9.jpg",
  "coin10.jpg",
  "coin11.jpg",
];

const sculptureFiles = [
  "family.jpg",
  "family2.jpg",
  "brother1.jpg",
  "brother2.jpg",
  "justine.jpg",
  "dog1.jpg",
  "dog2.jpg",
  "dog3.jpg",
  "dog4.jpg",
  "cowboy.jpg",
  "dragonfly1.jpg",
  "dragonfly2.jpg",
  "dragonfly3.jpg",
  "dragonfly4.jpg",
  "dragonfly5.jpg",
  "dragonfly6.jpg",
  "dragonfly7.jpg",
  "tinman1.jpg",
  "tinman2.jpg",
  "tinman3.jpg",
  "neckalace1.jpg",
];

function workFromFile(file, medium) {
  return {
    src: `/images/${medium === "Sculpture" ? "sculptures" : "drawings"}/${file}`,
    medium,
  };
}

const works = [
  ...drawingFiles.map((file) => workFromFile(file, "Drawing")),
  ...sculptureFiles.map((file) => workFromFile(file, "Sculpture")),
];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const visible = useMemo(() => {
    if (filter === "All") return works;
    return works.filter((work) => work.medium === filter);
  }, [filter]);

  useEffect(() => {
    if (active === null) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((i) => (i + 1) % visible.length);
      }
      if (event.key === "ArrowLeft") {
        setActive((i) => (i - 1 + visible.length) % visible.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, visible.length]);

  useEffect(
    () => () => {
      document.body.style.overflow = "";
    },
    [],
  );

  return (
    <div className="page gallery-page">
      <header className="page-intro">
        <p className="kicker">The collection</p>
        <div className="intro-row">
          <h1>Drawings &amp; sculpture</h1>
          <p>
            Studies of horses, people, still life, and clay figures. Select a
            work to view it more closely.
          </p>
        </div>
        <div className="filter-row" role="tablist" aria-label="Gallery medium">
          {["All", "Drawing", "Sculpture"].map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={
                filter === item ? "filter-btn is-active" : "filter-btn"
              }
              onClick={() => {
                setFilter(item);
                setActive(null);
              }}
            >
              {item === "All" ? "All works" : `${item}s`}
            </button>
          ))}
          <span className="filter-count">{visible.length} pieces</span>
        </div>
      </header>

      <div className="gallery-grid">
        {visible.map((work, index) => (
          <button
            key={work.src}
            type="button"
            className={`gallery-tile tile-${(index % 5) + 1}`}
            onClick={() => setActive(index)}
          >
            <img src={work.src} alt={`Artwork ${index + 1} by Justine Ocken`} />
          </button>
        ))}
      </div>

      <aside className="gallery-note">
        <p>Interested in a piece, or a commission in a similar spirit?</p>
        <Link to="/contact" className="text-link">
          Commission
        </Link>
      </aside>

      {active !== null && visible[active] && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Artwork preview"
          onClick={() => setActive(null)}
        >
          <div
            className="lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={visible[active].src} alt="Artwork by Justine Ocken" />
            <div className="lightbox-bar">
              <div className="lightbox-controls">
                <button
                  type="button"
                  onClick={() =>
                    setActive((i) => (i - 1 + visible.length) % visible.length)
                  }
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setActive((i) => (i + 1) % visible.length)}
                >
                  Next
                </button>
                <button type="button" onClick={() => setActive(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
