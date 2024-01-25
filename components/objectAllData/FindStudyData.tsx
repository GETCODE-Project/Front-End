interface FindProjectObjectData{
    id: number;
    views: number;
    likes: any[];
    Wishs: boolean;
    recruitStatus: boolean;
    title: string;
    subTitle: string;
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
        Wishs: true,
        recruitStatus: true,
        title: 'GETCODE 스터디 모집 게시글 제목',
        subTitle: 'GETCODE 스터디 모집 게시글 내용 컨텐츠',
        topic: ['스터디','면접준비','백엔드','웹개발'],
        writer: '닉네임',
        createdDate: '2023-12-21'
    },
    {
        id: 2,
        views: 1321,
        likes: [123, false],
        Wishs: false,
        recruitStatus: true,
        title: 'GETCODE 스터디 모집 게시글 제목',
        subTitle: 'GETCODE 스터디 모집 게시글 내용 컨텐츠',
        topic: ['스터디','면접준비','백엔드','웹개발'],
        writer: '닉네임',
        createdDate: '2023-12-21'
    },
    {
        id: 3,
        views: 1321,
        likes: [123, false],
        Wishs: false,
        recruitStatus: false,
        title: 'GETCODE 스터디 모집 게시글 제목',
        subTitle: 'GETCODE 스터디 모집 게시글 내용 컨텐츠',
        topic: ['스터디','면접준비','백엔드','웹개발'],
        writer: '닉네임',
        createdDate: '2023-12-21'
    },
]