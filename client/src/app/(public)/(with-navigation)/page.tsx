import NextLink from 'next/link';

import { Card, CardContent, CardHeader } from '@/components/card';
import { apiClient } from '@/lib/api-client';

export default async function Home() {
  const result = await apiClient.get('/');
  console.log({ result });

  return (
    <section className="w-3/4 flex-1 py-6">
      <ul className="flex flex-col gap-4 px-4">
        <li>
          <NextLink href="/articles/1">
            <Card variant="outline">
              <CardHeader title="Title-1" supplement="2023/01/30" />
              <CardContent>Hello!</CardContent>
            </Card>
          </NextLink>
        </li>
        <li>
          <NextLink href="/articles/2">
            <Card variant="outline">
              <CardHeader title="Title-2" supplement="2023/11/04" />
              <CardContent>Sorry!</CardContent>
            </Card>
          </NextLink>
        </li>
        <li>
          <NextLink href="/articles/3">
            <Card variant="outline">
              <CardHeader title="Title-3" supplement="2023/11/22" />
              <CardContent>Common!</CardContent>
            </Card>
          </NextLink>
        </li>
        <li>
          <NextLink href="/articles/4">
            <Card variant="outline">
              <CardHeader title="Title-4" supplement="2024/12/10" />
              <CardContent>Hey!</CardContent>
            </Card>
          </NextLink>
        </li>
      </ul>
    </section>
  );
}
