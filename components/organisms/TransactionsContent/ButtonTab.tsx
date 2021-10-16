import cx from 'classnames';

interface ButtonTabProps {
  title: string;
  filter: string;
  active?: boolean;
}

export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { title, filter, active } = props;
  const btnClass = cx('btn btn-status rounded-pill text-sm me-3', { 'btn-active': active });

  return (
    <a data-filter={filter} href="/#" className={btnClass}>
      {title}
    </a>
  );
}
