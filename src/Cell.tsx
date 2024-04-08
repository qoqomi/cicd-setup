interface CellProps {
  title: string;
}
export const Cell = ({ title }: CellProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
