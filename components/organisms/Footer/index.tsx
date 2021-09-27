import Image from 'next/image';

import FooterItem from '../../molecules/FooterItem';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/#" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} quality="100" alt="" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati.
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem
                  title="Company"
                  subtitle={[
                    { subtitle: 'About Us', href: 'about-us' },
                    { subtitle: 'Press Release', href: 'press-release' },
                    { subtitle: 'Terms of Use', href: 'terms-of-use' },
                    { subtitle: 'Privacy & Policy ', href: 'privacy-policy' },
                  ]}
                />
                <FooterItem
                  title="Support"
                  subtitle={[
                    { subtitle: 'Refund Policy', href: 'refund-policy' },
                    { subtitle: 'Unlock Rewards', href: 'unlock-rewards' },
                    { subtitle: 'Live Chatting', href: 'live-chatting' },
                  ]}
                />
                <FooterItem
                  title="Connect"
                  subtitle={[
                    { subtitle: 'hi@store.gg' },
                    { subtitle: 'team@store.gg' },
                    { subtitle: 'Pasific 12, Jakarta Selatan' },
                    { subtitle: '021 - 1122 - 9090' },
                  ]}
                  marginTopMd
                  marginTop25
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
