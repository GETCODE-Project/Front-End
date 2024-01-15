import { media } from "@/styles/mediaQuery";
import styled from "styled-components";
import ObjectForm from "@/components/project/ObjectForm";
import { useRouter } from "next/router";

const MainPage = () => {
    const arr: any[] = [1,2,3];
    const dotArr: any[] = [1,2,3,4,5];
    const objectArr: any[] = [1,2,3,4,5,6,7,8,9]

    const router = useRouter();

    return (
        <BackLayout>
            <Layout>
                <TopContents>
                    <Contents>
                        <Title>GETCODE 인기 프로젝트</Title>
                        <MoreViewButton onClick={()=>router.push('/project')}>더보기</MoreViewButton>
                        <ObjectWrapper id="topObject">
                            {arr.map((i:any, idx:number)=>(
                                <ObjectForm key={idx} style={{width:'250px', height:'340px'}}/>
                            ))}
                        </ObjectWrapper>
                        <PageDots>
                            {dotArr.map((i:any, idx:number)=>(
                                <Dot key={idx}/>
                            ))}
                        </PageDots>
                    </Contents>
                </TopContents>
                <BottomContents>
                    <Title>
                        <span>프로젝트 |</span>
                        <span>프로젝트 모집 |</span>
                        <span>스터디 모집</span>
                    </Title>
                    <MoreViewButton>더보기</MoreViewButton>
                    <ObjectWrapper>
                            {objectArr.map((i:any, idx:number)=>(
                                <ObjectForm key={idx}/>
                            ))}
                    </ObjectWrapper>
                </BottomContents>
            </Layout>
        </BackLayout>
    )
}
export default MainPage;

const BackLayout = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    /* padding: 0 55px 70px; */
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;

    ${media.tablet || media.mobile}{
        width: 100%;
    }
`;

const TopContents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 600px;
    padding: 20px;
    box-sizing: border-box;

    background-color: #ff4b13;
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 25px;

    & #topObject{
        flex-wrap: nowrap;
    }
`;
const Title = styled.div`
    & > span{
        padding: 0 5px;
        box-sizing: border-box;

        cursor: pointer;
        &:hover{
            font-weight: 700;
        }
    }
`;
const MoreViewButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 32px;
    box-sizing: border-box;

    background-color: #000;

    color: #fff;

    cursor: pointer;
`;
const ObjectWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
const PageDots = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
`;
const Dot = styled.div`
    width: 17px;
    aspect-ratio: 1/1;

    border-radius: 100px;
    background-color: #fff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    cursor: pointer;
    &:hover{
        background-color: #ff3d00;
    }
`;

const BottomContents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 100%;
    padding: 45px 0;
`;