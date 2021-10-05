import OverviewContent from '../../components/organisms/OverviewContent';
import SideBar from '../../components/organisms/SideBar';

export default function Member() {
  return (
    <section className="overview overflow-auto vh-100">
      <SideBar />
      <OverviewContent />
    </section>
  );
}
