interface FindProjectObjectData{
    id: number;
    views: number;
    likes: any[];
    bookmarks: boolean;
    recruitStatus: boolean;
    topic: string[];
    writer: string;
    createdDate: string;
}

/** 스터디 모집 객체 더미 데이터 */

export const DummyData: FindProjectObjectData[] = [
    {
        id: 1,
        views: 1321,
        likes: [123, true],
        bookmarks: true,
        recruitStatus: true,
        topic: ['스터디','면접준비','백엔드','웹개발'],
        writer: '닉네임',
        createdDate: '2023-12-21'
    },
    {
        id: 2,
        views: 1321,
        likes: [123, false],
        bookmarks: false,
        recruitStatus: true,
        topic: ['스터디','면접준비','백엔드','웹개발'],
        writer: '닉네임',
        createdDate: '2023-12-21'
    },
    {
        id: 3,
        views: 1321,
        likes: [123, false],
        bookmarks: false,
        recruitStatus: false,
        topic: ['스터디','면접준비','백엔드','웹개발'],
        writer: '닉네임',
        createdDate: '2023-12-21'
    },
]