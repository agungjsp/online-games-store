import Footer from './Footer';
import Profile from './Profile';
import MenuItem from './MenuItem';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function SideBar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            href="/member"
            title="Overview"
            icon="icon-menu-overview"
            active={activeMenu === 'overview'}
          />
          <MenuItem
            href="/member/transactions"
            title="Transactions"
            icon="icon-menu-transactions"
            active={activeMenu === 'transactions'}
          />
          <MenuItem href="/member" title="Messages" icon="icon-menu-messages" />
          <MenuItem href="/member" title="Card" icon="icon-menu-card" />
          <MenuItem href="/member" title="Rewards" icon="icon-menu-rewards" />
          <MenuItem
            href="/member/edit-profile"
            title="Settings"
            icon="icon-menu-settings"
            active={activeMenu === 'settings'}
          />
          <MenuItem href="/sign-in" title="Log Out" icon="icon-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
