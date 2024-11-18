export enum EMode {
  EASY,
  MEDIUM,
  HARD,
}

export const checkEqualPuzzle = (
  puzzle1: readonly number[],
  puzzle2: number[]
) => {
  for (let i = 0; i < puzzle1.length; i++) {
    if (puzzle1[i] !== puzzle2[i]) return false;
  }
  return true;
};

export const finishPuzzle = {
  [EMode.EASY]: [0, 1, 2, 3],
  [EMode.MEDIUM]: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [EMode.HARD]: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
};

export const randomPuzzle = {
  [EMode.EASY]: [
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ],
  [EMode.MEDIUM]: [
    [0, 2, 8, 1, 5, 4, 7, 3, 6],
    [0, 6, 5, 2, 7, 8, 4, 1, 3],
    [0, 8, 3, 5, 6, 2, 4, 7, 1],
    [0, 6, 3, 8, 7, 1, 5, 2, 4],
    [0, 8, 1, 5, 3, 4, 6, 7, 2],
    [0, 1, 4, 8, 5, 2, 6, 3, 7],
  ],
  [EMode.HARD]: [
    [0, 5, 2, 3, 8, 4, 1, 7, 9, 10, 6, 11, 12, 13, 14, 15],
    [0, 8, 2, 3, 4, 5, 1, 6, 9, 13, 11, 7, 12, 14, 10, 15],
    [0, 4, 8, 3, 9, 13, 2, 1, 12, 11, 5, 6, 14, 10, 15, 7],
  ],
};

export const modePuzzle = (mode: EMode) => {
  let n;
  switch (mode) {
    case EMode.EASY:
      n = 4;
      break;
    case EMode.MEDIUM:
      n = 9;
      break;
    case EMode.HARD:
      n = 16;
      break;
    default:
      n = 4;
      break;
  }
  return Array.from({ length: n }, (_, index) => index);
};

export interface IPuzzle {
  id: number;
  image: string;
  mode: EMode;
  result: string[];
}

export const puzzleData: IPuzzle[] = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IuKLbFdcgsa3gbxKeZG3Z124Ikm5fAHnbQ&s",
    mode: EMode.EASY,
    result: ["salmon"],
  },
  {
    id: 2,
    image: "https://media.npr.org/assets/img/2015/01/06/bluefin-tuna-2_wide-dc2a25e67b78f6dae1fc1ecd570ee48fc60268a6.jpg?s=1400&c=100&f=jpeg",
    mode: EMode.EASY,
    result: ["tuna"],
  },
  {
    id: 3,
    image: "https://cdn.britannica.com/34/199834-050-ACEB68C7/Carp.jpg",
    mode: EMode.EASY,
    result: ["chep"],
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsliVquN5WKlNuFjiXKFpTdU7xYyaLuF3FQ&s",
    mode: EMode.EASY,
    result: ["sardine"],
  },
  {
    id: 5,
    image: "https://i.ytimg.com/vi/TmwBE8VkATw/maxresdefault.jpg",
    mode: EMode.EASY,
    result: ["angler"],
  },
  {
    id: 6,
    image: "https://www.anglersjournal.com/.image/t_share/MTc0MDMxMjgzMjE3NzY5OTI5/prm-swordfish.jpg",
    mode: EMode.EASY,
    result: ["sword"],
  },
  {
    id: 7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fT0al3Tf-sSXAqnu5eoWevK907RIIDssNA&s",
    mode: EMode.EASY,
    result: ["horse"],
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhglB2IOafi5dazRb_PXa_PH-dbic_EpC8g&s",
    mode: EMode.EASY,
    result: ["moray"],
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkR2Qy-IMmpo20kl0ZUCS53O-DprBmhD0LYQ&s",
    mode: EMode.EASY,
    result: ["angel"],
  },
  {
    id: 10,
    image: "https://marinesanctuary.org/wp-content/uploads/2020/12/IYORBank_Rays_GregoryPiper_01-scaled.jpg",
    mode: EMode.EASY,
    result: ["stingray"],
  },
  {
    id: 11,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CyEutJSEXd6_kM6dr2EfBmHrfAUw19AAAQ&s",
    mode: EMode.EASY,
    result: ["casutu"],
  },
  {
    id: 12,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRpYfpQjdwtGDLi8rXSSqOt4xAfmTHnKpmg&s",
    mode: EMode.EASY,
    result: ["caduaxanh"],
  },
  {
    id: 13,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjX26YFFmPGB5zCUpkKpMiNtjvNQmW13N6w&s",
    mode: EMode.EASY,
    result: ["cahe"],
  },
  {
    id: 14,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOwrUxOntho0YBg9zGH8N6vWNH3bxmr1bHQ&s",
    mode: EMode.EASY,
    result: ["mucnang"],
  },
  {
    id: 15,
    image: "https://d.newsweek.com/en/full/2179402/giant-squid-underwater.jpg?w=1600&h=1200&q=88&f=73acb8018d3ebd349f1107fab69522ca",
    mode: EMode.EASY,
    result: ["muc"],
  },
  {
    id: 16,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Octopus2.jpg/330px-Octopus2.jpg",
    mode: EMode.EASY,
    result: ["bachtuoc"],
  },
  {
    id: 17,
    image: "https://environment.co/wp-content/uploads/sites/4/2024/01/squaddeepfx_photorealistic_image_of_a_blue_whale_mother_and_cal_39128ed5-e129-4267-938e-65217468be14.jpg.webp",
    mode: EMode.EASY,
    result: ["cavoi"],
  },
  {
    id: 18,
    image:"https://i0.wp.com/www.australiangeographic.com.au/wp-content/uploads/2023/01/shutterstock_1373689742-scaled.jpg?fit=2560%2C1696&ssl=1",
    mode: EMode.EASY,
    result: ["heo"],
  },
  {
    id: 19,
    image:"https://ddk.1cdn.vn/2022/06/10/image.daidoanket.vn-images-upload-maictv-06102022-_5.jpg",
    mode: EMode.MEDIUM,
    result: ["haicau"],
  },
  {
    id: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQsc2i5hQc9I_YUf8VI5X1UG9wjNorafE6g&s",
    mode: EMode.MEDIUM,
    result: ["raicabien"],
  },
  {
    id: 21,
    image: "https://i.natgeofe.com/n/523d689d-7f47-4229-81e0-fd482ff5b6d5/00000165-67e1-df80-affd-f7e5b67f0000_4x3.jpg",
    mode: EMode.MEDIUM,
    result: ["saolongvu"],
  },
  {
    id: 22,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4N4he6MtlTUBrq99g0kNFYL_3VKMyMXSQLA&s",
    mode: EMode.MEDIUM,
    result: ["catbien"],
  },
  {
    id: 23,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH93iCGrrUDx-lakpvsy9lmCLdQoi5tYFpAQ&s",
    mode: EMode.MEDIUM,
    result: ["saobien"],
  },
  {
    id: 24,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrpavoYbXHVR9_nvodYhIyWy0LioEKKaU5EH5LepKz6cCNKzV1KyMFCNdAJMuyu4OKt4&usqp=CAU",
    mode: EMode.MEDIUM,
    result: ["nhimbien"],
  },
  {
    id: 25,
    image: "https://cdn.mos.cms.futurecdn.net/Nu6AK8q4Pwj8yVsAseRedM-1200-80.jpg",
    mode: EMode.MEDIUM,
    result: ["queen"],
  },
  {
    id: 26,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLap3AzV0l6wqu1-g9o5fl1YMDTsYASvo4OQ&s",
    mode: EMode.MEDIUM,
    result: ["cuavua"],
  },
  {
    id: 27,
    image: "https://cdn.britannica.com/60/2160-004-84D8645D/Spiny-lobster.jpg",
    mode: EMode.MEDIUM,
    result: ["tomhum"],
  },
  {
    id: 28,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XL1OBnJ8i1PdLeIIrBUW1qoD5EaJvCCprw&s",
    mode: EMode.MEDIUM,
    result: ["cuaansi"],
  },
  {
    id: 29,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHFV_HItIK-yW-0tThh5Y0_azX-qAyc6WTUw&s",
    mode: EMode.MEDIUM,
    result: ["tomcang"],
  },
  {
    id: 30,
    image: "https://i.ytimg.com/vi/St6yHwKKesQ/maxresdefault.jpg",
    mode: EMode.MEDIUM,
    result: ["tom"],
  },
  {
    id: 31,
    image:"https://qph.cf2.quoracdn.net/main-qimg-3ed910f96a4dabc459f6d59e089b8cf0.webp",
    mode: EMode.MEDIUM,
    result: ["ocbien"],
  },
  {
    id: 32,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Gjzh7c76E6-WOl5sIhY0_5uXX5VFHTrFTA&s",
    mode: EMode.MEDIUM,
    result: ["ngao"],
  },
  {
    id: 33,
    image: "https://c8.alamy.com/comp/AB4B5H/closeup-open-living-queen-scallop-aequipecten-opercularis-underwater-AB4B5H.jpg",
    mode: EMode.MEDIUM,
    result: ["sodiep"],
  },
  {
    id: 34,
    image: "https://image.tienphong.vn/460x306/Uploaded/2024/ymnjs/2016_03_21/u_CZKN.jpg",
    mode: EMode.MEDIUM,
    result: ["ocanhvu"],
  },
  {
    id: 35,
    image: "https://d.newsweek.com/en/full/2322301/sea-snake.webp?w=790&f=7711f47a671b13479e708bbe4ecc52b4",
    mode: EMode.MEDIUM,
    result: ["ranbien"],
  },
  {
    id: 36,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVvArjsNjtzqLZBZJZhxCtwwUOB-sAuCqfg&s",
    mode: EMode.MEDIUM,
    result: ["hawsbill"],
  },
  {
    id: 37,
    image:"https://www.earthandanimals.com/files/547756/catitems/Loggerhead_Sea_Turtle-d1d20e539024a00f6d888ce589c4bd0d.jpg",
    mode: EMode.MEDIUM,
    result: ["log"],
  },
  {
    id: 38,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmbK3FFa81z7zDW0ecxdC5OsR_mRsTG7FAw&s",
    mode: EMode.MEDIUM,
    result: ["ruada"],
  },
  {
    id: 39,
    image: "https://vcdn1-vnexpress.vnecdn.net/2021/04/09/VNE-Turtle-6555-1617940301.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=4qtOYCQkd-81K365nZU8FA",
    mode: EMode.MEDIUM,
    result: ["ruabien"],
  },
  {
    id: 40,
    image: "https://e.khoahoc.tv/photos/image/2019/08/15/ca-map-bua.jpg",
    mode: EMode.HARD,
    result: ["daubua"],
  },
  {
    id: 41,
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2021/01/11/16/istock-1219251623.jpg?quality=75&width=1250&crop=3%3A2%2Csmart&auto=webp",
    mode: EMode.HARD,
    result: ["ho"],
  },
  {
    id: 42,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9UxtxSmqyQse8g7J6TispRHQOQfmRjxl_g&s",
    mode: EMode.HARD,
    result: ["mako"],
  },
  {
    id: 43,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUeL6zhXK-2DDPpDZx_lwloXVjY7b9-P93Q&s",
    mode: EMode.HARD,
    result: ["voi"],
  },
  {
    id: 44,
    image:"https://tepbac.com/upload/news/ge_image/2022/11/cm-trang_1669091827.jpg",
    mode: EMode.HARD,
    result: ["camaptrang"],
  },
  {
    id: 45,
    image:"https://truespiritanimal.com/wp-content/uploads/2023/12/narwhal-symbolism-and-meaning-3eb7b5ea.webp",
    mode: EMode.HARD,
    result: ["narwhal"],
  },
  {
    id: 45,
    image:"https://s3.eu-west-1.amazonaws.com/media.mcsuk.org/images/RS34129_jelly2_scotland-lpr.width-765.jpg",
    mode: EMode.HARD,
    result: ["sua"],
  },
];
