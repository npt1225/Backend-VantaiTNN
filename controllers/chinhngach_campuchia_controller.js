const fs = require('fs');
const path = require('path');


const data = {
    "company": "Công ty TNHH TMDV Vận Tải T&N",
    "services_1": {
        "description": "Tại sao Doanh nghiệp nên chọn Vận Tải T&N?",
        "advantages": [
            "Đội ngũ chuyên nghiệp, nhân viên của chúng tôi được đào tạo bài bản, am hiểu sâu sắc về các quy định hải quan và quy trình vận tải, đảm bảo mọi thủ tục diễn ra nhanh chóng và chính xác.",
            "Quy trình thông quan hiệu quả, cam kết xử lý các thủ tục thông quan một cách nhanh chóng, giúp khách hàng tiết kiệm thời gian và giảm thiểu rủi ro.",
            "Dịch vụ khách hàng tận tâm, luôn sẵn sàng hỗ trợ và tư vấn, đảm bảo rằng mọi thắc mắc và yêu cầu của bạn đều được giải quyết kịp thời.",
            "Giải pháp linh hoạt của T&N sẽ tùy theo nhu cầu của khách hàng, chúng tôi cung cấp các giải pháp vận tải đa dạng, từ vận chuyển hàng hóa số lượng lớn đến những lô hàng nhỏ lẻ.Dịch vụ khách hàng tận tâm, luôn sẵn sàng hỗ trợ và tư vấn, đảm bảo rằng mọi thắc mắc và yêu cầu của bạn đều được giải quyết kịp thời."
        ]
    },
    "services_2": {
        "description": "Các mặt hàng mà Vận Tải T&N chuyên vận chuyển:",
        "advantages": "Vận tải T&N có đội xe tải đa dạng trọng tải 1.5 tấn – 2 tấn – 5 tấn – 15 tấn – 25 tấn cũng như đầu kéo container,… có thể đáp ứng tối ưu nhu cầu chuyển hàng của quý khách. Ngoài ra, các chuyến xe đi đều mỗi ngày đảm bảo hàng hóa được vận chuyển theo kế hoạch và đến kho nhận hàng một cách nhanh nhất, hỗ trợ tốt nhất cho tiến độ kinh doanh của quý khách hàng doanh nghiệp cũng như cá nhân."
    },
    "services_3": {
        "description": "Dịch vụ Chính ngạch tuyến Việt Nam – Campuchia T&N cung cấp bao gồm:",
        "advantages": [
            "Vận chuyển hàng hóa chính ngạch từ Việt Nam sang Campuchia và ngược lại.",
            "Tư vấn thủ tục hải quan và các quy định liên quan.",
            "Dịch vụ kho bãi và lưu trữ hàng hóa.",
            "Giao nhận hàng hóa tận nơi, đảm bảo an toàn và đúng tiến độ."
        ]
    },
    "services_img": {
        "image": "https://picsum.photos/200"
    },
    "services_4": {
        "description": "Vận tải T&N có các tiêu chí nổi bật để quý khách hàng lựa chọn chúng tôi cùng đồng hành",
        "details_1": "Việc giao thương giữa Việt Nam và Campuchia đang ngày càng phát triển mạnh mẽ kéo theo nhu cầu vận chuyển hàng hóa Việt Nam – Campuchia tăng lên theo thời gian. Vì vậy, Vận tải T&N luôn nỗ lực không ngừng để hoàn thiện các khâu vận hành, tự tin đồng hành cùng quý khách:\n- Công ty có quy mô và uy tín 10 năm trên thị trường, chính sách hợp lý và hạn chế rủi ro cho khách hàng\n- Công ty có nhiều loại hình dịch vụ đa dạng để có thể hỗ trợ khách hàng tốt nhất\n- Đội ngũ nhân viên tận tâm, sẵn sàng tư vấn và hỗ trợ cùng khách hàng đến cùng\n- Có địa chỉ đơn vị và thông tin rõ ràng, có mã số thuế và giấy phép đăng ký kinh doanh theo đúng pháp luật\n- Là đơn vị vận tải có trụ sở ở cả Việt Nam và Campuchia, có khả năng hỗ trợ giao nhận hàng hóa cho khách hàng một cách thuận lợi nhất.\n- Vận Tải T&N cung cấp cho bạn giá trị nhiều hơn cả một dịch vụ vận chuyển đơn thuần. Chúng tôi đề xuất và thực hiện các giải pháp một cách linh hoạt, trên cơ sở đảm bảo tuân thủ hoàn toàn những quy định của nhà nước mà vẫn đạt được tiêu chuẩn cao nhất về dịch vụ Khách Hàng.",
        "details_2": {
            "description": "Campuchia tăng lên theo thời gian. Vì vậy, Vận tải T&N luôn nỗ lực không ngừng để hoàn thiện các khâu vận hành, tự tin đồng hành cùng quý khách:",
            "list_tieuchi": [
                "Công ty có quy mô và uy tín 10 năm trên thị trường, chính sách hợp lý và hạn chế rủi ro cho khách hàng",
                "Công ty có nhiều loại hình dịch vụ đa dạng để có thể hỗ trợ khách hàng tốt nhất",
                "Đội ngũ nhân viên tậm tâm, sẵn sàng tư vấn và hỗ trợ cùng khách hàng đến cùng",
                "Có địa chỉ đơn vị và thông tin rõ ràng, có mã số thuế và giấy phép đăng ký kinh doanh theo đúng pháp luật",
                "Là đơn vị vận tải có trụ sở ở cả Việt Nam và Campuchia, có khả năng hỗ trợ giao nhận hàng hóa cho khách hàng một cách thuận lợi nhất.",
                "Vận Tải T&N cung cấp cho bạn giá trị nhiều hơn cả một dịch vụ vận chuyển đơn thuần. Chúng tôi đề xuất và thực hiện các giải pháp một cách linh hoạt, trên cơ sở đảm bảo tuân thủ hoàn toàn những quy định của nhà nước mà vẫn đạt được tiêu chuẩn cao nhất về dịch vụ Khách Hàng."
            ]
        }
    },
    "contact": {
        "company_name": "CÔNG TY TNHH TMDV VẬN TẢI T&N",
        "website": "vantaitnn.com",
        "email": "info@tnn.com.vn",
        "tax_id": "0318030782",
        "offices": [
            {
                "location": "Văn Phòng Hồ Chí Minh",
                "address": "275 Hà Huy Giáp, Phường Thạnh Lộc, Quận 12, Thành Phố Hồ Chí Minh, Việt Nam",
                "phone_numbers": ["(+84) 903.060.517", "(+855) 92.889.198"]
            }
        ]
    }
}

const getContactData = (req, res) => {
    try {
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi lấy dữ liệu." });
    }
};

module.exports = { getContactData };