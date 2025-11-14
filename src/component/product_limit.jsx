import Product_Card from "./product_card";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Product_Limit() {
    return (

        <div className="mt-5 bg-amber-50 lg:px-40 md:px-10 ">
            <div className="flex justify-between px-3 md:px-20">
                <h1>Hàng mới</h1>
                <p className="text-amber-400">Xem thêm</p>
            </div>
            <div className="flex d mt-2 ">
                <Swiper
                 
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 5,

                        },
                        540: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        920: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },


                        1400: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    <SwiperSlide>

                        <Product_Card
                            TenSP={"Funko POP! Stranger Things (Season 5) - Steve Harrington"}
                            GiaSP={560000}
                            GiamGia={20}
                            AnhSP={"https://cdn2-retail-images.kiotviet.vn/2025/10/22/bendshop/09a2b47e311f4addbdcd36403d84ca3f.jpg"}>
                        </Product_Card>
                    </SwiperSlide>

                    <SwiperSlide>

                        <Product_Card
                            TenSP={"Funko POP! Metaphor: ReFantazio - Protagonist"}
                            GiaSP={460000}
                            AnhSP={"https://cdn-images.kiotviet.vn/2025/08/31/bendshop/8d3d5ea3126c46d3be8c950e2dddd1bc.jpg"}>
                        </Product_Card>

                    </SwiperSlide>
                    <SwiperSlide>

                        <Product_Card
                            TenSP={"Funko POP! Metaphor: ReFantazio - Protagonist"}
                            GiaSP={460000}
                            AnhSP={"https://cdn2-retail-images.kiotviet.vn/2025/11/02/bendshop/4623345babbd4ed89296ee74c79ae52e.jpg"}>
                        </Product_Card>

                    </SwiperSlide>
                    <SwiperSlide>

                        <Product_Card
                            TenSP={"Funko POP! Metaphor: ReFantazio - Protagonist"}
                            GiaSP={460000}
                            AnhSP={"https://cdn2-retail-images.kiotviet.vn/2025/04/16/bendshop/7dcddb890a394b55a213f41936919ec7.jpg"}>
                        </Product_Card>

                    </SwiperSlide>
                    <SwiperSlide>

                        <Product_Card
                            TenSP={"Funko POP! Metaphor: ReFantazio - Protagonist"}
                            GiaSP={460000}
                            AnhSP={"https://cdn2-retail-images.kiotviet.vn/2025/11/02/bendshop/3d4bb50c3e7143dabd8b1d82f624a6af.jpg"}>
                        </Product_Card>

                    </SwiperSlide>

                </Swiper>



            </div>
        </div>

    );
} export default Product_Limit;