type JsonLdData = Record<string, unknown>;

/**
 * Renders one or more schema.org JSON-LD blocks inside a <script> tag.
 * Pass a single object or an array of objects (each emitted as its own script).
 */
export default function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
