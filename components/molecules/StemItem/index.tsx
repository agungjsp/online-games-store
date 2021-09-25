import Image from 'next/image';

interface StepItemProps {
  icon: 'step1' | 'step2' | 'step3';
  title: string;
  desc: string;
}

export default function StemItem(props: StepItemProps) {
  const { icon, title, desc } = props;

  return (
    <div className="col-lg-4 text-center">
      <div className="card feature-card border-0">
        <div className="mb-30">
          <Image src={`/icon/${icon}.svg`} width="80" height="80" alt="Icon Step" />
        </div>
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        {desc.split('\n').map((str) => (
          <p className="text-lg color-palette-1 mb-0" key={str}>
            {str}
          </p>
        ))}
      </div>
    </div>
  );
}
