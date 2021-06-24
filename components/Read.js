import { useState } from 'react';
import Image from 'next/image';
import TruncateMarkup from 'react-truncate-markup';

export default function Read({ data }) {
  const [sorting, setSorting] = useState('finished');

  return (
    <section className="flex flex-col mt-4">
      <h1 className="mb-6 text-2xl font-semibold">Telah dibaca</h1>
      <div className="grid gap-5 grid-cols-3">
        {data
          ?.sort((a, b) => {
            if (sorting === 'finished') {
              return new Date(b.Date).getTime() - new Date(a.Date).getTime();
            }
            return b.Date - a.Date;
          })
          .map(
            ({
              Cover: image,
              Name: title,
              Author: author,
              Rating: rating,
              id,
            }) => {
              return (
                <div
                  key={id}
                  className="flex p-5 bg-yellow-100 rounded-2xl space-x-4"
                >
                  <figure className="flex-2">
                    <Image
                      src={image[0].url}
                      width={400 / 4}
                      height={600 / 4}
                      className="rounded-lg object-cover"
                    />
                  </figure>

                  <dl className="flex flex-1 flex-col justify-between">
                    <dd>
                      <TruncateMarkup lines={2}>
                        <dt className="text-md mb-1 font-medium">{title}</dt>
                      </TruncateMarkup>
                      <TruncateMarkup lines={2}>
                        <dt className="mb-4 text-gray-500 text-sm">{author}</dt>
                      </TruncateMarkup>
                    </dd>
                    <dt>{rating}</dt>
                  </dl>
                </div>
              );
            }
          )}
      </div>
    </section>
  );
}
