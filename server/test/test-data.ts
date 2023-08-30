export const testData = {
  articles: [
    {
      id: '41028142-5e87-b22a-f1ba-44c34f0e9e95',
      title: '日本について',
      content:
        '日本国（にほんこく、にっぽんこく、英: Japan）、または日本（にほん、にっぽん）は、東アジアに位置する民主制国家[1]。首都は東京都[注釈 2][2][3]。\n全長3500キロメートル以上にわたる国土は、主に日本列島[注釈 6]および南西諸島・伊豆諸島・小笠原諸島などの弧状列島により構成される[3][4]。大部分が温帯に属するが、北部や島嶼部では亜寒帯や熱帯の地域がある[5][6]。地形は起伏に富み、火山地・丘陵を含む山地の面積は国土の約75%を占め[6]、人口は沿岸の平野部に集中している。国内には行政区分として47の都道府県があり、日本人（大和民族・琉球民族・アイヌ民族[注釈 7]・外国系諸民族）と外国人が居住し、日本語を通用する[2][3]。',
      categoryId: '9ba5d2e4-a54e-91f8-a7b8-ec4f6e6dcd24',
      userId: '12057ecf-a745-5b73-ba41-c14b2b75462f',
      createdAt: new Date('2023-08-03'),
      updatedAt: new Date('2023-08-03'),
    },
  ],
  articleTags: [
    {
      id: 'ade59d69-8d57-ff4c-3966-2df386f559c2',
      tagId: 'b559be86-2f2b-7242-78b1-d20c3e61b15f',
      articleId: '41028142-5e87-b22a-f1ba-44c34f0e9e95',
      tag: {
        id: 'b559be86-2f2b-7242-78b1-d20c3e61b15f',
        name: 'Japan',
        createdAt: new Date('2023-08-03'),
        updatedAt: new Date('2023-08-03'),
      },
      article: {
        id: '41028142-5e87-b22a-f1ba-44c34f0e9e95',
        title: '日本について',
        content:
          '日本国（にほんこく、にっぽんこく、英: Japan）、または日本（にほん、にっぽん）は、東アジアに位置する民主制国家[1]。首都は東京都[注釈 2][2][3]。\n全長3500キロメートル以上にわたる国土は、主に日本列島[注釈 6]および南西諸島・伊豆諸島・小笠原諸島などの弧状列島により構成される[3][4]。大部分が温帯に属するが、北部や島嶼部では亜寒帯や熱帯の地域がある[5][6]。地形は起伏に富み、火山地・丘陵を含む山地の面積は国土の約75%を占め[6]、人口は沿岸の平野部に集中している。国内には行政区分として47の都道府県があり、日本人（大和民族・琉球民族・アイヌ民族[注釈 7]・外国系諸民族）と外国人が居住し、日本語を通用する[2][3]。',
        categoryId: '9ba5d2e4-a54e-91f8-a7b8-ec4f6e6dcd24',
        userId: '12057ecf-a745-5b73-ba41-c14b2b75462f',
        createdAt: new Date('2023-08-03'),
        updatedAt: new Date('2023-08-03'),
      },
      createdAt: new Date('2023-08-03'),
      updatedAt: new Date('2023-08-03'),
    },
  ],
  categories: [
    {
      id: '9ba5d2e4-a54e-91f8-a7b8-ec4f6e6dcd24',
      name: '暮らし',
      createdAt: new Date('2023-08-03'),
      updatedAt: new Date('2023-08-03'),
    },
    {
      id: '6f80405a-552d-9bd0-0251-a4f7acbb893a',
      name: '仕事',
      createdAt: new Date('2023-08-03'),
      updatedAt: new Date('2023-08-03'),
    },
    {
      id: '2acc8164-933b-3475-c5b7-b2f713992070',
      name: '学び',
      createdAt: new Date('2023-08-03'),
      updatedAt: new Date('2023-08-03'),
    },
    {
      id: '6d8011d2-3356-075d-0325-14597d6d4d5c',
      name: '恋愛',
      createdAt: new Date('2023-08-03'),
      updatedAt: new Date('2023-08-03'),
    },
    {
      id: 'af3a81e0-3c36-f5aa-8a5c-1ca815ebda96',
      name: 'テクノロジー',
      createdAt: new Date('2023-08-03'),
      updatedAt: new Date('2023-08-03'),
    },
  ],
  comments: [
    {
      id: '9a4576c6-f632-726f-fde2-c5a7efc74d44',
      content: 'とても良い記事ですね！',
      articleId: '41028142-5e87-b22a-f1ba-44c34f0e9e95',
      userId: 'b8d323e6-7f89-7616-5390-267493695bd1',
    },
  ],
  draftArticles: [
    {
      id: '2e5e0339-e4ca-468b-21fc-79cdf8e72a77',
      title: '（仮）アメリカについて',
      content:
        'アメリカ合衆国（アメリカがっしゅうこく、英語: United States of America）は、北アメリカに位置し、大西洋および太平洋に面する連邦共和制国家。首都はコロンビア特別区（ワシントンD.C.）。\nアメリカ合衆国（United States of America）の頭文字を取って「U.S.A.」もしくは「USA」、合衆国（United States）の頭文字を取って「U.S.」もしくは「US」、または単にアメリカ（America）とも称される。\n日本語においては、アメリカの漢字音訳から亜米利加、米国（べいこく）または単に米（べい）とも称される。日本語の口語や通称としては「アメリカ」と言われる場合は後述の本土（48州）のみを示し、アラスカ州やハワイ州などを含まない[注釈 2]。',
      categoryId: '6f80405a-552d-9bd0-0251-a4f7acbb893a',
      userId: '12057ecf-a745-5b73-ba41-c14b2b75462f',
    },
  ],
  draftArticleTags: [
    {
      id: '88777fbc-bb18-a1ce-3e68-dede8566df08',
      tagId: 'ffe386d6-2f9b-8f25-224a-278e7068a86c',
      draftArticleId: '2e5e0339-e4ca-468b-21fc-79cdf8e72a77',
      createdAt: new Date('2023-08-03'),
      updatedAt: new Date('2023-08-03'),
    },
  ],
  favorites: [
    {
      id: 'e1f3b699-b852-1860-07b4-45b2d6030b50',
      articleId: '41028142-5e87-b22a-f1ba-44c34f0e9e95',
      userId: 'b8d323e6-7f89-7616-5390-267493695bd1',
    },
  ],
  tags: [
    {
      id: 'b559be86-2f2b-7242-78b1-d20c3e61b15f',
      name: 'Japan',
      createdAt: new Date('2023-08-03'),
      updatedAt: new Date('2023-08-03'),
    },
    {
      id: 'ffe386d6-2f9b-8f25-224a-278e7068a86c',
      name: 'America',
      createdAt: new Date('2023-08-03'),
      updatedAt: new Date('2023-08-03'),
    },
  ],
  users: [
    {
      id: '12057ecf-a745-5b73-ba41-c14b2b75462f',
      email: 'user1@example.com',
      name: 'test-user-1',
      avatar: '',
      password: 'password',
    },
    {
      id: 'b8d323e6-7f89-7616-5390-267493695bd1',
      email: 'user2@example.com',
      name: 'test-user-2',
      avatar: '',
      password: 'password',
    },
  ],
};
