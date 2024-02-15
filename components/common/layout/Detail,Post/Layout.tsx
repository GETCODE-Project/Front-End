import { Profile2SVG, ProfileSVG } from "@/public/SVG/profile";
import { HartOffSVG, WishOnSVG } from "@/public/SVG/reactionCount";
import { media } from "@/styles/mediaQuery";
import styled from "styled-components";
import DetailIntroList from "@/components/common/layout/Detail,Post/IntroList";
import { useRouter } from "next/router";

const DetailLayout = ({id}:any) => {

    const router = useRouter();
    const detailPage = router.pathname.includes('/detail/');

    return(
        <Layout>
            <PageName>{'프로젝트'}</PageName>
            <TitleWrapper>
                <div className="title">
                    제목입니다글자수테스트중글자테스트글자테스트
                </div>
                <div className="feedback">
                    <div id="recruit">모집 중</div>
                    <div style={{display:'flex',gap:'5px'}}>
                        <div><HartOffSVG size="28"/></div>
                        <div style={{paddingTop:'8px'}}>1,234</div>
                    </div>
                    <div style={{paddingTop:'3px'}}><WishOnSVG/></div>
                </div>
                <div className="writer">{'작성자'}</div>
            </TitleWrapper>
            <DetailIntroList/>
            <ContentWrapper>
                텍스트입력텍스트입력텍스트입력텍스트입력텍스트입력텍스트입력<br/>텍스트입력
                텍스트입력텍스트입력텍스트입력텍스트입력<br/>텍스트입력텍스트입력텍스트입력
                텍스트입력텍스트입력텍스트입력텍스트입력텍스트입<br/>력텍스트입력텍스트입력
                텍스트입력텍스트입력텍스<br/>트입력텍스트입력텍스트입력텍스트입력텍스트입력
                텍스트입력텍스트입<br/>력텍스트입력텍스트입력텍스트입력텍스트입력텍스트입력
            </ContentWrapper>
            <ModifyWrapper>
                <div id="delete">삭제</div>
                <div id="modify">수정</div>
            </ModifyWrapper>
            {detailPage?
                <CommentWrapper>
                    <div>댓글 N개</div>
                    <div className="writeComment">
                        <div id="profile"><Profile2SVG size="40"/></div>
                        <input id="input"/>
                        <div id="button">등록</div>
                    </div>
                    <div className="viewComment">
                        <div id="oneComment">
                            <div><ProfileSVG size="40"/></div>
                            <div id="commentLog">
                                <div>닉네임</div>
                                <div>2023.12.28.19:00</div>
                            </div>
                            <div></div>
                            {/* [TODO: 그리드에서 빈칸으로 두고싶으면 빈 div를 두는 방법 말고는 없을까?] */}
                            <div id="commentText">
                                <div>댓글내용 텍스트</div>
                                <div id="hart">
                                    <div><HartOffSVG size="20"/></div>
                                    <div>1,246</div>
                                </div>
                            </div>
                        </div>
                        <div id="oneComment">
                            <div><ProfileSVG size="40"/></div>
                            <div id="commentLog">
                                <div>닉네임</div>
                                <div>2023.12.28.19:00</div>
                            </div>
                            <div></div>
                            {/* [TODO: 그리드에서 빈칸으로 두고싶으면 빈 div를 두는 방법 말고는 없을까?] */}
                            <div id="commentText">
                                <div>댓글내용 텍스트</div>
                                <div id="hart">
                                    <div><HartOffSVG size="20"/></div>
                                    <div>1,246</div>
                                </div>
                            </div>
                        </div>
                        <div id="oneComment">
                            <div><ProfileSVG size="40"/></div>
                            <div id="commentLog">
                                <div>닉네임</div>
                                <div>2023.12.28.19:00</div>
                            </div>
                            <div></div>
                            {/* [TODO: 그리드에서 빈칸으로 두고싶으면 빈 div를 두는 방법 말고는 없을까?] */}
                            <div id="commentText">
                                <div>댓글내용 텍스트</div>
                                <div id="hart">
                                    <div><HartOffSVG size="20"/></div>
                                    <div>1,246</div>
                                </div>
                            </div>
                        </div>
                        <div id="moreView">더보기</div>
                    </div>
                </CommentWrapper>
                :null
            }
            
        </Layout>
    )
}
export default DetailLayout;

const d = styled.div`

`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;

    ${media.mobile || media.tablet}{
        width: 100%;
        padding: 0 20px;
    }
`;

const PageName = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  width: 100%;

  font-size: 1.25rem;
  color: #ff4b13;
`;

const TitleWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    padding: 16px 0;

    border-bottom: 2px solid #BDBDBD;

    & .title{
        display: flex;
        gap: 25px;
        font-size: 1.875rem;
        font-weight: 600;
    }
    & .feedback{
        display: flex;
        justify-content: right;
        gap: 10px;
        & #recruit{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 120px;
            height: 25px;

            background-color: #00FF1A;
            border-radius: 30px;

            font-size: 1rem;
            font-weight: 600;
        }
        ${media.mobile}{
        justify-content: start;
        }
    }
    & .writer{
        display: flex;
        align-items: center;
    }

    ${media.mobile}{
        grid-template-columns: auto;
    }
`;





const ContentWrapper = styled.div`
    display: flex;
    min-height: 300px;
    padding: 25px;

    /* border: 1px solid #FF4B13; */

    line-height: 1.375rem;
`;

const ModifyWrapper = styled.div`
    display: flex;
    justify-content: right;
    gap: 25px;
    padding: 25px 0;
    margin: 0 25px;

    border-top: 1px solid #BDBDBD;
    border-bottom: 1px solid #BDBDBD;

    font-size: 1rem;
    font-weight: 600;

    & > div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 25px;

        border-radius: 6px;
        background-color: #fff;
    }
    & #delete{
        border: 1px solid #FF4B13;
        background-color: #fff;
        color: #FF4B13;
    }
    & #modify{
        background-color: #FF4B13;
        color: #fff;
    }
`;

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 25px;

    & .writeComment{
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 15px;
        position: relative;

        & #profile{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            overflow: hidden;
            filter: drop-shadow(0px 0px 8px rgba(125, 125, 125, 0.25));
        }
        & #input{
            height: 40px;
            border-radius: 8px;
            border: 3px solid #FF993A;
            padding: 0 10px;

            font-size: 1rem;
            filter: drop-shadow(0px 0px 5px rgba(125, 125, 125, 0.25));

            &:focus{
                outline: none;
            }
        }
        & #button{
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 10px;
            top: 10px;
            height: 20px;
            padding: 0 10px;

            background-color: #FF993A;
            border-radius: 6px;

            color: #fff;
            font-size: 14px;

            cursor: pointer;
        }
    }
    & .viewComment{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;

        background-color: #FFF1E4;

        & #oneComment{
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        padding: 20px 0;

        background-color: #FFF1E4;
        border-bottom: 1px solid #FFE2C6;

            & #commentLog{
                display: flex;
                gap: 10px;
            }
        }

        & #commentText{
            display: grid;
            grid-template-columns: 1fr auto;

            & #hart{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 70px;
            }
        }

        & #moreView{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 185px;
            height: 30px;
            margin: 30px 0;

            border-radius: 30px;
            background-color: #fff;
            filter: drop-shadow(0px 2px 5px rgba(125, 125, 125, 0.25));

            color: #FF993A;
            font-size: 1rem;
            font-weight: 600;

            cursor: pointer;
        }
    }
`;