import cx from 'classnames';
import Image from 'next/image';

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
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active } = props;
  const className = cx('item', 'mb-30', {
    active,
  });

  return (
    <div className={className}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width="25" height="25" alt="" />
      </div>
      <p className="item-title m-0">
        <a href="/#" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
