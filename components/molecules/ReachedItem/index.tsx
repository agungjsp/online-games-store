import cx from 'classnames';

interface ReachedItemsProps {
  numberTitle: string;
  desc: string;
  marginStartLg?: boolean;
}

export default function ReachedItem(props: Partial<ReachedItemsProps>) {
  const { numberTitle, desc, marginStartLg } = props;
  const className = cx({
    'me-lg-35': true,
    'ms-lg-35': marginStartLg,
  });

  return (
    <div className={className}>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{numberTitle}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc}</p>
    </div>
  );
}
