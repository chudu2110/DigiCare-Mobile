export type QuizQuestion = { q: string; options: string[]; correct: number };

export const QUIZ_QUESTIONS: Record<string, QuizQuestion[]> = {
  default: [
    { q: '"Đồng thuận" nghĩa là gì?', options: ['Im lặng nghĩa là đồng ý', 'Đồng ý rõ ràng, tự nguyện, có thể rút lại', 'Chỉ cần một người muốn'], correct: 1 },
    { q: 'Dậy thì thường bắt đầu khi nào?', options: ['Bất kỳ độ tuổi nào', 'Khoảng 8–16 tùy từng người', 'Sau 18 tuổi'], correct: 1 },
    { q: 'Quan hệ lành mạnh cần gì?', options: ['Tin tưởng, tôn trọng, giao tiếp', 'Luôn đồng ý mọi thứ', 'Kiểm soát đối phương'], correct: 0 }
  ],
  consent: [
    { q: 'Đồng thuận có thể rút lại không?', options: ['Không', 'Có, bất cứ lúc nào', 'Chỉ khi có lý do'], correct: 1 },
    { q: 'Dấu hiệu không đồng thuận?', options: ['Im lặng, tránh né', 'Cười', 'Nhắn tin nhanh'], correct: 0 }
  ]
};

