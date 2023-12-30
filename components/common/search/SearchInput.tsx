import { SearchButton, Logo } from "@/public/SVG/search";
import { useState } from "react";
import styled from "styled-components";

const SearchInput = () => {
    const [isDetailOpen, isDetailClose] = useState<boolean>(false);

    return(
        <Layout>
        <Search>
            <Logo/>
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
    padding: 50px 70px;
    box-sizing: border-box;
`;
const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 20px;
    box-sizing: border-box;
    width: 600px;
    
`;

const SearchInputBar = styled.input`
    display: flex;
    width: 490px;
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
    width: 600px;

    font-size: 1rem;
    text-decoration-line: underline;
`;