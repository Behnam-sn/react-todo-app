import { useParams } from "react-router-dom";

export function Board() {
  let params = useParams();
  // let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return <div>Board: {params.boardId}</div>;
}
