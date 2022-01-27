import { Footer } from '@/UI/navigation/Footer/Footer';
import { Header, HeaderProps } from '@/UI/navigation/Header/Header';
import { FixedFooterLayout } from '@/UI/base/layout/FixedFooterLayout/FixedFooterLayout';
import { MainContentLayout } from '@/UI/base/layout/MainContentLayout/MainContentLayout';
import { RenderSections } from '@/UI/base/app/RenderSections/RenderSections';
import { Metadata } from '@/UI/base/app/Metadata/Metadata';
import { Home as rawHomeProps, GlobalMetadata } from '@/UI/types/sanity-schema';
import { ExampleSectionProps } from '@/UI/content/ExampleSection/ExampleSection';

export interface HomeProps extends rawHomeProps {
  sections: [ExampleSectionProps];
}

export const Home = ({
  page,
  globals,
}: {
  page: HomeProps;
  globals: { header: HeaderProps; metadata: GlobalMetadata };
}) => {
  // Globals props
  const { header, metadata } = globals;

  // Page props
  const { sections } = page;

  return (
    <>
      <Metadata page={page} globalMetadata={metadata} />

      <FixedFooterLayout>
        {header && (
          <Header logo={header?.logo} navigation={header?.navigation} />
        )}

        <MainContentLayout as="main">
          {sections && <RenderSections sections={sections} />}
        </MainContentLayout>

        <Footer />
      </FixedFooterLayout>
    </>
  );
};
