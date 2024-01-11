import { ExitToggleIcon, ToggleIcon } from "@/public/SVG/search";
import { media } from "@/styles/mediaQuery";
import { useState } from "react";
import styled from "styled-components";

interface Props{
    title?: string;
    data?: string[];
}
/** 다중 선택 토글 폼 -------------------------------------------- */
export const MultipleSelectToggle = ({title, data}:Props) => {

    const dataArray:string[] = data??[];
    const [toggleList, setToggleList] = useState<string[]>(dataArray);
    const [isToggleOn, setIsToggleOn]=useState<boolean>(false);
    const [currentSelected, setCurrentSelected]=useState<string>('--');
    const [selectedList, setSelectedList] = useState<string[]>([]);

    const handleSelectedToggle = (i:string) => {
        let array:string[] =[...selectedList];
        array.push(i);
        setSelectedList(array);

        setIsToggleOn(!isToggleOn);
        setCurrentSelected(i);

        if(toggleList.includes(i)){
            let array:any[] = toggleList.filter((item)=>item!=i);
            setToggleList(array);
        }
    };

    const handleUnSelectedToggle = (i:string) => {
        console.log(toggleList);
        let toggleListArray:any[] = [...toggleList,i];
        setToggleList(toggleListArray);

        let seletedListArray:any[] = selectedList.filter((item)=>item!=i);
        setSelectedList(seletedListArray);
    };

    return(
        <BackLayout>
            <Layout>
                <Title>{title}</Title>
                <Contents>
                    <Toggle onClick={()=>setIsToggleOn(!isToggleOn)}>
                        <span>{currentSelected}</span>
                        <ToggleIcon/>
                        {isToggleOn ?
                            <ToggleListWrapper>
                                {toggleList.map((i:any, idx:number)=>(
                                    <ToggleList key={idx} onClick={()=>handleSelectedToggle(i)}>{i}</ToggleList>
                                ))}
                            </ToggleListWrapper>
                        : <></>
                        }
                    </Toggle>
                    <SelectedToggleWrapper>
                        {selectedList.map((i:any, idx:number)=>(
                            <SelectedToggle key={idx}>
                                {selectedList[idx]}
                                <div id="exitToggle" onClick={()=>handleUnSelectedToggle(selectedList[idx])}>
                                    <ExitToggleIcon/>
                                </div>
                            </SelectedToggle>
                        ))}
                    </SelectedToggleWrapper>
                </Contents>
            </Layout>
        </BackLayout>
    )
}

/** 단일 선택 토글 폼 -------------------------------------------- */
export const SingleSelectToggle = ({title, data}:Props) => {

    const dataArray:string[] = data??[];
    const [toggleList, setToggleList] = useState<string[]>(dataArray);
    const [isToggleOn, setIsToggleOn]=useState<boolean>(false);
    const [currentSelected, setCurrentSelected]=useState<string>('--');

    return(
        <BackLayout>
            <Layout>
                <Title>{title}</Title>
                <Contents>
                    <Toggle onClick={()=>setIsToggleOn(!isToggleOn)}>
                            <span>{currentSelected}</span>
                            <ToggleIcon/>
                            {isToggleOn ?
                                <ToggleListWrapper>
                                {toggleList.map((i:any, idx:number)=>(
                                    <ToggleList key={idx} onClick={()=>setCurrentSelected(i)}>{i}</ToggleList>
                                ))}</ToggleListWrapper>
                            : <></>
                            }
                    </Toggle>
                </Contents>
            </Layout></BackLayout>
    )
}
const BackLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    flex-wrap: nowrap;
    width: 90%;
    gap: 10px;
    margin-top: 20px;

    ${media.mobile || media.tablet}{
        grid-template-columns: 32% auto;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 25px;
    padding: 3px 5px;
    padding-top: 4px;
    white-space: nowrap;

    border-radius: 6px;
    border: 2px solid #ff993a;

    ${media.mobile || media.tablet}{
        width: 100%;
    }
`;

const Contents = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
`;

const Toggle = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    width: 430px;
    height: 25px;
    padding: 3px 10px;

    border-radius: 6px;
    border: 1px solid #909090;
    background-color: #d9d9d9;

    cursor: pointer;

    ${media.tablet || media.mobile}{
        width: 100%;
    }
`;
const ToggleListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top:25px;
    left: 4px;
    z-index: 1000;
    justify-content: start;
    width: 421px;
    
    background-color: #d9d9d9;

    ${media.tablet || media.mobile}{
        width: 98%;
    }
    `;
const ToggleList = styled.div`
    display: flex;
    height: 25px;
    align-items: center;
    padding: 3px 10px;
    
    border-bottom: 1px solid #c7c7c7;
`;

const SelectedToggleWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`;

const SelectedToggle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    width: fit-content;
    height: 25px;

    border-radius: 30px;
    border: 1px solid #b1b1b1;
    background-color: #fff;

    & #exitToggle{
        padding-top: 3px;
        cursor: pointer;
    }
`;