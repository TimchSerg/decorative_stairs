import React, { Component } from "react";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

const reviews = [
  {
    img: 'square_320_1d6de3806d700e48f1f2efd9d868c422.jpg',
    fio: 'Лиза Евдокимова',
    rating: 5,
    review: 'Большая благодарность компании forest-room46 за качественную работу! Очень переживала, выбирая компанию. Но нисколько не пожалела, что выбрала именно вас! Все объяснили, показали все этапы производства, быстро и качественно все установили... У меня ощущение, что она была у нас всегда'
  },
  {
    img: null,
    fio: 'Юрий',
    rating: 5,
    review: 'Одна лестница уже сделана, сейчас замахнулся на вторую. Качество очень хорошее. И материал лестницы и покраска. Ходим по ней с удовольствием. Не скрипит, не люфтит! Вовремя и качественно выполнено. Рекомендации по работе самые лестные. Одно из качеств- это уважительное отношение к заказчику. С удовольствием рекомендую его как исполнителя!'
  },
  {
    img: null,
    fio: 'Николай Нестеров',
    rating: 5,
    review: 'Потрясающая работа! Заранее проговорили максимальные сроки изготовления, но выполнили гораздо раньше! В итоге НГ встречали с новой лестницей! Я получил именно то, что хотел. Были какие-то мелочи, которые изначально не проговаривались, но в процессе установки все решили в мою пользу - очень редко бывает в наше время. В итоге получил шикарную лестницу из брашированного ясеня и врезанной подсветкой ступеней. Ничего не скрипит и не люфтит. На каникулы приходили гости и отстегнули челюсти от лестницы))) С удовольствием буду рекомендовать компанию forest-room как надежного и профессионального исполнителя!'
  }
]

export class Reviews extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      speed: 500
    };

    const render = reviews.map( (review) => (
      <div className="reviews p-3">
        <div className="reviews-logo d-flex">
        {/* review-view__user-icon */}
          {review.img ? (
            <div 
              className="review-view__user-icon" 
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/' + review.img})`  }}
            ></div>
          ) : (
            <div 
              className="review-view__user-icon review-view__user-text" 
            >{review.fio[0]}</div>
          )}
          
          <div>
            <h5 className="m-0"><strong>{review.fio}</strong></h5>
            <ReactStars 
              size={18}
              value={review.rating}
              edit={false}
              isHalf
            />
          </div>
          </div>
        <p style={{ color: "#464646" }}>{review.review}</p>
      </div>
    ) )

    return (
        <Slider {...settings}>
          {render}
        </Slider>
    );
  }
}