import styled from "styled-components";
import RoundBox from "@/components/common/selectObject/SelectRoundBox";
import { media } from "@/styles/mediaQuery";
import React, { useState, useEffect } from "react";

interface Props {
  text: string;
  setLocation: (newValue: string) => void;
}

const SelectLocation = ({ setLocation, text }: Props) => {
  const optionSubject = [
    { key: 0, siDo: "시/도 선택", guGun: ["구/군 선택"] },
    {
      key: 1,
      siDo: "서울특별시",
      guGun: [
        "구/군 선택",
        "강남구",
        "강동구",
        "강북구",
        "강서구",
        "관악구",
        "광진구",
        "구로구",
        "금천구",
        "노원구",
        "도봉구",
        "동대문구",
        "동작구",
        "마포구",
        "서대문구",
        "서초구",
        "성동구",
        "성북구",
        "송파구",
        "양천구",
        "영등포구",
        "용산구",
        "은평구",
        "종로구",
        "중구",
        "중랑구",
      ],
    },
    {
      key: 2,
      siDo: "인천광역시",
      guGun: [
        "구/군 선택",
        "계양구",
        "미추홀구",
        "남동구",
        "동구",
        "부평구",
        "서구",
        "연수구",
        "중구",
        "강화군",
        "옹진군",
      ],
    },
    {
      key: 3,
      siDo: "대전광역시",
      guGun: ["구/군 선택", "대덕구", "동구", "서구", "유성구", "중구"],
    },
    {
      key: 4,
      siDo: "광주광역시",
      guGun: ["구/군 선택", "광산구", "남구", "동구", "북구", "서구"],
    },
    {
      key: 5,
      siDo: "대구광역시",
      guGun: [
        "구/군 선택",
        "남구",
        "달서구",
        "동구",
        "북구",
        "서구",
        "수성구",
        "중구",
        "달성군",
      ],
    },

    {
      key: 6,
      siDo: "울산광역시",
      guGun: ["구/군 선택", "남구", "동구", "북구", "중구", "울주군"],
    },
    {
      key: 7,
      siDo: "부산광역시",
      guGun: [
        "구/군 선택",
        "강서구",
        "금정구",
        "남구",
        "동구",
        "동래구",
        "부산진구",
        "북구",
        "사상구",
        "사하구",
        "서구",
        "수영구",
        "연제구",
        "영도구",
        "중구",
        "해운대구",
        "기장군",
      ],
    },
    {
      key: 8,
      siDo: "경기도",
      guGun: [
        "구/군 선택",
        "고양시",
        "과천시",
        "광명시",
        "광주시",
        "구리시",
        "군포시",
        "김포시",
        "남양주시",
        "동두천시",
        "부천시",
        "성남시",
        "수원시",
        "시흥시",
        "안산시",
        "안성시",
        "안양시",
        "양주시",
        "오산시",
        "용인시",
        "의왕시",
        "의정부시",
        "이천시",
        "파주시",
        "평택시",
        "포천시",
        "하남시",
        "화성시",
        "가평군",
        "양평군",
        "여주군",
        "연천군",
      ],
    },
    {
      key: 9,
      siDo: "강원도",
      guGun: [
        "구/군 선택",
        "강릉시",
        "동해시",
        "삼척시",
        "속초시",
        "원주시",
        "춘천시",
        "태백시",
        "고성군",
        "양구군",
        "양양군",
        "영월군",
        "인제군",
        "정선군",
        "철원군",
        "평창군",
        "홍천군",
        "화천군",
        "횡성군",
      ],
    },
    {
      key: 10,
      siDo: "충청북도",
      guGun: [
        "구/군 선택",
        "제천시",
        "청주시",
        "충주시",
        "괴산군",
        "단양군",
        "보은군",
        "영동군",
        "옥천군",
        "음성군",
        "증평군",
        "진천군",
        "청원군",
      ],
    },
    {
      key: 11,
      siDo: "충청남도",
      guGun: [
        "구/군 선택",
        "계룡시",
        "공주시",
        "논산시",
        "보령시",
        "서산시",
        "아산시",
        "천안시",
        "금산군",
        "당진군",
        "부여군",
        "서천군",
        "연기군",
        "예산군",
        "청양군",
        "태안군",
        "홍성군",
      ],
    },
    {
      key: 12,
      siDo: "전라북도",
      guGun: [
        "구/군 선택",
        "군산시",
        "김제시",
        "남원시",
        "익산시",
        "전주시",
        "정읍시",
        "고창군",
        "무주군",
        "부안군",
        "순창군",
        "완주군",
        "임실군",
        "장수군",
        "진안군",
      ],
    },
    {
      key: 13,
      siDo: "전라남도",
      guGun: [
        "구/군 선택",
        "광양시",
        "나주시",
        "목포시",
        "순천시",
        "여수시",
        "강진군",
        "고흥군",
        "곡성군",
        "구례군",
        "담양군",
        "무안군",
        "보성군",
        "신안군",
        "영광군",
        "영암군",
        "완도군",
        "장성군",
        "장흥군",
        "진도군",
        "함평군",
        "해남군",
        "화순군",
      ],
    },
    {
      key: 14,
      siDo: "경상북도",
      guGun: [
        "구/군 선택",
        "경산시",
        "경주시",
        "구미시",
        "김천시",
        "문경시",
        "상주시",
        "안동시",
        "영주시",
        "영천시",
        "포항시",
        "고령군",
        "군위군",
        "봉화군",
        "성주군",
        "영덕군",
        "영양군",
        "예천군",
        "울릉군",
        "울진군",
        "의성군",
        "청도군",
        "청송군",
        "칠곡군",
      ],
    },
    {
      key: 15,
      siDo: "경상남도",
      guGun: [
        "구/군 선택",
        "거제시",
        "김해시",
        "마산시",
        "밀양시",
        "사천시",
        "양산시",
        "진주시",
        "진해시",
        "창원시",
        "통영시",
        "거창군",
        "고성군",
        "남해군",
        "산청군",
        "의령군",
        "창녕군",
        "하동군",
        "함안군",
        "함양군",
        "합천군",
      ],
    },
    {
      key: 16,
      siDo: "제주도",
      guGun: ["구/군 선택", "서귀포시", "제주시", "남제주군", "북제주군"],
    },
  ];
  const [selectedKey, setSelectedKey] = useState<number>(0);
  const [gu, setGu] = useState<string>("");
  const selectedOption = optionSubject.find(
    (option) => option.key === selectedKey
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const key = parseInt(event.target.value, 10);
    setSelectedKey(key);
  };

  useEffect(() => {
    setLocation(selectedOption?.siDo + "/" + gu);
  }, [gu]);
  return (
    <MobileLayaout>
      <Query>
        <RoundBox text={text} />
      </Query>
      <SelectBoxDiv>
        <select value={selectedKey} onChange={handleSelectChange}>
          {optionSubject.map((option) => (
            <option key={option.key} value={option.key}>
              {option.siDo}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => {
            setGu(e.target.value);
          }}
        >
          {selectedOption?.guGun.map((gu) => (
            <option key={gu} value={gu}>
              {gu}
            </option>
          ))}
        </select>
      </SelectBoxDiv>
    </MobileLayaout>
  );
};
export default SelectLocation;
const SelectBoxDiv = styled.div`
  display: flex;
  select {
    width: 200px;
    height: 28px;
    margin-right: 10px;
    padding-left: 10px;
    ${media.mobile} {
      width: 160px;
    }
  }
`;
const Query = styled.div`
  ${media.mobile} {
    width: 100%;
  }
`;
const MobileLayaout = styled.div`
  display: flex;
  ${media.mobile} {
    width: 330px;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
