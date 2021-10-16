import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  icon:
    | 'icon-menu-overview'
    | 'icon-menu-transactions'
    | 'icon-menu-messages'
    | 'icon-menu-card'
    | 'icon-menu-rewards'
    | 'icon-menu-settings'
    | 'icon-menu-logout';
  active?: boolean;
  href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href } = props;
  const className = cx('item', 'mb-30', {
    active,
  });

  return (
    <div className={className}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width="25" height="25" alt="" />
      </div>
      <p className="item-title m-0">
        <Link href={href!}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
