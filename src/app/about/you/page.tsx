export default function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[]>;
}) {
  return (
    <>
      <h1>you page</h1>
      <pre>{JSON.stringify(searchParams, null, 2)}</pre>
    </>
  );
}
