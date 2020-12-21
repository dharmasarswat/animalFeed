export const productsCategory = [
    {
        name: 'Cattle Feed',
        desc: 'India is the world’s largest producer and consumer of milk, with rapidly growing demand. Our Cattle Feed products are prepared with a deep understanding of Indian feeding practices and the breed and milk production levels of cows and buffaloes. These products contain proteins, energy, minerals and vitamins in adequate quantity and proportion to meet the nutritional requirements of dairy cattle. We offer a variety of Cattle Feed to enhance milk production, reproductive ability and the overall health of cattle. We also work closely with farmers and offer on-site assistance to help them achieve higher yields.',
        img: '/images/cow.png',
        link: '/dairyNutrition'
    },
    {
        name: 'Poultry Feed',
        desc: 'In the last few decades, the Indian poultry industry has evolved from a small-scale off-farm activity to commercial farming. Our Poultry Feed and concentrates are formulated by using superior quality grains, amino acids, vitamins and minerals to address the growing demand for poultry meat and eggs. The Broiler Feed helps in weight gain and faster growth, which in turns, improves the feed conversion ratio. Our Layer Feed helps in meeting the nutritional needs of birds at each life-stage and also, optimising the egg production of the flock.',
        img: '/images/hen.png',
        link: '/homemixNutrition'
    },
    {
        name: 'Specialty Feed',
        desc: 'Our range of Specialty Feed is formulated to meet the varied nutritional requirements of sheep and goats. They help increase wool production, weight gain and milk yield. We also have Feed products which are tailored to result in faster weight gain in ducks, quails, turkeys and pigs, reared for their meat.',
        img: '/images/sheep.png',
        link: '/specialityFeed'
    },
] 

export const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 678,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                dots: false,
            },
        },
    ],
};