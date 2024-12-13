import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Textimonials = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <section>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div>
                    {
                        reviews?.map(review => <SwiperSlide key={review._id} >
                            <div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating} readOnly    
                                />
                                <p>{review.name}</p>
                                <p>{review.details}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </section>
    );
};

export default Textimonials;