import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPortfolio from '../public/images/contents/youtube-how-to-build-portfolio.jpg'
import thumbHowToUseInkdrop from '../public/images/contents/youtube-how-to-use-inkdrop.jpg'
// import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
// import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
// import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
// import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
// import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
// import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'
import thumbNeovimJosean from '../public/images/contents/youtube-neovim-josean.jpg'
import thumbNeovimDevas from '../public/images/contents/youtube-neovim-devas.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h2" fontSize={16} mb={10} mt={8} textAlign="center">
        Daily inspiration lives here. I learn, I grow. Dive in
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to build a portfolio website"
            thumbnail={thumbPortfolio}
            href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
          />
          <GridItem
            title="How to take notes in Markdown efficiently with Inkdrop"
            thumbnail={thumbHowToUseInkdrop}
            href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          />
          <GridItem
            title="How I Set up Neovim To Make It AMAZING in 2024"
            thumbnail={thumbNeovimJosean}
            href="https://www.youtube.com/watch?v=6pAG3BHurdM&t=1601s"
          />
          <GridItem
            title="How to set up Neovim"
            thumbnail={thumbNeovimDevas}
            href="https://www.youtube.com/watch?v=ajmK0ZNcM4Q"
          />
        </SimpleGrid>
      </Section>

      {/* <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo"
            thumbnail={thumb500PaidUsers}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title="I stopped setting a financial goal for my SaaS"
            thumbnail={thumbFinancialGoal}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section> */}

      {/* <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=vj723NlrIQc"
          />
        </SimpleGrid>
      </Section> */}
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
