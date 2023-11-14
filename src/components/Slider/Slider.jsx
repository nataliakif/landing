import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import review1 from '../../images/photos/review1.png';
import review2 from '../../images/photos/review2.png';
import review3 from '../../images/photos/review3.png';
import review4 from '../../images/photos/review4.png';
import review5 from '../../images/photos/review5.png';

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
        'Доброго вечора, Анастасія!Величезне дякую вам за поради. Спрацювало! Шукала клієнтів з Європи, як ви рекомендували. Вже є 1 зроблена робота. Хоч й не ідеально (обрали іншого кандидата), але на 1 текст в портфоліо стало більше))',
      name: 'Світлана',
      title: 'Копіпайтер',
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
        'Щиро дякую за консультацію про Upwork! Опанувати систему набагато легше, коли допомагає професіонал, аніж самотужки витрачати час. Все чітко та зрозуміло. Люблю людей, які працюють «на своєму місці». Ви одна із них. Ще й допомагаєте іншим знайти це «своє місце».',
      name: 'Дарина',
      title: 'Копіпайтер',
      imageSrc: review4,
    },
    {
      id: 5,
      content:
        'ДЯКУЮ, Настя, за консультації і матеріали Це дійсно той «магічний поштовх», якого не вистачало. Тепер є стратегія і все по поличкам',
      name: 'Анна',
      title: 'UI/UX Designer',
      imageSrc: review5,
    },
  ];

  return (
    <Slider {...settings}>
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="testimonial-slide">
          <img
            className="testimonial_image"
            src={testimonial.imageSrc}
            alt="name"
          />
          <div className="testimonial-content">
            <p>{testimonial.content}</p>
          </div>
          <div className="testimonial-footer">
            <h4>{testimonial.name}</h4>
            <p>{testimonial.title}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsSlider;
