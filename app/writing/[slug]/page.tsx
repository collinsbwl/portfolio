export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-xl font-bold">{slug}</h1>
    </div>
  );
}
