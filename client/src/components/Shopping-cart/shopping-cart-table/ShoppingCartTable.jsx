import TableHead from "./table-head/TableHead";
import TableBody from "./table-body/TableBody";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-cont-table">
      <table>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default ShoppingCartTable;
