import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>Twitter</title>
      <meta name='og:title' content='ReptiGram' />
      <link rel='icon' href='assets/twitter-avatar.jpg' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
      <meta name='ReptiGram:site' content='@reptigram' />
      <meta name='ReptiGram:card' content='Reptile enthusiast community' />
    </Head>
  );
}
