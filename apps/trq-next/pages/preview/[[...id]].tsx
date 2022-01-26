import Custom404 from 'pages/404';
import { useRouter } from 'next/router';

import { Page, PageProps } from '@/UI/pages/Page/Page';
import { Home, HomeProps } from '@/UI/pages/Home/Home';
import { Loading } from '@/UI/base/app/Loading/Loading';
import {
  previewAnyPageByIdQuery,
  pageIdsQuery,
} from '@/UI/pages/Page/Page.queries';
import { globalsQuery } from '@/TRQ/sanity-api/queries';
import { usePreviewSubscription } from '@/UTILS/sanity-api/sanity-utils';
import {
  getClient,
  overlayDrafts,
  sanityClient,
} from '@/UTILS/sanity-api/sanity.server';
import { GlobalMetadata } from '@/UI/types/sanity-schema';
import { HeaderProps } from '@/UI/navigation/Header/Header';

type PageBySlugProps = {
  data: {
    page: PageProps | HomeProps;
    globals: { header: HeaderProps; metadata: GlobalMetadata };
  };
  preview: boolean;
};

export default function PageBySlug({ data, preview = false }: PageBySlugProps) {
  const router = useRouter();
  const { isFallback } = router;

  const {
    data: { page },
  } = usePreviewSubscription(previewAnyPageByIdQuery, {
    params: { id: data?.page?._id },
    initialData: data,
    // enabled: preview && slug,
  });

  if (data.page === null) {
    return <Custom404 />;
  }

  return (
    <>
      {isFallback && <Loading />}

      {!isFallback && data?.page?._type === 'Page' && (
        <Page page={data?.page} globals={data?.globals} />
      )}

      {!isFallback && data?.page?._type === 'Home' && (
        <Home page={data?.page} globals={data?.globals} />
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = [];

  const pages = (await sanityClient.fetch(pageIdsQuery)) as [
    PageProps | HomeProps
  ];

  for (const page of pages) {
    const id = page?._id;

    paths.push({
      params: { id: [page?._id] },
    });
  }

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
  preview = false,
}: {
  params: { id: string[] };
  preview: boolean;
}) => {
  const globals: GlobalMetadata = await getClient(preview).fetch(globalsQuery);

  // const { sanityQuery, queryParams } = selectSanityQuery(params?.slug);

  const page = overlayDrafts(
    await getClient(preview).fetch(previewAnyPageByIdQuery, {
      id: params?.id[0],
    })
  );

  return {
    props: {
      data: { page: (page[0] as PageProps | HomeProps) || null, globals },
      preview,
    },
    revalidate: 60,
  };
};