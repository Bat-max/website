import SimpleBar from "simplebar-react";
import { Container, StrapiImage, MainHeading } from "../../";
import {
  SectionImage,
  Wrapper,
  Lead,
  SplitSectionWrapper,
  SplitSectionColumn,
} from "./styles";
import { RegularList } from "../";

const SplitSection = ({ sections }) => {
  return (
    <SplitSectionWrapper>
      {sections.map(({ heading, id, img, list, lead }) => {
        return (
          <SplitSectionColumn type="inner" key={`${heading}${id}`}>
            <Wrapper>
              <SimpleBar style={{ maxHeight: "100%" }}>
                <MainHeading>{heading}</MainHeading>
                {lead && <Lead>{lead}</Lead>}
                <RegularList data={list} />
              </SimpleBar>
            </Wrapper>
            <SectionImage>
              <StrapiImage
                src={img}
                height={400}
                width={400}
                objectFit="cover"
              />
            </SectionImage>
          </SplitSectionColumn>
        );
      })}
    </SplitSectionWrapper>
  );
};

export default SplitSection;
