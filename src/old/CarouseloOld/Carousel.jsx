import React, { useEffect, useState } from "react";
import CardCarousel from "./CardCarousel";
import { getPost } from "../../api/post";
import Images from "../../common/images/index";

const Carousel = () => {
  const [arrayCarousel, setArrayCarousel] = useState([]);

  useEffect(() => {
    let unmounted = false;
    const month = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(
      new Date()
    );

    getPost("Main Post")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (!unmounted) {
          var getArray = res.posts;
          getArray.unshift({
            author: "Admin",
            category: "birthday",
            createdAt: "",
            createdBy: "",
            description:
              "Como parte de las nuevas políticas de binestar de la DGAPP, el día del cumpleaños de colaborador es libre, si cae fin de semana puede tomarlo otro día en el mismo mes.",
            image: Images.cumpleanos,
            isActive: true,
            modifiedAt: "",
            modifiedBy: "",
            postId: 1,
            title: "Mes de " + month.replace(/^\w/, (c) => c.toUpperCase()),
            views: 0,
          });

          setArrayCarousel((arrayCarousel) => [...arrayCarousel, ...res.posts]);
        }
      })
      .catch((err) => {
        console.error(err.status);
      });

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <>
      <div className="carousel-container">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {arrayCarousel.map((post, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={index}
                  className="active"
                  aria-current="true"
                  aria-label={`Slide ${index}`}
                />
              );
            })}
            ;
            {/* <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            /> */}
          </div>

          <div className="carousel-inner">
            {arrayCarousel.map((post, index) => {
              return (
                <CardCarousel
                  index={index}
                  key={post.postId}
                  id={post.postId}
                  img={post.image}
                  title={post.title}
                  description={post.description}
                  date={post.createdAt}
                />
              );
            })}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;