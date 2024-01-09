import Slider from 'react-slick';
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import review1 from '../../images/photos/review1.png';
import review2 from '../../images/photos/review2.png';
import review3 from '../../images/photos/review3.png';
import review4 from '../../images/photos/review4.png';
import review5 from '../../images/photos/review5.png';

const TestimonialsSlider = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = id => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      content:
        "Консультація з Настею допомогла мені почати кар'єру фрілансера і знайти класних клієнтів. За",
      name: 'Микола',
      title: 'UI/UX Designer',
      imageSrc: review1,
    },
    {
      id: 2,
      content:
        'Доброго вечора, Анастасія! Величезне дякую вам за поради. Спрацювало! Шукала клієнтів з Європи, як ви рекомендували. Вже є 1 зроблена робота. Хоч й не ідеально (обрали іншого кандидата), але на 1 текст в портфоліо стало більше))',
      name: 'Світлана',
      title: 'Копірайтер',
      imageSrc: review2,
    },
    {
      id: 3,
      content:
        'Насть, дуже тобі вдячна за консультацію, через тиждень після того як виконали твої поради зʼявився перший клієнт! Всі поради дієві і без них би точно не впорались, так і далі б продовжували порожньо відправляти запити. ВЕЛИКЕ ДЯКУЮ!',
      name: 'Христина',
      title: ' Маркетолог, Кріпто експерт',
      imageSrc: review3,
    },
    {
      id: 4,
      content:
        'Щиро дякую за консультацію по Upwork! Опанувати систему набагато легше, коли допомагає професіонал, аніж самотужки витрачати час. Все чітко та зрозуміло. Люблю людей, які працюють «на своєму місці». Ви одна із них. Ще й допомагаєте іншим знайти це «своє місце».',
      name: 'Дарина',
      title: 'Копірайтер',
      imageSrc: review4,
    },
    {
      id: 5,
      content:
        'ДЯКУЮ, Настя, за консультації і матеріалию Це дійсно той «магічний поштовх», якого не вистачало. Тепер є стратегія і все по поличкам',
      name: 'Анна',
      title: 'UI/UX Designer',
      imageSrc: review5,
    },
  ];

  return (
    <Slider {...settings}>
      {testimonials.map(testimonial => (
        <div
          className={`testimonial-slide ${
            expandedId === testimonial.id ? 'expanded' : ''
          }`}
        >
          <div className="testimonial_wrapper">
            <img
              className="testimonial_image"
              src={testimonial.imageSrc}
              alt="name"
            />
            <div className="testimonial-content">
              <p>{testimonial.content}</p>
            </div>
            <span
              className="expand-text"
              onClick={() => toggleExpand(testimonial.id)}
            >
              Бiльше
              <i className="arrow-icon">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.44984 8.10549C3.49337 8.06191 3.54507 8.02733 3.60197 8.00374C3.65888 7.98015 3.71988 7.96801 3.78148 7.96801C3.84308 7.96801 3.90408 7.98015 3.96098 8.00374C4.01789 8.02733 4.06958 8.06191 4.11312 8.10549L7.53148 11.5244L7.53148 2.34338C7.53148 2.21906 7.58086 2.09983 7.66877 2.01192C7.75668 1.92402 7.87591 1.87463 8.00023 1.87463C8.12455 1.87463 8.24378 1.92402 8.33168 2.01192C8.41959 2.09983 8.46898 2.21906 8.46898 2.34338V11.5244L11.8873 8.10549C11.9753 8.01753 12.0946 7.96812 12.219 7.96812C12.3434 7.96812 12.4627 8.01753 12.5506 8.10549C12.6386 8.19345 12.688 8.31274 12.688 8.43713C12.688 8.56152 12.6386 8.68082 12.5506 8.76877L8.33187 12.9875C8.28833 13.0311 8.23664 13.0657 8.17973 13.0893C8.12283 13.1129 8.06183 13.125 8.00023 13.125C7.93863 13.125 7.87763 13.1129 7.82072 13.0893C7.76382 13.0657 7.71212 13.0311 7.66859 12.9875L3.44984 8.76877C3.40625 8.72524 3.37168 8.67354 3.34809 8.61663C3.3245 8.55973 3.31236 8.49873 3.31236 8.43713C3.31236 8.37553 3.3245 8.31453 3.34809 8.25763C3.37168 8.20072 3.40625 8.14902 3.44984 8.10549Z"
                    fill="#013252"
                  />
                </svg>
              </i>{' '}
              {/* Иконка стрелки */}
            </span>
            <div className="testimonial-footer">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsSlider;
