interface TableRowProps {
  title: string;
  category: string;
  item: number;
  price: number;
  status: string;
  image: string;
}

export default function TableRow(props: TableRowProps) {
  const { title, category, item, price, status, image } = props;
  let statusBadge;

  switch (status) {
    case 'Pending':
      statusBadge = 'pending';
      break;
    case 'Success':
      statusBadge = 'success';
      break;
    case 'Failed':
      statusBadge = 'failed';
      break;
    default:
      break;
  }

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={`float-start icon-status ${statusBadge}`}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
        </div>
      </td>
    </tr>
  );
}
