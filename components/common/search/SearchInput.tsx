import { Logo } from "@/public/SVG/logo";
import { SearchButton } from "@/public/SVG/search";
import { media } from "@/styles/mediaQuery";
import { useState } from "react";
import styled from "styled-components";

const SearchInput = () => {
    const [isDetailOpen, isDetailClose] = useState<boolean>(false);

    return(
        <Layout>
        <Search>
            <div id="logo">
            <Logo width='147' height='30'/>
            </div>
            <SearchInputBar/>
            <SearchButtonWrapper>
                <SearchButton/>
            </SearchButtonWrapper>
        </Search>
        <DetailButton onClick={()=>isDetailClose(!isDetailOpen)}>
                { isDetailOpen?'닫기':'상세검색'}
        </DetailButton>
        </Layout>
    )
}

export default SearchInput;
const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    max-width: 600px;
    width: 100%;
    box-sizing: border-box;

    ${media.mobile || media.tablet}{
        width: 100%;
        padding: 0 20px;
    }
`;
const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-bottom: 20px;
    box-sizing: border-box;
    width: 100%;
    
    & #logo {
        ${media.mobile}{
            display: none;
        }
    }
`;

const SearchInputBar = styled.input`
    display: flex;
    width: 100%;
    height: 44px;
    box-sizing: border-box;

    border-radius: 6px;
    border: 3px solid #ff4b13;
    background-color: #fff1e4;
`;

const SearchButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    padding-top: 3px;
    box-sizing: border-box;

    border-radius: 6px;
    border: 3px solid #ff4b13;
    background-color: #ff4b13;
`;

const DetailButton = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;

    font-size: 1rem;
    text-decoration-line: underline;

    cursor: pointer;
`;