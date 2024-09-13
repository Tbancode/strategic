// StatementTruncate.tsx

interface StatementTruncateProps {
  text: string;
  maxLength: number;
}

const StatementTruncate: React.FC<StatementTruncateProps> = ({
  text,
  maxLength,
}) => {
  const truncatedText =
    text?.length > maxLength ? `${text?.slice(0, maxLength)}...` : text;

  return <span>{truncatedText}</span>;
};

export default StatementTruncate;
