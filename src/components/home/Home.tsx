import react from "react"

import * as S from "./styles";

export const Home = () => {
    return (
      <S.Parent>
        <S.Text>
          <S.TextItemHello>Hello...</S.TextItemHello>
          <S.TextItemIam>I'm Judith Iwuchukwu</S.TextItemIam>
          <S.TextItemOccupation>A Web Developer</S.TextItemOccupation>
          <S.TextItemIamDescription>I'm a creative Software Engineer based in Lagos Nigeria and I'm very <br></br> passionate and dedicated to my work.</S.TextItemIamDescription>
          <S.DownloadCv>
            <S.DownloadCvItem to="">Download CV</S.DownloadCvItem>
          </S.DownloadCv>
        </S.Text>
        <S.Image></S.Image>
      </S.Parent>
    );
};