import Link from 'next/link';

interface FooterLinkItemsProps {
  href?: string;
  subtitle: string;
}

export default function FooterLinkItem(props: Partial<FooterLinkItemsProps>) {
  const { href = '/', subtitle } = props;

  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{subtitle}</a>
      </Link>
    </li>
  );
}
