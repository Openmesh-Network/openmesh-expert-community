export default function Head() {
  return (
    <>
      <title>Openmesh Community</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Openmesh Community" />
      <link rel="icon" href={`${process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD" ? process.env.NEXT_PUBLIC_BASE_PATH : ""}/images/openmesh.svg`} />
    </>
  );
}
