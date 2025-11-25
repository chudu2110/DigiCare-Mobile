import { Scenario } from '../types';

export const SCENARIOS_MS: Scenario[] = [
  {
    title: 'Bị rủ xem nội dung 18+',
    situation: 'Trong giờ nghỉ, một bạn rủ bạn cùng xem video 18+ trên điện thoại.',
    options: [
      { text: 'Xem cho biết vì ai cũng xem', feedback: 'Không phù hợp và có thể ảnh hưởng xấu. Hãy từ chối và giữ lập trường.' },
      { text: 'Từ chối, nhắc bạn ấy đây không phù hợp ở trường', feedback: 'Đúng và an toàn. Từ chối lịch sự và nhắc về nội quy trường lớp.' },
      { text: 'Báo với giáo viên nếu tình trạng lặp lại', feedback: 'Hợp lý. Tìm người lớn đáng tin cậy hỗ trợ khi cần.' }
    ]
  },
  {
    title: 'Tin nhắn rủ đi gặp mặt riêng',
    situation: 'Bạn nhận được tin nhắn từ một người mới quen trên mạng rủ bạn đi gặp riêng ở một nơi vắng người. Họ nói sẽ giữ bí mật và hứa mang quà cho bạn.',
    options: [
      { text: 'Đồng ý đi gặp ngay vì họ hứa mang quà', feedback: 'Không an toàn. Gặp người lạ ở nơi vắng có thể nguy hiểm. Quà cáp không đảm bảo an toàn.' },
      { text: 'Từ chối và đề nghị gặp ở nơi công cộng, rủ thêm bạn bè', feedback: 'An toàn hơn. Chỉ gặp ở nơi công cộng, có người đi cùng và thông báo cho người thân.' },
      { text: 'Chia sẻ với cha mẹ/giáo viên và không gặp người lạ', feedback: 'Rất an toàn. Trao đổi với người lớn đáng tin cậy và tránh gặp riêng người lạ.' }
    ]
  },
  // --- 8 câu đã điều chỉnh và bổ sung ---
  {
    title: 'Xử lý khi đến kỳ kinh nguyệt lần đầu',
    situation: 'Bạn nữ đột nhiên thấy máu ở quần lót trong giờ học, đó là lần đầu tiên bạn có kinh nguyệt.',
    options: [
      { text: 'Giấu đi, chịu đựng đến hết giờ học', feedback: 'Không nên. Cần xử lý ngay để giữ vệ sinh và tránh bối rối. Việc giấu đi có thể gây khó chịu và ảnh hưởng sức khỏe.' },
      { text: 'Nhờ cô giáo hoặc một bạn nữ thân thiết giúp đỡ, xin băng vệ sinh và vào nhà vệ sinh xử lý', feedback: 'Chính xác và rất cần thiết. Luôn tìm kiếm sự giúp đỡ từ người lớn hoặc bạn bè đáng tin cậy khi có sự cố sức khỏe.' },
      { text: 'Chạy về nhà ngay lập tức', feedback: 'Không cần thiết. Việc này có thể gây hoảng loạn. Tốt nhất là nhờ người lớn trong trường hỗ trợ xử lý tại chỗ.' }
    ]
  },
  {
    title: 'Phát hiện tinh dịch dính trên quần lót',
    situation: 'Bạn nam phát hiện có dịch màu trắng đục dính trên quần lót khi thức dậy, bạn nghĩ mình đã "mộng tinh".',
    options: [
      { text: 'Cảm thấy lo sợ và không dám kể với ai', feedback: 'Không nên. Mộng tinh là hiện tượng sinh lý hoàn toàn bình thường khi nam giới bước vào tuổi dậy thì, thể hiện cơ thể đang phát triển.' },
      { text: 'Tìm hiểu trên mạng xã hội cách để ngăn chặn điều này xảy ra', feedback: 'Thông tin trên mạng có thể không chính xác. Tốt nhất nên tìm hiểu từ nguồn đáng tin cậy như sách giáo khoa, bác sĩ, hoặc cha mẹ.' },
      { text: 'Thay quần lót, vệ sinh cơ thể sạch sẽ và coi đó là một dấu hiệu bình thường của tuổi dậy thì, nếu có thắc mắc thì hỏi cha mẹ hoặc bác sĩ', feedback: 'Cách xử lý đúng và khoa học nhất. Giữ vệ sinh, chấp nhận sự thay đổi và tìm kiếm lời khuyên từ người đáng tin cậy.' }
    ]
  },
  {
    title: 'Bạn thân bị bạn trai/người yêu ép quan hệ',
    situation: 'Bạn thân của bạn tâm sự rằng đang bị người yêu ép buộc quan hệ hoặc gửi ảnh nhạy cảm, nếu không đồng ý thì sẽ chia tay.',
    options: [
      { text: 'Khuyên bạn cứ chiều theo ý người yêu để không bị chia tay', feedback: 'Hoàn toàn sai. Quyết định về cơ thể phải dựa trên sự đồng thuận và tự nguyện. Đây là dấu hiệu của mối quan hệ không lành mạnh.' },
      { text: 'Giúp bạn đó tìm kiếm sự hỗ trợ từ cha mẹ, giáo viên hoặc tư vấn viên học đường để bảo vệ bản thân', feedback: 'Rất cần thiết. Cần sự can thiệp của người lớn có chuyên môn để đảm bảo an toàn cho bạn thân và giúp bạn đó hiểu rõ về quyền tự quyết cơ thể.' },
      { text: 'Nói chuyện thẳng thắn với người yêu kia, đe dọa anh ta', feedback: 'Có thể nguy hiểm và không giải quyết triệt để vấn đề. Cần sự can thiệp của người lớn.' }
    ]
  },
  {
    title: 'Xử lý khi bị quấy rối tình dục ở nơi công cộng',
    situation: 'Khi đi xe buýt/ở nơi đông người, bạn cảm thấy có người chạm vào cơ thể mình một cách không phù hợp.',
    options: [
      { text: 'Cố gắng chịu đựng và hy vọng sự việc sẽ kết thúc nhanh chóng', feedback: 'Không nên. Việc im lặng có thể khiến người quấy rối tiếp tục hành vi.' },
      { text: 'Hét lớn "Bỏ tay ra!" hoặc "Xin giúp đỡ!", di chuyển ra xa và báo cho người lớn (tài xế/người phụ trách) biết', feedback: 'Cách xử lý đúng và hiệu quả nhất. Phản ứng mạnh mẽ để gây sự chú ý, tạo khoảng cách và tìm kiếm sự hỗ trợ ngay lập tức.' },
      { text: 'Âm thầm tránh đi mà không nói gì', feedback: 'Tránh đi là cần thiết, nhưng cần lên tiếng hoặc tìm kiếm sự hỗ trợ để ngăn chặn hành vi quấy rối.' }
    ]
  },
  {
    title: 'Xử lý khi bị ép buộc chụp ảnh/video riêng tư',
    situation: 'Bạn quen một người trên mạng và người đó yêu cầu bạn gửi ảnh hoặc video riêng tư (nhạy cảm) để "chứng minh tình cảm".',
    options: [
      { text: 'Làm theo yêu cầu để giữ mối quan hệ', feedback: 'Không an toàn. Việc gửi ảnh/video nhạy cảm có thể bị lợi dụng, đe dọa hoặc lan truyền trên mạng, gây tổn hại lớn về tinh thần.' },
      { text: 'Từ chối dứt khoát, cắt đứt liên lạc với người đó và báo cho cha mẹ/người lớn đáng tin cậy biết', feedback: 'Cách xử lý an toàn và đúng đắn nhất. Bảo vệ sự riêng tư là ưu tiên hàng đầu. Luôn chia sẻ với người lớn khi bị đe dọa trực tuyến.' },
      { text: 'Gửi một bức ảnh/video không nhạy cảm để tạm thời làm hài lòng họ', feedback: 'Không nên. Việc nhượng bộ sẽ khiến kẻ xấu tiếp tục đòi hỏi. Hãy từ chối hoàn toàn.' }
    ]
  },
  {
    title: 'Tìm kiếm thông tin sức khỏe sinh sản',
    situation: 'Bạn có những thắc mắc về sức khỏe sinh sản nhưng ngại hỏi cha mẹ và giáo viên.',
    options: [
      { text: 'Tìm kiếm thông tin trên các diễn đàn, nhóm kín trên mạng xã hội', feedback: 'Không nên. Thông tin trên các nhóm kín, diễn đàn thường không được kiểm chứng, có thể sai lệch và gây hiểu lầm.' },
      { text: 'Giữ im lặng, không tìm kiếm thông tin nào cả', feedback: 'Không nên. Việc thiếu hiểu biết về cơ thể có thể dẫn đến lo lắng không cần thiết hoặc xử lý sai khi có vấn đề.' },
      { text: 'Tìm đọc sách giáo khoa, các trang web chính thức của tổ chức y tế, hoặc tìm đến các chuyên gia tư vấn/bác sĩ để hỏi', feedback: 'Chính xác. Luôn tìm kiếm thông tin từ các nguồn uy tín, chính thống và có cơ sở khoa học.' }
    ]
  },

  {
    title: 'Vệ sinh cơ thể tuổi dậy thì',
    situation: 'Bạn nhận thấy cơ thể mình có mùi lạ hơn so với trước đây khi bước vào tuổi dậy thì.',
    options: [
      { text: 'Dùng nước hoa hoặc chất khử mùi thật mạnh để che đi mùi cơ thể', feedback: 'Không nên. Việc này chỉ là giải pháp tạm thời, không giải quyết được nguyên nhân gây mùi.' },
      { text: 'Tắm rửa thường xuyên hơn, vệ sinh vùng kín đúng cách, thay quần áo và quần lót hàng ngày', feedback: 'Chính xác. Tăng cường vệ sinh cá nhân là điều cần thiết nhất trong tuổi dậy thì do tuyến mồ hôi và tuyến dầu hoạt động mạnh hơn.' },
      { text: 'Chỉ cần thay quần áo, không cần tắm rửa thường xuyên', feedback: 'Không đúng. Việc vệ sinh toàn bộ cơ thể là bắt buộc để giữ sức khỏe và sự tự tin.' }
    ]
  },
  {
    title: 'Áp lực giảm cân vì bị trêu chọc',
    situation: 'Bạn bị một vài bạn khác trêu chọc về cân nặng và bắt đầu cảm thấy tự ti, muốn nhịn ăn để giảm cân thật nhanh.',
    options: [
      { text: 'Bỏ bữa ăn sáng và tối để giảm cân nhanh nhất có thể', feedback: 'Không nên. Nhịn ăn gây hại nghiêm trọng cho sức khỏe và sự phát triển của cơ thể ở tuổi dậy thì. Nó có thể dẫn đến rối loạn ăn uống.' },
      { text: 'Tâm sự với cha mẹ/người lớn để tìm kiếm sự hỗ trợ, đồng thời tập trung vào ăn uống lành mạnh và tập thể dục vừa phải', feedback: 'Chính xác. Hãy tìm kiếm sự hỗ trợ, tập trung vào sức khỏe toàn diện thay vì chỉ số cân nặng, và đối phó với hành vi trêu chọc.' },
      { text: 'Chửi lại hoặc đánh bạn đã trêu chọc mình', feedback: 'Không giải quyết được vấn đề và có thể gây rắc rối. Việc phản ứng bạo lực không phải là giải pháp.' }
    ]
  },
  {
    title: 'Áp lực giảm cân vì bị trêu chọc',
    situation: 'Bạn bị một vài bạn khác trêu chọc về cân nặng và bắt đầu cảm thấy tự ti, muốn nhịn ăn để giảm cân thật nhanh.',
    options: [
      { text: 'Bỏ bữa ăn sáng và tối để giảm cân nhanh nhất có thể', feedback: 'Không nên. Nhịn ăn gây hại nghiêm trọng cho sức khỏe và sự phát triển của cơ thể ở tuổi dậy thì. Nó có thể dẫn đến rối loạn ăn uống.' },
      { text: 'Tâm sự với cha mẹ/người lớn để tìm kiếm sự hỗ trợ, đồng thời tập trung vào ăn uống lành mạnh và tập thể dục vừa phải', feedback: 'Chính xác. Hãy tìm kiếm sự hỗ trợ, tập trung vào sức khỏe toàn diện thay vì chỉ số cân nặng, và đối phó với hành vi trêu chọc.' },
      { text: 'Chửi lại hoặc đánh bạn đã trêu chọc mình', feedback: 'Không giải quyết được vấn đề và có thể gây rắc rối. Việc phản ứng bạo lực không phải là giải pháp.' }
    ]
  },
  {
    title: 'Xử lý mụn trứng cá nghiêm trọng',
    situation: 'Mặt bạn bắt đầu nổi rất nhiều mụn trứng cá, khiến bạn cảm thấy xấu hổ và không muốn đi học.',
    options: [
      { text: 'Tự ý mua và dùng các loại thuốc bôi trị mụn quảng cáo trên mạng xã hội', feedback: 'Nguy hiểm. Các sản phẩm không rõ nguồn gốc hoặc không phù hợp với da có thể làm tình trạng mụn nặng hơn. Cần tham khảo ý kiến chuyên gia.' },
      { text: 'Giữ vệ sinh da mặt sạch sẽ, thay đổi chế độ ăn uống và tham khảo ý kiến bác sĩ da liễu hoặc chuyên gia chăm sóc sức khỏe', feedback: 'Cách làm đúng đắn và an toàn nhất. Mụn trứng cá là hiện tượng bình thường ở tuổi dậy thì nhưng cần được chăm sóc đúng cách.' },
      { text: 'Dùng tay nặn hết tất cả mụn để chúng biến mất ngay lập tức', feedback: 'Không nên. Việc tự ý nặn mụn có thể gây nhiễm trùng, làm mụn sưng to hơn và để lại sẹo rỗ vĩnh viễn.' }
    ]
  },
  {
    title: 'Bối rối vì giọng nói thay đổi',
    situation: 'Bạn nam bắt đầu thấy giọng nói của mình bị "vỡ" (trở nên ồm, trầm hơn và đôi khi bị lạc giọng) khiến bạn ngại nói trước đám đông.',
    options: [
      { text: 'Hạn chế nói chuyện hết mức có thể trong vài tháng để giọng nói ổn định lại', feedback: 'Không cần thiết. Giọng vỡ là một phần tự nhiên của tuổi dậy thì. Việc ngại giao tiếp sẽ ảnh hưởng đến cuộc sống.' },
      { text: 'Chấp nhận đây là dấu hiệu bình thường của sự trưởng thành và tiếp tục giao tiếp tự tin, giọng nói sẽ ổn định sau một thời gian', feedback: 'Chính xác. Giọng nói thay đổi là do sự phát triển của thanh quản, là dấu hiệu bạn đang lớn. Hãy chấp nhận nó.' },
      { text: 'Cố gắng nói giọng the thé như trước để không bị mọi người chú ý', feedback: 'Không thể và sẽ làm căng thẳng thanh quản. Hãy cứ nói tự nhiên.' }
    ]
  },
  {
    title: 'Chia sẻ thông tin cá nhân trên mạng',
    situation: 'Một người lạ trên mạng xã hội yêu cầu bạn cung cấp số điện thoại, địa chỉ nhà và thông tin trường học để gửi quà tặng.',
    options: [
      { text: 'Cung cấp thông tin vì thấy người này rất thân thiện và hứa hẹn có quà', feedback: 'Không an toàn. Không bao giờ cung cấp thông tin cá nhân (địa chỉ, số điện thoại) cho người lạ trên mạng vì có thể bị lừa đảo hoặc lợi dụng.' },
      { text: 'Từ chối cung cấp bất kỳ thông tin cá nhân nào và chặn tài khoản đó', feedback: 'Rất an toàn. Bảo vệ thông tin cá nhân là quy tắc hàng đầu khi sử dụng mạng xã hội. Nếu bị làm phiền, hãy chặn và báo cáo.' },
      { text: 'Chỉ cung cấp địa chỉ email để họ gửi thư chúc mừng', feedback: 'Vẫn có rủi ro. Tốt nhất là không nên cung cấp bất kỳ thông tin nào cho người lạ.' }
    ]
  },
  {
    title: 'Bạn bè rủ hút thuốc lá điện tử',
    situation: 'Bạn bè rủ bạn dùng thử thuốc lá điện tử (Vape) và nói rằng nó không gây hại như thuốc lá truyền thống.',
    options: [
      { text: 'Dùng thử vì bạn bè nói nó không gây nghiện và an toàn hơn thuốc lá thường', feedback: 'Sai. Thuốc lá điện tử chứa nicotine và các chất độc hại khác, gây nghiện và tổn thương nghiêm trọng đến phổi và não bộ đang phát triển ở tuổi vị thành niên.' },
      { text: 'Từ chối dứt khoát, giải thích về tác hại của thuốc lá điện tử và nếu cần, nên tránh xa nhóm bạn đó', feedback: 'Cách xử lý đúng và mạnh mẽ nhất. Bảo vệ sức khỏe của bản thân là ưu tiên hàng đầu, không để áp lực bạn bè chi phối.' },
      { text: 'Nói rằng mình không có tiền mua để từ chối một cách khéo léo', feedback: 'Cách này chỉ là tạm thời, tốt nhất là từ chối thẳng thắn dựa trên lý do sức khỏe.' }
    ]
  },
  {
    title: 'Xử lý khi bị bắt nạt trực tuyến (Cyberbullying)',
    situation: 'Bạn liên tục nhận được tin nhắn đe dọa, xúc phạm hoặc bị đăng ảnh chế giễu trên mạng xã hội.',
    options: [
      { text: 'Đáp trả lại bằng những lời lẽ xúc phạm tương tự', feedback: 'Không nên. Việc này chỉ làm tình hình căng thẳng hơn và khiến bạn cũng trở thành người có hành vi không đúng mực.' },
      { text: 'Chặn người đó, lưu lại bằng chứng (chụp màn hình) và báo cáo với cha mẹ, giáo viên hoặc người lớn đáng tin cậy để họ can thiệp', feedback: 'Rất đúng. Luôn lưu bằng chứng để tố cáo và tìm kiếm sự hỗ trợ từ người lớn ngay lập tức.' },
      { text: 'Xóa hết các bài đăng và cố gắng giả vờ như không có chuyện gì xảy ra', feedback: 'Không nên. Kẻ bắt nạt sẽ nghĩ bạn yếu đuối và tiếp tục hành vi đó.' }
    ]
  },
  {
    title: 'Bối rối vì sự phát triển cơ thể không đồng đều',
    situation: 'Bạn thấy cơ thể mình phát triển chậm hơn (hoặc nhanh hơn) so với bạn bè cùng tuổi, khiến bạn lo lắng.',
    options: [
      { text: 'So sánh liên tục với bạn bè và cảm thấy xấu hổ vì cơ thể mình khác biệt', feedback: 'Không nên. Mỗi người có tốc độ phát triển khác nhau. Việc so sánh chỉ gây thêm áp lực tâm lý.' },
      { text: 'Hiểu rằng tốc độ dậy thì của mỗi người là khác nhau và nếu có bất kỳ lo lắng nào, hãy hỏi cha mẹ hoặc bác sĩ để được tư vấn khoa học', feedback: 'Chính xác. Sự khác biệt là bình thường. Tư vấn với chuyên gia là cách tốt nhất để đảm bảo bạn khỏe mạnh.' },
      { text: 'Cố gắng che giấu cơ thể để không ai nhận ra sự khác biệt', feedback: 'Không cần thiết. Tự ti không giúp giải quyết vấn đề. Hãy tập trung vào những điều bạn làm tốt.' }
    ]
  },
  {
    title: 'Xử lý khi thấy bạn có hành vi tự hủy hoại',
    situation: 'Bạn thấy bạn thân mình có dấu hiệu buồn bã kéo dài và gần đây bạn phát hiện bạn ấy tự làm tổn thương cơ thể mình (ví dụ: tự cắt tay).',
    options: [
      { text: 'Giữ bí mật vì đã hứa với bạn ấy và hy vọng bạn ấy sẽ tự vượt qua', feedback: 'Không đúng. Đây là tình huống nguy hiểm cần sự can thiệp của người lớn. Giữ bí mật có thể khiến bạn ấy gặp nguy hiểm.' },
      { text: 'Ngay lập tức báo cho giáo viên, cha mẹ hoặc chuyên gia tư vấn học đường biết để tìm sự hỗ trợ y tế và tâm lý kịp thời', feedback: 'Hành động đúng và nhân văn nhất. Sự sống và sức khỏe tinh thần của bạn ấy là quan trọng nhất.' },
      { text: 'Tìm cách nói chuyện với bạn ấy nhưng không báo cho người lớn', feedback: 'Bạn có thể an ủi, nhưng cần sự hỗ trợ chuyên môn của người lớn để đảm bảo an toàn.' }
    ]
  },
  {
    title: 'Sử dụng tiền được cho một cách không đúng',
    situation: 'Bạn nhận được một khoản tiền lớn và một người lạ trên mạng rủ bạn dùng số tiền đó để mua hàng online có nội dung không lành mạnh.',
    options: [
      { text: 'Làm theo lời rủ rê vì tò mò', feedback: 'Không nên. Việc này có thể dẫn đến việc nghiện nội dung không lành mạnh và bị lừa mất tiền. Luôn thận trọng với yêu cầu của người lạ.' },
      { text: 'Dùng số tiền đó để chi tiêu cho sở thích cá nhân lành mạnh hoặc tiết kiệm, đồng thời cảnh giác với người lạ trên mạng', feedback: 'Chính xác. Tiền nên được dùng cho các mục đích tích cực. Không để người lạ điều khiển hành vi của mình.' },
      { text: 'Khoe số tiền mình có với người lạ để họ thấy mình giàu có', feedback: 'Rất nguy hiểm, có thể khiến bạn trở thành mục tiêu lừa đảo.' }
    ]
  },
  {
    title: 'Phòng tránh lạm dụng và đụng chạm không mong muốn',
    situation: 'Một người họ hàng hoặc người quen lớn tuổi hay cố gắng ôm hoặc chạm vào bạn một cách khiến bạn không thoải mái.',
    options: [
      { text: 'Cười trừ, im lặng và cố gắng chịu đựng vì đó là người lớn tuổi', feedback: 'Không đúng. Quyền tự quyết về cơ thể là tối cao. Không ai được phép chạm vào cơ thể bạn khi bạn không muốn.' },
      { text: 'Hét lên hoặc nói to "Không được chạm vào tôi!" và di chuyển ra xa ngay lập tức', feedback: 'Cách xử lý đúng. Đặt ra ranh giới rõ ràng, dùng lời nói mạnh mẽ để cảnh báo và tạo khoảng cách an toàn.' },
      { text: 'Sau đó, kể lại sự việc này một cách chi tiết cho cha mẹ hoặc giáo viên/người lớn tin cậy nhất để họ can thiệp', feedback: 'Rất cần thiết. Việc này giúp ngăn chặn hành vi tái diễn và đảm bảo an toàn cho bạn. Cần tìm kiếm sự hỗ trợ từ người lớn.' }
    ]
  }
];
