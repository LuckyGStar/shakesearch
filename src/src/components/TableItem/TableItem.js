import "./TableItem.css";

export const TableItem = ({ post }) => {

  return (
    <tr className="table__body--row"><p>{post}</p></tr>
  )

}
