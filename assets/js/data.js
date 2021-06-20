var products = [
    {
        id: 'SP001',
        img: "/assets/img/homestay1.jpg",
        name: "Giraffe Room",
        address: "Hà Nội, Việt Nam",
        amount: "1 phòng ngủ",
        price: "1,350,000đ/đêm",
        description: "Giraffe Room một căn hộ studio 40 mét vuông với lối kiến trúc châu Phi. Có thể mở ra cho bạn những ngạc nhiên về một vùng đất mới. Được trang trí độc đáo theo phong cách châu Phi và nằm trong Khu Phố Cổ Hà Nội. Do đó, chỉ cần đi bộ 5 phút là bạn có thể đến tất cả các điểm tham quan nổi tiếng trong thành phố.",
        type: "Căn hộ Studio"
    },
    {
        id: 'SP002',
        img: "/assets/img/homestay2.jpg",
        name: "The Galaxy Home",
        address: "Đà Nẵng, Việt Nam",
        amount: "1 phòng ngủ",
        price: "790,000đ/đêm",
        description: "Căn hộ đều có tiện nghi sang trọng, điện thoại, kênh truyền hình cáp, TV màn hình phẳng, máy lạnh, khu vực phòng khách, máy giặt, tủ quần áo, giá treo quần áo, máy sấy tóc, phòng tắm, dép, vòi hoa sen, ghế sofa, sàn gỗ, tủ lạnh, lò vi sóng, đồ dùng nhà bếp, bàn ăn, khăn tắm, ga trải giường.",
        type: "Chung cư"
    },
    {
        id: 'SP003',
        img: "/assets/img/homestay3.jpg",
        name: "JOI Homestay",
        address: "Thành phố Hồ Chí Minh, Việt Nam",
        amount: "2 phòng ngủ",
        price: "450,000đ/đêm",
        description: "Căn hộ nằm trên tầng 2 của toà nhà. Vị trí không thể tốt hơn !",
        type: "Căn hộ Studio"
    },
    {
        id: 'SP004',
        img: "/assets/img/homestay4.jpg",
        name: "NYNA House",
        address: "Hà Nội, Việt Nam",
        amount: "1 phòng ngủ",
        price: "650,000đ/đêm",
        description: "NYNA House là hệ thống căn hộ với thiết kế đặc sắc và duy nhất, tại NYNA mỗi căn hộ là một câu chuyện được kể lại bằng chất liệu và màu sắc riêng biệt, để bạn có thể lựa chọn trải nghiệm các phong cách sống khác nhau, là chuỗi căn hộ với 100% khép kín với ban công và ánh sáng tự nhiên ngập tràn.",
        type: "Nhà riêng"
    },
    {
        id: 'SP005',
        img: "/assets/img/homestay5.jpg",
        name: "The Bloom Hà Nội",
        address: "Hà Nội, Việt Nam",
        amount: "1 phòng ngủ",
        price: "850,000đ/đêm",
        description: "Căn hộ rộng tới 43m2 có phòng ngủ và khu vực phòng khách, bàn ăn, bếp riêng biệt, phòng tắm có bồn tắm xinh xắn. Đặc biệt, phòng khách còn dẫn ra một ban công rộng rãi nhìn ra con đường Dịch Vọng Hậu tấp nập của quận Cầu Giấy.",
        type: "Biệt thự"
    },
    {
        id: 'SP006',
        img: "/assets/img/homestay6.jpg",
        name: "Luxury Vinhomes",
        address: "Đà Nẵng, Việt Nam",
        amount: "1 phòng ngủ",
        price: "1,110,000đ/đêm",
        description: "Căn hộ mới và hiện đại vừa được trang bị tiện nghi giúp khách hàng cảm thấy như đang ở nhà. Toàn bộ căn hộ tràn ngập ánh sáng tự nhiên, tạo sự vừa thoáng vừa rộng rãi. Các tòa nhà có đầy đủ tiện nghi bao gồm Phòng tập thể dục, bể bơi 4 mùa, sân vườn đẹp, nhà hàng, khu vui chơi trẻ em.",
        type: "Chung cư"
    },
    {
        id: 'SP007',
        img: "/assets/img/homestay7.jpg",
        name: "Anthy Vinhomes",
        address: "Hà Nội, Việt Nam",
        amount: "1 phòng ngủ",
        price: "550,000đ/đêm",
        description: "Căn hộ studio Vinhomes có đầy đủ tiện nghi sinh hoạt đa năng. Xung quanh toà nhà có nhiều nhà hàng, siêu thị với cả hợp lý và đa dạng. Thuận tiện đi lại giữa các khu trung tâm như trung tâm hội nghị quốc gia, sân vận động Mỹ Đình, sân bay Nội Bài, khu phố Hàn Quốc, trung tâm thương mại lớn, lên phố cổ chỉ 20 phút taxi...",
        type: "Căn hộ Studio"
    },
    {
        id: 'SP008',
        img: "/assets/img/homestay8.jpg",
        name: "Lil's Homestay",
        address: "Thành phố Hồ Chí Minh, Việt Nam",
        amount: "2 phòng ngủ",
        price: "1,350,000đ/đêm",
        description: "Lii's Homestay là 1 homestay nằm ở giữa lòng thủ đô Hà Nội ngay sát Hồ tây. Lii's Homestay hướng tới yếu tố thiên nhiên trong quộc sống, chúng tôi luôn chăm chút từng decor nhỏ nhất trong phòng. Chúng tôi chăm sóc khác hàng của mình như những người trong gia đình. Lii's Homestay rất yên tĩnh . Chỉ với 5 phút đi là các bạn sẽ tới được Hồ Tây. Hãy đến với chúng tôi ngay hôm nay",
        type: "Biệt thự"
    }
]

if(sessionStorage.getItem('products') === null) {
    sessionStorage.setItem('products', JSON.stringify(products));
}

var users = [
    {
        id: 'US001',
        img: '/assets/img/img-99.jpg',
        fullName: 'Admin',
        dateOfBirth: '2001-01-01',    
        address: 'Sài Gòn',
        phoneNumber: '0972603963',    
        email: 'admin',
        password: 'admin'
    },
    {
        id: 'US002',
        img: '/assets/img/img-99.jpg',
        fullName: 'Đặng Hoàng Long',
        dateOfBirth: '2001-07-24',    
        address: 'Hưng Yên',
        phoneNumber: '0971603963',    
        email: 'long',
        password: 'long'
    },
    {
        id: 'US003',
        img: '/assets/img/img-99.jpg',
        fullName: 'Nguyễn Văn Tuấn',
        dateOfBirth: '2001-02-12',    
        address: 'Hà Nội',
        phoneNumber: '0971603964',    
        email: 'tuan',
        password: 'tuan'
    }
]

if(sessionStorage.getItem('users') === null) {
    sessionStorage.setItem('users', JSON.stringify(users));
}


var news = [
    {
        id: 'N001',
        img: '/assets/img/news1.jpg',
        time: '2021-03-28',
        title: 'Top 5 resort được xuất hiện tại tạp chí du lịch của Mỹ',
        description: 'Đây là một lựa chọn tuyệt vời cho du khách khi đặt chân đến Đà Nẵng. Resort này chỉ cách sân bay quốc tế Đà Nẵng 10 phút lái xe và có tầm nhìn thẳng ra bãi biển Mỹ Khê đẹp bậc nhất Việt Nam. Với 87 villa sở hữu bể bơi và sân vườn riêng, Fusion Maia Resort phù hợp cho những gia đình, cặp đôi muốn tận hưởng kỳ nghỉ riêng tư, ấm cúng. Để đảm bảo sự hài lòng từ khách hàng, resort luôn hướng tới việc đem đến 3 trải nghiệm trong suốt kỳ nghỉ, gồm lành mạnh, tinh tế và độc đáo.Đến resort này, du khách có thể trải nghiệm dịch vụ spa đẳng cấp, kết hợp cùng các khóa học yoga, khí công… Một trong những dịch vụ được resort giới thiệu nhiều nhất là “ăn sáng mọi lúc mọi nơi”. Điều này có nghĩa các nhân viên sẽ phục vụ bữa ăn cho “thượng đế” theo yêu cầu. Đó có thể là trong villa, cạnh hồ bơi, trên bãi biển vào trưa muộn, chiều tà hay thậm chí đêm khuya. Giá phòng dành cho 2 người dao động khoảng 7 triệu đồng/đêm. Amanoi (Ninh Thuận Tên gọi “Amanoi” mang ý nghĩa “hòa bình”. Dựa trên tiêu chí này, Amanoi hứa hẹn đem đến một trải nghiệm nghỉ dưỡng yên bình bên bãi biển cát trắng, nhìn ra vịnh Vĩnh Hy tuyệt đẹp cho du khách. Đây là một trong số ít những resort được đánh giá vượt trên tiêu chuẩn 5 sao ở Việt Nam. Do đó, mức giá mỗi đêm ở Amanoi có thể lên tới trên dưới 100 triệu đồng. Tuy nhiên, tùy theo nhu cầu, du khách có thể chọn những biệt thự có giá vừa tầm hơn.'
    },
    {
        id: 'N002',
        img: '/assets/img/news2.jpg',
        time: '2001-03-28',
        title: 'Du lịch Cần Thơ nhất định phải ghé thăm những địa điểm này',
        description: 'Chợ nổi Cái Răng, Chợ nổi là một nét văn hóa đặc trưng của miền Tây Nam Bộ mà du khách khó có thể tìm thấy ở địa phương khác. Chợ nổi Cái Răng chuyên mua bán các loại trái cây, nông sản của vùng. Vào mỗi buổi sáng, hàng trăm con thuyền lớn bé đậu san sát nhau tạo nên khung cảnh mua bán tấp nập. Bạn nên đến vào buổi sáng sớm để có thể thưởng thức bữa sáng thú vị trên thuyền và chứng kiến không khí nhộn nhịp nơi đây. Nhà cổ Bình Thủy, Ngôi nhà nằm trên đường Bùi Hữu Nghĩa, phường Bình Thủy, quận Bình Thủy, Cần Thơ. Nhà cổ Bình Thủy được thiết kế với 5 gian, 2 mái, mang kiến trúc phương Tây. Các vật dụng trong ngôi nhà được làm từ nhiều loại gỗ quý và được chạm khắc tinh xảo, đặc trưng của lối sống sinh hoạt của miền Tây Nam Bộ. Đồng thời, nơi đây còn lưu giữ nhiều đồ cổ quý giá suốt 140 năm qua.'
    },
    {
        id: 'N003',
        img: '/assets/img/news3.jpg',
        time: '2021-05-12',
        title: 'Tuần lễ “Tôi yêu bánh mì Sài Gòn” chính thức diễn ra từ ngày 24/3',
        description: 'Tuần lễ “Tôi yêu bánh mì Sài Gòn” Nhân kỷ niệm năm thứ 9 mục từ “bánh mì” được từ điển Oxford ghi nhận (24/3/2011-24/3/2020) và hiện tượng Google đưa bánh mì thành hình Doodle ở 12 quốc gia trên thế giới, Sở Du lịch TP.HCM phối hợp cùng Hiệp hội Văn hóa ẩm thực Việt Nam tổ chức tuần lễ “Tôi yêu bánh mì Sài Gòn”. Sự kiện nhằm giới thiệu rộng rãi hơn đến bạn bè và du khách quốc tế nét đặc sắc của món ăn gắn liền với cuộc sống người Sài thành nói riêng và Việt Nam nói chung.'
    }
]

if(sessionStorage.getItem('news') === null) {
    sessionStorage.setItem('news', JSON.stringify(news));
}

