export const getThptSections = (lessonId: number, title: string) => {
  return [
    { id: `s1-${lessonId}`, title: 'Mở đầu', kind: 'video', durationLabel: '3 phút', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: `s2-${lessonId}`, title: 'Kiến thức nâng cao', kind: 'reading', durationLabel: '8 phút' },
    { id: `s3-${lessonId}`, title: 'Câu hỏi ôn tập', kind: 'quiz', durationLabel: '5 phút' },
  ] as const;
};
