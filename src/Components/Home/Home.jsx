import React, { useState } from 'react';
import Homesecond from './Homesecond';
import './Home.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://images.squarespace-cdn.com/content/v1/56b57728044262669384ea91/61cb0b55-8569-4bde-8ce5-116eca3b230e/Fav+Moments.jpg?format=1000w',

    key: 1,
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/56b57728044262669384ea91/68bafcae-c47a-4ead-b89a-fe08e531334b/Fairfax+Ave+Title.jpg?format=1000w',

    key: 2,
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/56b57728044262669384ea91/1633892808110-E0MW4RX7OY2Y0U5QM8IL/Harpeth+Trace+Title+Page+copy.jpg?format=1000w',

    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return; 
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return; 
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return; 
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}  
        onExited={() => setAnimating(false)} 
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{
            width: '100%',   
            height: '800px',  
            objectFit: 'cover',  
          }}
          className="d-block w-100 h-100"
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <Homesecond />
    </>
  );
}

export default Example;
