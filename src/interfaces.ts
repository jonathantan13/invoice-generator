export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
}

export interface Item {
  id: string;
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  onRemoveItem?: (id: string) => void;
  input?: React.ReactElement;
}

export interface ItemsListProps {
  itemsObj: Item[];
  onRemoveItem: (id: string) => void;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export interface InputComponent<T extends string | number> {
  length: string;
  label: string;
  type: string;
  input: T;
  onChange: (value: T) => void;
}

export interface InvoiceProps {
  params: Promise<{ invoiceId: string }>;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: string;
  updateItem: (id: string, field: string, value: string | number) => void;
}
