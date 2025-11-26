export type ReadingBlock = { heading: string; text: string; bullets?: string[] };
export type ReadingAside = { title: string; text: string };
export type ReadingTopic = { id: string; title: string; blocks: ReadingBlock[]; aside?: ReadingAside[] };

const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const READING_TOPICS: ReadingTopic[] = [
  {
    id: 'bio-psy',
    title: 'Giới tính sinh học & tâm lý',
    blocks: [
      { heading: 'Khái niệm chính', text: 'Giới tính sinh học và tâm lý có khác biệt nhưng liên quan.' , bullets: ['Sinh học', 'Tâm lý', 'Tôn trọng sự đa dạng'] },
      { heading: 'Ví dụ thực tế', text: 'Mỗi người có trải nghiệm riêng, cần đồng cảm và thấu hiểu.' },
      { heading: 'Tổng kết', text: 'Tôn trọng bản thân và người khác.' }
    ],
    aside: [
      { title: 'Ghi chú nhanh', text: 'Từ ngữ chuẩn xác giúp giao tiếp an toàn.' },
      { title: 'Tài liệu tham khảo', text: 'Nguồn uy tín từ tổ chức y tế/giáo dục.' }
    ]
  },
  {
    id: 'puberty',
    title: 'Dậy thì & thay đổi cơ thể',
    blocks: [
      { heading: 'Khái niệm chính', text: 'Dậy thì diễn ra khác nhau theo từng người.' , bullets: ['Thay đổi thể chất', 'Cảm xúc mới', 'Chăm sóc sức khỏe'] },
      { heading: 'Ví dụ thực tế', text: 'Chu kỳ, kích thích, mụn, chiều cao thay đổi.' },
      { heading: 'Tổng kết', text: 'Tìm hiểu, hỏi người tin cậy, đi khám khi cần.' }
    ],
    aside: [
      { title: 'Ghi chú nhanh', text: 'Bình thường hóa thay đổi ở tuổi dậy thì.' },
      { title: 'Tài liệu tham khảo', text: 'Cẩm nang sức khỏe vị thành niên.' }
    ]
  },
  {
    id: 'consent',
    title: 'Sự đồng thuận',
    blocks: [
      { heading: 'Khái niệm chính', text: 'Đồng thuận là đồng ý rõ ràng, tự nguyện, có thể rút lại.' , bullets: ['Hỏi và nghe', 'Tôn trọng ranh giới', 'Không ép buộc'] },
      { heading: 'Ví dụ thực tế', text: 'Dừng lại khi người kia không thoải mái.' },
      { heading: 'Tổng kết', text: 'Giao tiếp là nền tảng.' }
    ],
    aside: [
      { title: 'Ghi chú nhanh', text: 'Không có nghĩa là im lặng đồng ý.' },
      { title: 'Tài liệu tham khảo', text: 'Hướng dẫn đồng thuận an toàn.' }
    ]
  },
  {
    id: 'relation',
    title: 'Tình yêu & mối quan hệ',
    blocks: [
      { heading: 'Khái niệm chính', text: 'Quan hệ lành mạnh dựa trên tin tưởng, tôn trọng, giao tiếp.' , bullets: ['Tin tưởng', 'Tôn trọng', 'Giao tiếp'] },
      { heading: 'Ví dụ thực tế', text: 'Giải quyết mâu thuẫn bằng lắng nghe và thỏa thuận.' },
      { heading: 'Tổng kết', text: 'Không kiểm soát, không bạo lực.' }
    ],
    aside: [
      { title: 'Ghi chú nhanh', text: 'Ranh giới cá nhân là cần thiết.' }
    ]
  }
];

export const getReadingTopicByKey = (key?: string) => {
  const k = key ? normalize(key) : '';
  if (!k) return READING_TOPICS[0];
  const byTitle = READING_TOPICS.find(t => normalize(t.title).includes(k));
  return byTitle || READING_TOPICS[0];
};

