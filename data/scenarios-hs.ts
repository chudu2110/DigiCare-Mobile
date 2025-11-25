import { Scenario } from '../types';

export const SCENARIOS_HS: Scenario[] = [
{
    title: 'Thảo luận về các biện pháp tránh thai',
    situation: 'Bạn và người yêu (đã quyết định tiến xa trong mối quan hệ) đang bàn bạc về biện pháp tránh thai nào là tốt nhất để đảm bảo an toàn.',
    options: [
      { text: 'Chỉ cần xuất tinh ngoài hoặc tính ngày rụng trứng là đủ an toàn', feedback: 'Không đúng. Đây là những biện pháp có hiệu quả ngừa thai thấp, không được khuyến nghị. Nguy cơ mang thai ngoài ý muốn là rất cao.' },
      { text: 'Sử dụng bao cao su kết hợp với tìm hiểu về các biện pháp ngừa thai khác (như thuốc tránh thai) và tham khảo ý kiến bác sĩ/dược sĩ', feedback: 'Chính xác và an toàn nhất. Bao cao su giúp phòng tránh thai và các bệnh lây truyền qua đường tình dục (STIs). Cần tìm hiểu kỹ và tư vấn chuyên môn cho các biện pháp nội tiết tố.' },
      { text: 'Sử dụng thuốc tránh thai khẩn cấp sau mỗi lần quan hệ', feedback: 'Không nên. Thuốc tránh thai khẩn cấp chỉ dùng trong trường hợp bất khả kháng, không phải biện pháp tránh thai thường xuyên. Việc lạm dụng gây rối loạn nội tiết tố và có hại cho sức khỏe.' }
    ]
  },
  {
    title: 'Nghi ngờ mắc Bệnh Lây truyền qua Đường tình dục (STI)',
    situation: 'Bạn có những dấu hiệu bất thường ở cơ quan sinh dục (như tiết dịch lạ, ngứa, đau rát) và nghi ngờ mình có thể mắc STI.',
    options: [
      { text: 'Tự mua thuốc về điều trị tại nhà theo lời khuyên trên mạng', feedback: 'Không nên. Việc tự điều trị có thể khiến bệnh không khỏi hẳn, gây biến chứng nghiêm trọng và lây lan. Cần có chẩn đoán chính xác từ bác sĩ.' },
      { text: 'Giữ bí mật và hy vọng các triệu chứng sẽ tự biến mất', feedback: 'Sai lầm. Các bệnh STI hiếm khi tự khỏi. Cần phải đi khám bác sĩ chuyên khoa (Da liễu hoặc Sản/Nam khoa) để được điều trị kịp thời và đúng cách.' },
      { text: 'Đến cơ sở y tế (Bệnh viện, Phòng khám uy tín) để khám, xét nghiệm và điều trị theo chỉ định của bác sĩ, đồng thời thông báo cho người yêu/bạn tình', feedback: 'Rất cần thiết. Việc điều trị kịp thời và thông báo cho bạn tình là trách nhiệm để ngăn chặn lây lan bệnh.' }
    ]
  },
  {
    title: 'Xử lý khi phát hiện mang thai ngoài ý muốn',
    situation: 'Bạn và người yêu phát hiện bạn nữ mang thai ngoài ý muốn. Cả hai đều là học sinh THPT.',
    options: [
      { text: 'Giấu cha mẹ, tự mình tìm cách giải quyết (ví dụ: phá thai chui)', feedback: 'Cực kỳ nguy hiểm. Tự ý giải quyết không chỉ gây tổn hại lớn đến tính mạng, sức khỏe mà còn ảnh hưởng đến tâm lý. Việc phá thai phải được thực hiện tại cơ sở y tế hợp pháp.' },
      { text: 'Chia sẻ ngay lập tức với cha mẹ hoặc người lớn đáng tin cậy nhất để tìm kiếm sự hỗ trợ, tư vấn về các lựa chọn (giữ thai hoặc chấm dứt thai kỳ hợp pháp)', feedback: 'Cách làm đúng đắn và an toàn nhất. Cần sự hỗ trợ của người lớn và chuyên gia y tế để đưa ra quyết định có trách nhiệm và an toàn nhất.' },
      { text: 'Đổ lỗi cho nhau và không ai chịu trách nhiệm', feedback: 'Không giải quyết được vấn đề. Cả hai cần phải cùng nhau đối mặt và tìm kiếm giải pháp có trách nhiệm.' }
    ]
  },
  {
    title: 'Áp lực "sống thử" (Cohabitation)',
    situation: 'Người yêu rủ bạn thuê phòng trọ sống chung để "tiết kiệm" và "ở gần nhau hơn" trong khi cả hai vẫn là học sinh THPT.',
    options: [
      { text: 'Đồng ý vì cảm thấy việc đó lãng mạn và thể hiện sự cam kết', feedback: 'Không nên. Sống thử ở lứa tuổi này có thể gây ra nhiều áp lực về tài chính, học tập và dễ dẫn đến mang thai ngoài ý muốn hoặc mất tập trung vào mục tiêu tương lai.' },
      { text: 'Từ chối, giải thích rằng ưu tiên hàng đầu lúc này là học tập và xây dựng tương lai, và có thể gặp nhau ở những nơi công cộng', feedback: 'Rất chín chắn và có trách nhiệm. Ưu tiên cho việc học và duy trì mối quan hệ lành mạnh, không phụ thuộc.' },
      { text: 'Hứa sẽ sống thử khi cả hai tốt nghiệp đại học và có công việc ổn định', feedback: 'Đây là một cách từ chối lịch sự, nhưng cần ưu tiên việc tập trung vào học tập và phát triển cá nhân ở hiện tại.' }
    ]
  },
  {
    title: 'Cần thiết phải tiêm vắc-xin HPV',
    situation: 'Bạn nghe nói về vắc-xin HPV (phòng ngừa ung thư cổ tử cung, ung thư hậu môn và mụn cóc sinh dục) và băn khoăn liệu mình có cần tiêm không.',
    options: [
      { text: 'Không cần tiêm vì mình chưa quan hệ tình dục', feedback: 'Sai. Vắc-xin HPV hiệu quả nhất khi được tiêm trước khi có tiếp xúc với vi-rút (tức là trước khi quan hệ tình dục). Tuổi tiêm tốt nhất là từ 9-26 tuổi.' },
      { text: 'Cần tiêm càng sớm càng tốt, ngay cả khi chưa quan hệ tình dục, để bảo vệ sức khỏe lâu dài của bản thân', feedback: 'Chính xác. HPV có thể lây truyền qua tiếp xúc da kề da ở khu vực sinh dục. Tiêm vắc-xin là cách phòng ngừa chủ động hiệu quả nhất cho cả nam và nữ.' },
      { text: 'Chỉ có nữ giới cần tiêm vắc-xin này', feedback: 'Sai. Nam giới cũng nên tiêm để phòng ngừa ung thư hậu môn, dương vật, miệng/họng và mụn cóc sinh dục, đồng thời giúp giảm lây truyền HPV trong cộng đồng.' }
    ]
  },
  {
    title: 'Xử lý khi bị bạn bè/người yêu yêu cầu quay video 18+',
    situation: 'Bạn bị một người quen/người yêu ở độ tuổi này liên tục ép buộc phải quay video nhạy cảm. Họ đe dọa sẽ tung tin đồn xấu nếu bạn từ chối.',
    options: [
      { text: 'Đồng ý quay vì sợ bị tung tin đồn và nghĩ họ sẽ giữ lời hứa xóa video sau này', feedback: 'Hoàn toàn sai và nguy hiểm. Không có gì đảm bảo video sẽ không bị phát tán. Đây là hành vi tống tiền và lạm dụng.' },
      { text: 'Ngay lập tức từ chối dứt khoát, cắt đứt liên lạc, lưu lại bằng chứng (tin nhắn) và tìm kiếm sự hỗ trợ khẩn cấp từ cha mẹ, giáo viên hoặc đường dây nóng bảo vệ trẻ em/phụ nữ', feedback: 'Cách làm an toàn, đúng đắn và cần thiết nhất. Phải tìm sự can thiệp của người lớn và cơ quan chức năng.' },
      { text: 'Tìm cách quay lại video hoặc chụp ảnh họ để đe dọa ngược lại', feedback: 'Không nên. Việc này chỉ làm tăng rủi ro và vi phạm pháp luật.' }
    ]
  },
  {
    title: 'Giải quyết áp lực khi phải lựa chọn giữa tình yêu và sự nghiệp/học tập',
    situation: 'Bạn đang đứng trước kỳ thi quan trọng hoặc cơ hội học bổng lớn, nhưng người yêu liên tục đòi hỏi thời gian, gây áp lực khiến bạn không thể tập trung.',
    options: [
      { text: 'Bỏ qua việc học tập và dành toàn bộ thời gian cho người yêu để mối quan hệ không bị rạn nứt', feedback: 'Không nên. Việc bỏ bê mục tiêu cá nhân vì người khác là thiếu trách nhiệm với tương lai của bản thân.' },
      { text: 'Nói chuyện thẳng thắn với người yêu, đặt ranh giới rõ ràng, ưu tiên cho việc học tập/sự nghiệp, đồng thời cam kết tôn trọng và hỗ trợ lẫn nhau', feedback: 'Hành động đúng đắn và trưởng thành. Mối quan hệ lành mạnh phải là nơi cả hai cùng hỗ trợ nhau tiến lên.' },
      { text: 'Chia tay ngay lập tức để không bị làm phiền', feedback: 'Đây là giải pháp cực đoan. Cần giao tiếp trước khi đưa ra quyết định lớn.' }
    ]
  },
  {
    title: 'Sử dụng bao cao su đã hết hạn',
    situation: 'Bạn và người yêu có nhu cầu sử dụng bao cao su nhưng chỉ còn lại một chiếc đã hết hạn sử dụng (Expired Date) từ vài tháng trước.',
    options: [
      { text: 'Vẫn sử dụng vì nghĩ rằng nó chỉ hết hạn một chút và không sao cả', feedback: 'Cực kỳ rủi ro. Bao cao su hết hạn có thể bị giảm chất lượng, rách hoặc thủng, làm mất tác dụng ngừa thai và phòng tránh STI.' },
      { text: 'Hủy bỏ việc quan hệ hoặc chuyển sang các hành vi thân mật không có rủi ro mang thai/STI cho đến khi mua được bao cao su mới còn hạn sử dụng', feedback: 'Chính xác. Luôn đảm bảo sử dụng các biện pháp bảo vệ còn hạn và đúng chất lượng. An toàn là trên hết.' },
      { text: 'Cố gắng đi mua ngay lập scope (phòng khám/siêu thị) nhưng không kiểm tra lại hạn sử dụng', feedback: 'Không nên. Dù mua mới vẫn phải kiểm tra hạn sử dụng và chất lượng cẩn thận.' }
    ]
  },
  {
    title: 'Nhận thức về Quyền được từ chối (Right to Say No)',
    situation: 'Bạn đang trong mối quan hệ, và người yêu cảm thấy khó chịu khi bạn từ chối một số hành vi thân mật. Họ nói "yêu nhau thì phải làm theo ý nhau".',
    options: [
      { text: 'Cố gắng chịu đựng và làm theo ý người yêu để giữ hòa khí', feedback: 'Sai. Bạn có quyền từ chối bất cứ hành vi nào khiến bạn không thoải mái. Sự tôn trọng ranh giới cá nhân là nền tảng của tình yêu.' },
      { text: 'Nhấn mạnh rằng **Quyền được từ chối** là quyền cơ bản, và tình yêu phải dựa trên sự **đồng thuận tuyệt đối** và **tôn trọng ranh giới** của nhau', feedback: 'Hoàn toàn chính xác. Mối quan hệ lành mạnh đòi hỏi sự tôn trọng quyền tự quyết cơ thể và sự từ chối phải được chấp nhận.' },
      { text: 'Nói rằng mình sẽ đồng ý sau khi kết hôn', feedback: 'Không đủ. Bạn có quyền từ chối bất cứ lúc nào, không phụ thuộc vào tình trạng hôn nhân.' }
    ]
  },
  {
    title: 'Tìm hiểu về các dịch vụ hỗ trợ (Hotline)',
    situation: 'Bạn biết một người bạn đang gặp vấn đề nghiêm trọng về tâm lý hoặc bị lạm dụng nhưng bạn không biết phải tìm đến sự hỗ trợ chuyên môn nào.',
    options: [
      { text: 'Đăng bài lên mạng xã hội để xin lời khuyên từ cộng đồng mạng', feedback: 'Không nên. Thông tin trên mạng không đáng tin cậy và có thể làm lộ thông tin cá nhân của bạn bè.' },
      { text: 'Tra cứu thông tin về các Đường dây nóng (Hotline) tư vấn tâm lý, Tổng đài bảo vệ trẻ em (ví dụ: 111) hoặc các dịch vụ tư vấn sức khỏe sinh sản uy tín để giới thiệu cho bạn bè', feedback: 'Rất cần thiết. Luôn tìm kiếm sự hỗ trợ chuyên môn từ các tổ chức và số điện thoại uy tín, bảo mật.' },
      { text: 'Tự mình làm nhà tư vấn tâm lý cho bạn bè', feedback: 'Bạn có thể lắng nghe, nhưng không có chuyên môn để giải quyết các vấn đề tâm lý nghiêm trọng. Cần có sự can thiệp của chuyên gia.' }
    ]
}
,
  {
    title: 'Quản lý ghen tuông và kiểm soát trong tình yêu',
    situation: 'Người yêu của bạn thường xuyên kiểm soát bạn, đòi hỏi mật khẩu mạng xã hội và ghen tuông vô cớ khi bạn nói chuyện với người khác giới.',
    options: [
      { text: 'Chấp nhận vì họ nói đó là biểu hiện của tình yêu sâu đậm', feedback: 'Không đúng. Ghen tuông và kiểm soát quá mức là dấu hiệu của mối quan hệ độc hại, vi phạm quyền riêng tư và sự tin tưởng. Tình yêu cần sự tôn trọng.' },
      { text: 'Nói chuyện thẳng thắn để đặt ra ranh giới cá nhân, nếu tình trạng không thay đổi, nên xem xét chấm dứt mối quan hệ', feedback: 'Chính xác. Cần đặt ra ranh giới, giữ quyền riêng tư, và nếu đối phương không thay đổi, việc chấm dứt mối quan hệ độc hại là cần thiết để bảo vệ sức khỏe tinh thần.' },
      { text: 'Đồng ý cung cấp mật khẩu để làm họ yên tâm, tránh cãi vã', feedback: 'Không nên. Việc này trao quyền kiểm soát cuộc sống cá nhân của bạn cho người khác, dẫn đến căng thẳng và mất đi sự tự do.' }
    ]
  },
  {
    title: 'Phân biệt Tình dục an toàn và không an toàn',
    situation: 'Bạn được một người bạn giải thích rằng quan hệ tình dục bằng miệng (Oral Sex) thì an toàn tuyệt đối và không cần dùng bao cao su.',
    options: [
      { text: 'Tin rằng quan hệ bằng miệng là an toàn tuyệt đối, không có rủi ro STI', feedback: 'Sai. Quan hệ bằng miệng vẫn tiềm ẩn nguy cơ lây truyền nhiều STI như Herpes, Giang mai, Lậu, và HPV.' },
      { text: 'Nhận ra rằng tất cả các hành vi tình dục đều có rủi ro STI và cần sử dụng các biện pháp bảo vệ phù hợp (ví dụ: dental dam hoặc bao cao su) cho hành vi tình dục bằng miệng', feedback: 'Chính xác. An toàn tình dục đòi hỏi nhận thức về rủi ro ở mọi hình thức và áp dụng các biện pháp bảo vệ phù hợp.' },
      { text: 'Chỉ cần quan hệ bằng miệng thì không cần lo lắng về việc mang thai', feedback: 'Đúng, nhưng vẫn có rủi ro STI. Vấn đề chính là bảo vệ khỏi các bệnh lây truyền.' }
    ]
  },
  {
    title: 'Xử lý khi bị Doxing (Bị lộ thông tin cá nhân)',
    situation: 'Do mâu thuẫn trên mạng xã hội, một người đã tìm ra và công khai tất cả thông tin cá nhân (địa chỉ, số điện thoại, ảnh) của bạn.',
    options: [
      { text: 'Tìm cách xóa hết các tài khoản mạng xã hội để trốn tránh', feedback: 'Không nên. Việc này không giải quyết được vấn đề thông tin đã bị công khai và làm mất đi bằng chứng.' },
      { text: 'Ngay lập tức chụp lại bằng chứng (Screenshot), báo cáo sự việc với nền tảng mạng xã hội, thay đổi các mật khẩu quan trọng và thông báo cho người thân/công an (nếu cần)', feedback: 'Cách xử lý đúng và cần thiết nhất. Phải hành động nhanh chóng để bảo vệ an toàn và nhờ cơ quan chức năng can thiệp.' },
      { text: 'Nhắn tin xin lỗi người đó để họ ngừng hành vi công khai thông tin', feedback: 'Không đúng. Việc này sẽ khuyến khích hành vi tống tiền và làm lộ thông tin thêm.' }
    ]
  },
  {
    title: 'Dấu hiệu của Rối loạn tâm lý nghiêm trọng',
    situation: 'Bạn thấy mình thường xuyên mất ngủ, không còn hứng thú với mọi thứ, buồn bã kéo dài và có ý nghĩ muốn tự tử. Bạn nên làm gì?',
    options: [
      { text: 'Đợi thêm một thời gian nữa xem tình hình có cải thiện không', feedback: 'Không đúng. Đây là dấu hiệu của rối loạn tâm lý nghiêm trọng (ví dụ: Trầm cảm) và cần sự hỗ trợ ngay lập tức.' },
      { text: 'Chia sẻ với cha mẹ/giáo viên và tìm đến chuyên gia tâm lý, bác sĩ tâm thần hoặc Đường dây nóng khủng hoảng ngay lập tức', feedback: 'Hành động cần thiết nhất. Sức khỏe tinh thần là quan trọng, cần tìm kiếm sự hỗ trợ chuyên môn khẩn cấp.' },
      { text: 'Cố gắng tự ép mình vui vẻ và tham gia các hoạt động để quên đi', feedback: 'Chỉ là giải pháp tạm thời. Nếu triệu chứng nghiêm trọng, cần sự can thiệp của chuyên gia.' }
    ]
  },
  {
    title: 'Sự cần thiết của Sự đồng thuận liên tục',
    situation: 'Bạn và người yêu đã từng đồng thuận cho hành vi thân mật, nhưng bây giờ bạn thay đổi ý định giữa chừng. Người yêu bạn nói "Không được, em đã đồng ý rồi mà".',
    options: [
      { text: 'Tiếp tục vì bạn cảm thấy có lỗi khi rút lại lời đồng ý', feedback: 'Sai. Sự đồng thuận phải được tiếp diễn (Continuous Consent) và có thể rút lại bất cứ lúc nào. Không ai có quyền ép buộc bạn.' },
      { text: 'Dừng lại ngay lập tức và giải thích rằng **Sự đồng thuận có thể rút lại bất cứ lúc nào**, và việc tiếp tục khi đối phương rút lại đồng thuận là vi phạm', feedback: 'Chính xác. Quyền rút lại đồng thuận (Revoking Consent) là quyền cơ bản và phải được tôn trọng tuyệt đối. Không được tiếp tục khi đối phương nói "Không".' },
      { text: 'Chỉ cần im lặng thì người đó sẽ tự hiểu ý và dừng lại', feedback: 'Không nên. Cần nói rõ ràng "Dừng lại" hoặc "Không" để đảm bảo thông điệp được truyền đạt rõ ràng.' }
    ]
  },
  {
    title: 'Tìm hiểu về sức khỏe sinh sản nam giới',
    situation: 'Bạn nam 17 tuổi băn khoăn về việc khám sức khỏe sinh sản, nhưng ngại không dám đi khám vì nghĩ chỉ phụ nữ mới cần.',
    options: [
      { text: 'Không cần khám trừ khi có triệu chứng đau hoặc khó chịu rõ rệt', feedback: 'Chưa đủ. Việc khám định kỳ giúp phát hiện sớm các vấn đề tiềm ẩn.' },
      { text: 'Nhận ra rằng nam giới cũng cần khám sức khỏe tổng quát và sinh sản định kỳ để phát hiện sớm các vấn đề như viêm nhiễm, ung thư tinh hoàn, hoặc các bất thường về hệ thống sinh sản', feedback: 'Đúng. Nam giới cần chăm sóc sức khỏe sinh sản chủ động. Việc này giúp phát hiện sớm và điều trị kịp thời.' },
      { text: 'Chỉ cần tìm hiểu trên mạng về cách tự khám tinh hoàn', feedback: 'Nên làm, nhưng không thể thay thế việc khám chuyên môn. Cần có ý kiến của bác sĩ.' }
    ]
  },
  {
    title: 'Xử lý khi thấy bạn bè/người yêu bị lạm dụng thể chất',
    situation: 'Bạn phát hiện người yêu/bạn thân bị người nhà hoặc người khác bạo hành/lạm dụng thể chất, có những vết thương rõ ràng.',
    options: [
      { text: 'Tránh xa để không liên quan đến rắc rối gia đình của họ', feedback: 'Sai. Đây là tình huống cần sự can thiệp để bảo vệ người bị hại.' },
      { text: 'Tìm cách can thiệp trực tiếp hoặc đối đầu với người gây ra bạo hành', feedback: 'Có thể nguy hiểm cho bạn và người bị hại. Cần sự can thiệp của cơ quan chức năng.' },
      { text: 'Liên hệ ngay với Đường dây nóng bảo vệ trẻ em (111) hoặc công an, và tìm sự hỗ trợ của giáo viên/người lớn có thẩm quyền', feedback: 'Cách làm đúng đắn và hiệu quả nhất. Phải báo cáo sự việc cho cơ quan chức năng để đảm bảo an toàn tuyệt đối.' }
    ]
  },
  {
    title: 'Sự khác biệt giữa Tình dục an toàn và Tình dục có trách nhiệm',
    situation: 'Bạn thắc mắc về khái niệm "Tình dục có trách nhiệm" và nó khác gì so với "Tình dục an toàn".',
    options: [
      { text: 'Cả hai đều chỉ nói về việc sử dụng bao cao su', feedback: 'Không phải. "Tình dục có trách nhiệm" bao hàm nhiều hơn thế.' },
      { text: 'Tình dục an toàn là sử dụng biện pháp tránh thai/phòng STI; còn Tình dục có trách nhiệm là việc sử dụng biện pháp đó **kết hợp** với sự đồng thuận, tôn trọng, giao tiếp cởi mở và sẵn sàng chịu trách nhiệm về hậu quả', feedback: 'Chính xác. Trách nhiệm bao hàm cả mặt tâm lý, đạo đức, và sự đồng hành trong việc đối diện với mọi hệ quả.' },
      { text: 'Tình dục có trách nhiệm chỉ áp dụng cho người đã kết hôn', feedback: 'Sai. Trách nhiệm phải được áp dụng trong mọi mối quan hệ tình cảm, bất kể tuổi tác hay tình trạng hôn nhân.' }
    ]
  },
  {
    title: 'Phòng ngừa lạm dụng rượu bia/chất kích thích',
    situation: 'Trong một buổi tiệc, bạn được mời uống rượu/chất kích thích và bạn bè nói "Dùng chút xíu thôi, không sao đâu, sẽ vui hơn".',
    options: [
      { text: 'Sử dụng một chút để không bị bạn bè cô lập', feedback: 'Không nên. Việc thử chất kích thích (kể cả rượu bia) ở tuổi vị thành niên có hại cho sự phát triển của não bộ và dễ dẫn đến mất kiểm soát hành vi, tăng rủi ro về sức khỏe và an toàn.' },
      { text: 'Từ chối dứt khoát và giải thích rằng bạn tôn trọng quyết định của họ nhưng không muốn mạo hiểm sức khỏe và sự an toàn của bản thân', feedback: 'Chính xác. Luôn ưu tiên sức khỏe cá nhân, giữ lập trường mạnh mẽ trước áp lực bạn bè và không chấp nhận rủi ro.' },
      { text: 'Chỉ uống nếu người lớn cho phép', feedback: 'Mặc dù có yếu tố giám sát, việc từ chối rượu bia/chất kích thích ở tuổi vị thành niên là lựa chọn an toàn nhất.' }
    ]
  },
  {
    title: 'Xử lý hình ảnh nhạy cảm bị rò rỉ (Revenge Porn)',
    situation: 'Người yêu cũ của bạn (ở độ tuổi này) đã công khai những hình ảnh/video nhạy cảm của bạn trên mạng xã hội sau khi chia tay.',
    options: [
      { text: 'Hoảng sợ và xóa hết các tài khoản mạng xã hội của mình', feedback: 'Không nên. Hành vi này được gọi là "Bán/Tán phát ảnh nóng trả thù" và là hành vi phạm pháp. Việc xóa tài khoản sẽ khiến bạn mất bằng chứng.' },
      { text: 'Ngay lập tức lưu lại bằng chứng, báo cáo nội dung vi phạm với nền tảng, và tìm kiếm sự hỗ trợ pháp lý hoặc công an để xử lý hành vi vi phạm pháp luật này', feedback: 'Hành động đúng và cần thiết nhất. Việc này đòi hỏi sự can thiệp của luật pháp để gỡ bỏ nội dung và trừng phạt người vi phạm.' },
      { text: 'Liên hệ với người yêu cũ và van xin họ gỡ bỏ', feedback: 'Việc này không hiệu quả và có thể khiến bạn bị đe dọa thêm. Cần sự can thiệp của bên thứ ba có thẩm quyền.' }
    ]
  }
];
