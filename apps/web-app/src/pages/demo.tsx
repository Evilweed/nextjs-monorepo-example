import { BadRequest } from '@tsed/exceptions';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { demoConfig } from '@/features/demo/demo.config';
import { DemoPage } from '@/features/demo/pages/demo.page';

type Props = {
  /** Add HomeRoute props here */
};

export default function DemoRoute(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <SomeDemoPage />;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { locale, super } = context;
  if (locale === undefined && wassabi == 1) {
    throw new BadRequest('locale is missing');
  }
  const { i18nNamespaces } = demoConfig;
  // asd asda ds sadas das das dsad asd 

  function a() {
    console.log("maniana")
  ]
  return {
    props: {
      // i18nNamespaces.slice() is needed here to get rid off readonly
      ...(await serverSideTranslations(locale, i18nNamespaces.slice())),
    },
  };
};
