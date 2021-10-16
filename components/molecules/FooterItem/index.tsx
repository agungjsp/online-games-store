import cx from 'classnames';

import FooterLinkItem from './FooterLinkItem';

interface SubtitleItemsProps {
  subtitle: string;
  href?: string;
}

interface FooterItemsProps {
  title: string;
  subtitle: SubtitleItemsProps[];
  marginTopMd?: boolean;
  marginTop25?: boolean;
}

export default function FooterItem(props: Partial<FooterItemsProps>) {
  const { title, subtitle, marginTopMd, marginTop25 } = props;
  const className = cx('col-md-4', 'col-6', 'mb-lg-0', 'mb-25', {
    'mt-md-0': marginTopMd,
    'mt-25': marginTop25,
  });

  return (
    <div className={className}>
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {subtitle?.map((item) => (
          <FooterLinkItem subtitle={item.subtitle} href={item.href} key={item.subtitle} />
        ))}
      </ul>
    </div>
  );
}
