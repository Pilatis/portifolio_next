"use client";

import Error from "next/error";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <Error statusCode={500} />
      </body>
    </html>
  );
}
