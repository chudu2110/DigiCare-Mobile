export const getThptSections = (lessonId: number, title: string) => {
  const TITLES: Record<number, string> = {
    1: 'Con trai con gái và sự công bằng',
    2: 'Động chạm không an toàn',
    3: 'Con trai và bao quy đầu',
    4: 'Trẻ vị thành niên mang thai',
    5: 'Xâm hại trên mạng xã hội',
    6: 'Thay đồ nơi công cộng',
    7: 'Xâm hại ở trường học',
    8: 'Huy Hiệu "Phòng Tránh Xâm Hại"',
  };
  const VIDEO_MAP: Record<number, string> = {
    1: 'https://www.youtube.com/watch?v=8l2_u3h43LA',
    2: 'https://www.youtube.com/watch?v=bFUnZadYO0E&list=PLILLgj67TX0wmNb012GNvjdtJwnSleERK',
    3: 'https://www.youtube.com/watch?v=pEF_zVUd_bE&list=PLwxCHpnspQtM1Yk7QHRdLgF4uiorHIMjm&index=10',
    4: 'https://www.youtube.com/watch?v=LRvvzi-hXfU&t=16s',
    5: 'https://www.youtube.com/watch?v=H5WwnUjRWs4',
    6: 'https://www.youtube.com/watch?v=0jNjA63fwmM&list=PLUc35-x_2Qkq00UclS8G3OhkvianzbYNF&index=6',
    7: 'https://www.youtube.com/watch?v=Y-ciU9J86D4&list=PLUc35-x_2Qkq00UclS8G3OhkvianzbYNF&index=4',
    8: 'https://www.youtube.com/watch?v=HuD9wstvO1s&list=PLUc35-x_2Qkq00UclS8G3OhkvianzbYNF&index=3',
  };
  const src = VIDEO_MAP[lessonId] || 'https://www.youtube.com/watch?v=TFIozvEqGqY';
  const vTitle = TITLES[lessonId] || 'Mở đầu';
  return [
    { id: `s1-${lessonId}`, title: vTitle, kind: 'video', durationLabel: '3 phút', src },
    { id: `s2-${lessonId}`, title: 'Kiến thức nâng cao', kind: 'foundation', durationLabel: '8 phút' },
    { id: `s3-${lessonId}`, title: 'Câu hỏi ôn tập', kind: 'quick', durationLabel: '5 phút' },
  ] as const;
};
