import React from "react";
import oldman from "../../utils/oldperson.jpeg";
import singer from "../../utils/arijitsingh.jpeg";
import videocall from "../../utils/callmeplz.jpeg";

const Image = () => {
  return (
    <div style={{ marginTop: "2vh" }}>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner" style={{ height: "78vh" }}>
          <div class="carousel-item active h-100" data-bs-interval="10000">
            <img src={oldman} class="d-block mx-auto h-100 w-auto" alt="..." />
            <div class="carousel-caption d-block">
              <h5>First</h5>
              <p>
                But Sehalo isn't just about the public display of art; it's also
                about nurturing personal well-being. With our private mode,
                we've curated a collection of resources and tools. In today's
                fast-paced world, it's easy to neglect our emotional well-being,
                which is why Sehalo is committed to providing a sanctuary where
                users can find solace, support, and inspiration. Sehalo's
                private mode is here to help, Let's check the meter of your
                Happiness in the Private mode of Sehalo app.{" "}
              </p>
            </div>
          </div>
          <div class="carousel-item h-100" data-bs-interval="2000">
            <img
              src={videocall}
              class="d-block mx-auto h-100 w-auto"
              alt="..."
            />
            <div class="carousel-caption d-block">
              <h5>Second</h5>
              <p>
                Introducing Sehalo, the innovative app designed to bridge the
                gap between artists and audiences, all under the overarching
                theme of "Art with Emotions". Our platform's Public mode serves
                as a vibrant hub where artists can showcase their creativity and
                connect with an eager audience who appreciates their work.
                Whether you're a painter, musician, poet, or any other form of
                artist, Sehalo provides the perfect stage for you to express
                yourself and share your art with the world. Through our unique
                interface, users can explore a diverse range of artistic
                expressions and immerse themselves in a world where emotions
                come to life through art with the priority of Happiness and
                Loyalty.
              </p>
            </div>
          </div>
          <div class="carousel-item h-100">
            <img src={singer} class="d-block mx-auto h-100 w-auto" alt="..." />
            <div class="carousel-caption d-block">
              <h5>Third</h5>
              <p>
                Ready to embark on a journey of artistic discovery and personal
                growth? Install Sehalo now and join our community of passionate
                artists and individuals dedicated to exploring the profound
                connection between art and emotions. With just a click, you'll
                gain access to a world of creativity, connection, and self-care.
                Embrace the power of art and unlock the path to a happier, more
                fulfilling life with Sehalo.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
