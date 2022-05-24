import "./Table.css";

import { TableItem } from "../TableItem/TableItem";

export const Table = ({ posts }) => {

  return (
    <div className="container">
      <table className="table">
        <tbody className="table__body">
          {posts && posts.map(post =>
            <TableItem post={post} />
          )}
        </tbody>
      </table>
    </div>
  )

}
