interface Props {
  format: "PDF" | "EXCEL";
}

export function ExportButton({ format }: Props) {
  return (
    <button>
      Export {format}
    </button>
  );
}