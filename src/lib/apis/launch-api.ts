export async function getAll() {
  const res = await fetch(
    `https://lldev.thespacedevs.com/2.2.0/launch?mode=list`,
  );
  return await res.json();
}
