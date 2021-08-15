export default function PoweredByBadge({ languages }: { languages: string }) {
  return (
    <div className="flex items-center justify-between w-auto h-auto p-4 bg-green-dark">
      <p className="ml-2 text-base text-white font-ubuntu">{languages}</p>
    </div>
  );
}
