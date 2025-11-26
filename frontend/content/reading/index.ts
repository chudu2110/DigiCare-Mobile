export class RB {
  heading: string;
  text: string;
  bullets?: string[];
  constructor(heading: string, text: string, bullets?: string[]) {
    this.heading = heading;
    this.text = text;
    this.bullets = bullets;
  }
}

export class RA {
  title: string;
  text: string;
  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }
}

export class RT {
  id: string;
  title: string;
  blocks: RB[];
  aside?: RA[];
  constructor(id: string, title: string, blocks: RB[], aside?: RA[]) {
    this.id = id;
    this.title = title;
    this.blocks = blocks;
    this.aside = aside;
  }
}

class Repo {
  private topics: RT[];
  constructor(topics: RT[]) {
    this.topics = topics;
  }
  private normalize(s: string) {
    return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  all() {
    return this.topics;
  }
  getByKey(key?: string) {
    const k = key ? this.normalize(key) : '';
    if (!k) return this.topics[0];
    const byTitle = this.topics.find(t => this.normalize(t.title).includes(k));
    return byTitle || this.topics[0];
  }
}

const BAI1_TEXT = `Dậy thì là giai đoạn chuyển đổi từ trẻ em thành người lớn, thường xảy ra trong độ tuổi từ 8 đến 16, tùy thuộc vào mỗi cá nhân. Ở bé gái, quá trình này được thúc đẩy bởi hóc-môn, dẫn đến sự phát triển của các đặc điểm giới tính thứ cấp.

Các Thay đổi Thể chất Đặc trưng:

Phát triển ngực (Tuyến vú): Là dấu hiệu đầu tiên của tuổi dậy thì. Ngực có thể bắt đầu bằng một cục u nhỏ dưới núm vú và có thể phát triển không đồng đều lúc ban đầu.

Chu kỳ kinh nguyệt (Hành kinh): Khoảng 1-2 năm sau khi ngực bắt đầu phát triển, các bé gái sẽ có kỳ kinh đầu tiên. Đây là quá trình tử cung chuẩn bị cho việc mang thai, nếu không thụ tinh thì niêm mạc tử cung sẽ bong ra và chảy máu. Chu kỳ này đánh dấu khả năng sinh sản của cơ thể.

Các thay đổi khác: Tăng chiều cao nhanh, mọc lông mu và lông nách, tăng tiết mồ hôi, da dầu và mụn trứng cá, hông nở rộng hơn.

Khám phá và Tôn trọng Cơ thể:

Việc tò mò và khám phá cơ thể mình là hành vi hoàn toàn tự nhiên. Điều quan trọng là bé gái cần học cách:

Vệ sinh cá nhân đúng cách: Đặc biệt là trong những ngày có kinh nguyệt để đảm bảo sạch sẽ và ngăn ngừa nhiễm trùng.

Tôn trọng cơ thể: Hiểu rằng cơ thể mình là độc nhất và cần được bảo vệ.

Tìm kiếm sự giúp đỡ: Trao đổi với mẹ hoặc người lớn tin cậy khi có bất kỳ thắc mắc hoặc khó chịu nào liên quan đến cơ thể.`;

const initialTopics = [
  new RT(
    'bio-psy',
    'Giới tính sinh học & tâm lý',
    [
      new RB('Khái niệm chính', 'Giới tính sinh học và tâm lý có khác biệt nhưng liên quan.', ['Sinh học','Tâm lý','Tôn trọng sự đa dạng']),
      new RB('Ví dụ thực tế', 'Mỗi người có trải nghiệm riêng, cần đồng cảm và thấu hiểu.'),
      new RB('Tổng kết', 'Tôn trọng bản thân và người khác.')
    ],
    [
      new RA('Ghi chú nhanh', 'Từ ngữ chuẩn xác giúp giao tiếp an toàn.'),
      new RA('Tài liệu tham khảo', 'Nguồn uy tín từ tổ chức y tế/giáo dục.')
    ]
  ),
  new RT(
    'puberty',
    'Dậy thì & thay đổi cơ thể',
    [
      new RB('Khái niệm chính', 'Dậy thì diễn ra khác nhau theo từng người.', ['Thay đổi thể chất','Cảm xúc mới','Chăm sóc sức khỏe']),
      new RB('Ví dụ thực tế', 'Chu kỳ, kích thích, mụn, chiều cao thay đổi.'),
      new RB('Tổng kết', 'Tìm hiểu, hỏi người tin cậy, đi khám khi cần.')
    ],
    [
      new RA('Ghi chú nhanh', 'Bình thường hóa thay đổi ở tuổi dậy thì.'),
      new RA('Tài liệu tham khảo', 'Cẩm nang sức khỏe vị thành niên.')
    ]
  ),
  new RT(
    'consent',
    'Sự đồng thuận',
    [
      new RB('Khái niệm chính', 'Đồng thuận là đồng ý rõ ràng, tự nguyện, có thể rút lại.', ['Hỏi và nghe','Tôn trọng ranh giới','Không ép buộc']),
      new RB('Ví dụ thực tế', 'Dừng lại khi người kia không thoải mái.'),
      new RB('Tổng kết', 'Giao tiếp là nền tảng.')
    ],
    [
      new RA('Ghi chú nhanh', 'Không có nghĩa là im lặng đồng ý.'),
      new RA('Tài liệu tham khảo', 'Hướng dẫn đồng thuận an toàn.')
    ]
  ),
  new RT(
    'relation',
    'Tình yêu & mối quan hệ',
    [
      new RB('Khái niệm chính', 'Quan hệ lành mạnh dựa trên tin tưởng, tôn trọng, giao tiếp.', ['Tin tưởng','Tôn trọng','Giao tiếp']),
      new RB('Ví dụ thực tế', 'Giải quyết mâu thuẫn bằng lắng nghe và thỏa thuận.'),
      new RB('Tổng kết', 'Không kiểm soát, không bạo lực.')
    ],
    [
      new RA('Ghi chú nhanh', 'Ranh giới cá nhân là cần thiết.')
    ]
  ),
  new RT(
    'thcs-bai1',
    'THCS • Bài 1 • Kiến thức nền tảng',
    [
      new RB('Bài đọc', BAI1_TEXT)
    ]
  )
];

const repo = new Repo(initialTopics);

export const READING_TOPICS = repo.all();
export const getReadingTopicByKey = (key?: string) => repo.getByKey(key);
