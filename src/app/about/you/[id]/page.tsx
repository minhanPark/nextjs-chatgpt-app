export default function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: Record<string, string | string[]>;
}) {
  return (
    <main>
      <h1>you detail</h1>
      <h2>Params</h2>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <h2>Search Params</h2>
      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
    </main>
  );
}
