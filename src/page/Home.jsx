import {
  Helmet,
  Wrapper,
  Section,
  PageOuter,
  Introduce,
  Refer,
  SubTitle,
  Product,
  Advance,
  Type,
  Collection,
  Safety,
  data,
  Grid,
} from "../common";
const Home = () => {
  const titleTwo = {
    content: "your choose.",
    check: false,
  };
  const titleThurs = {
    content: "our partners.",
    check: true,
  };
  const eight = {
    content: "safety",
    check: true,
    type: "black",
  };
  return (
    <Helmet title="Trang chủ">
      <PageOuter>
        <Wrapper title="main">
          <Section title="section1">
            <Introduce />
          </Section>
          <Section title="section2">
            <SubTitle data={titleTwo} />
          </Section>
          <Section title="section3">
            <Refer>
              <Grid col={3} mdCol={2} smCol={1} gap={0}>
                {data.map((item) => {
                  return <Product key={item.id} data={item} />;
                })}
              </Grid>
            </Refer>
          </Section>
          <Section title="section4">
            <Advance />
          </Section>
          <Section title="section5">
            <SubTitle data={titleThurs} />
          </Section>
          <Section title="section6">
            <Type />
          </Section>
          <Section title="section7">
            <Collection />
          </Section>
          <Section title="section8">
            <SubTitle data={eight} />
          </Section>
          <Section title="section9">
            <Safety />
          </Section>
        </Wrapper>
      </PageOuter>
    </Helmet>
  );
};

export default Home;
