export default function Button({ title }) {
  return (
    <button className="outline-none flex gap-2  px-3 py-2 text-white rounded bg-gray-900 items-center">
      <p className="text-sm font-normal">{title}</p>
    </button>
  );
}
