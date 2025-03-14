// import { CustomIcon } from '@components/ui/custom-icon';
import { SEO } from './seo';
import { NextImage } from '@components/ui/next-image';

export function Placeholder(): JSX.Element {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <SEO
        title='Twitter'
        description='From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
        image='/home.png'
      />
      <i>
        {/* <CustomIcon
          className='h-20 w-20 text-[#1DA1F2]'
          iconName='GoogleIcon'
        /> */}
                      <NextImage
                src='/assets/twitter-avatar.jpg'
                alt='ReptiGram Image'
                width={150}
                height={150}
                className='-mt-4 h-6 w-6 text-accent-blue dark:'
                priority
              />
      </i>
    </main>
  );
}
