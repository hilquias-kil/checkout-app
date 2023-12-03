export function ErrorMessage(props: { message: string }) {
  return <div className="text-xs text-red-600 mt-1">{props.message}</div>;
}
