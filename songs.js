/**
 * songs.js
 *
 * The app's songs
 */

window.songs = [
  {
    songId: "SID-1",
    artistId: "AID-1",
    title: "Thriller",
    year: "1982",
    duration: 827,
    url: "https://www.youtube.com/watch?v=sOnqjkJTMaA",
    explicit: false,
    imageUrl: "https://live.staticflickr.com/3048/2994315289_777bfb2c1d_c.jpg"
  },
  {
    songId: "SID-2",
    artistId: "AID-1",
    title: "Billie Jean",
    year: "1982",
    duration: 298,
    url: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y",
    explicit: true,
    imageUrl: "https://live.staticflickr.com/3048/2994315289_777bfb2c1d_c.jpg"
  },
  {
    songId: "SID-3",
    artistId: "AID-1",
    title: "Beat It",
    year: "1982",
    duration: 298,
    url: "https://www.youtube.com/watch?v=oRdxUFDoQe0",
    explicit: false,
    imageUrl: "https://live.staticflickr.com/3048/2994315289_777bfb2c1d_c.jpg"
  },
  {
    songId: "SID-4",
    artistId: "AID-1",
    title: "Dirty Diana",
    year: "1987",
    duration: 305,
    url: "https://youtu.be/yUi_S6YWjZw",
    explicit: false,
    imageUrl: "https://live.staticflickr.com/3048/2994315289_777bfb2c1d_c.jpg"
  },
  {
    songId: "SID-5",
    artistId: "AID-1",
    title: "Smooth Criminal",
    year: "1987",
    duration: 565,
    url: "https://www.youtube.com/watch?v=h_D3VFfhvs4",
    explicit: false,
    imageUrl: "https://live.staticflickr.com/3048/2994315289_777bfb2c1d_c.jpg"
  },
  {
    songId: "SID-6",
    artistId: "AID-1",
    title: "The Way You Make Me Feel",
    year: "1987",
    duration: 403,
    url: "https://www.youtube.com/watch?v=HzZ_urpj4As",
    explicit: false,
    imageUrl: "https://live.staticflickr.com/3048/2994315289_777bfb2c1d_c.jpg"
  },
  {
    songId: "SID-7",
    artistId: "AID-1",
    title: "Chicago",
    year: "2014",
    duration: 247,
    url: "https://youtu.be/Y_8mUx4VOmo",
    explicit: false,
    imageUrl: "https://live.staticflickr.com/3048/2994315289_777bfb2c1d_c.jpg"
  },
  {
    songId: "SID-8",
    artistId: "AID-1",
    title: "Give In to Me",
    year: "1991",
    duration: 330,
    url: "https://youtu.be/LJ7qXHjxj_0",
    explicit: false,
    imageUrl: "https://live.staticflickr.com/3048/2994315289_777bfb2c1d_c.jpg"
  },
  {
    songId: "SID-9",
    artistId: "AID-2",
    title: "Dynamite",
    year: "2020",
    duration: 223,
    url: "https://www.youtube.com/watch?v=gdZLi9oWNZg",
    explicit: false,
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d082a537-9a45-4512-af54-08c87b335298/daytifd-9e09f020-120e-41cc-ae8e-7d224e1f824f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwODJhNTM3LTlhNDUtNDUxMi1hZjU0LTA4Yzg3YjMzNTI5OFwvZGF5dGlmZC05ZTA5ZjAyMC0xMjBlLTQxY2MtYWU4ZS03ZDIyNGUxZjgyNGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.x5RvuPHtGHOeZywBPYS5XnDgsvmpYEBv_j4OOQB5Pe0"
  },
  {
    songId: "SID-10",
    artistId: "AID-2",
    title: "Butter",
    year: "2021",
    duration: 182,
    url: "https://www.youtube.com/watch?v=WMweEpGlu_U",
    explicit: false,
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d082a537-9a45-4512-af54-08c87b335298/daytifd-9e09f020-120e-41cc-ae8e-7d224e1f824f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwODJhNTM3LTlhNDUtNDUxMi1hZjU0LTA4Yzg3YjMzNTI5OFwvZGF5dGlmZC05ZTA5ZjAyMC0xMjBlLTQxY2MtYWU4ZS03ZDIyNGUxZjgyNGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.x5RvuPHtGHOeZywBPYS5XnDgsvmpYEBv_j4OOQB5Pe0"
  },
  {
    songId: "SID-11",
    artistId: "AID-2",
    title: "Fake Love",
    year: "2018",
    duration: 318,
    url: "https://www.youtube.com/watch?v=7C2z4GqqS5E",
    explicit: false,
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d082a537-9a45-4512-af54-08c87b335298/db0uoy9-8db911c6-fae6-4067-8aa2-10fa23e62545.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwODJhNTM3LTlhNDUtNDUxMi1hZjU0LTA4Yzg3YjMzNTI5OFwvZGIwdW95OS04ZGI5MTFjNi1mYWU2LTQwNjctOGFhMi0xMGZhMjNlNjI1NDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.56LJvmVyiiYSOKypqZ5u2JcePeVaRd0wY1z5Bs4pnqM"
  },
  {
    songId: "SID-12",
    artistId: "AID-2",
    title: "Black Swan",
    year: "2020",
    duration: 217,
    url: "https://www.youtube.com/watch?v=0lapF4DQPKQ",
    explicit: false,
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d082a537-9a45-4512-af54-08c87b335298/db0uoy9-8db911c6-fae6-4067-8aa2-10fa23e62545.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwODJhNTM3LTlhNDUtNDUxMi1hZjU0LTA4Yzg3YjMzNTI5OFwvZGIwdW95OS04ZGI5MTFjNi1mYWU2LTQwNjctOGFhMi0xMGZhMjNlNjI1NDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.56LJvmVyiiYSOKypqZ5u2JcePeVaRd0wY1z5Bs4pnqM"
  },
  {
    songId: "SID-13",
    artistId: "AID-2",
    title: "No More Dream",
    year: "2013",
    duration: 289,
    url: "https://youtu.be/rBG5L7UsUxA",
    explicit: false,
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d082a537-9a45-4512-af54-08c87b335298/daytifd-9e09f020-120e-41cc-ae8e-7d224e1f824f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwODJhNTM3LTlhNDUtNDUxMi1hZjU0LTA4Yzg3YjMzNTI5OFwvZGF5dGlmZC05ZTA5ZjAyMC0xMjBlLTQxY2MtYWU4ZS03ZDIyNGUxZjgyNGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.x5RvuPHtGHOeZywBPYS5XnDgsvmpYEBv_j4OOQB5Pe0"
  },
  {
    songId: "SID-14",
    artistId: "AID-2",
    title: "Spring Day",
    year: "2017",
    duration: 328,
    url: "https://www.youtube.com/watch?v=xEeFrLSkMm8",
    explicit: false,
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d082a537-9a45-4512-af54-08c87b335298/daytifd-9e09f020-120e-41cc-ae8e-7d224e1f824f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwODJhNTM3LTlhNDUtNDUxMi1hZjU0LTA4Yzg3YjMzNTI5OFwvZGF5dGlmZC05ZTA5ZjAyMC0xMjBlLTQxY2MtYWU4ZS03ZDIyNGUxZjgyNGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.x5RvuPHtGHOeZywBPYS5XnDgsvmpYEBv_j4OOQB5Pe0"
  },
  {
    songId: "SID-15",
    artistId: "AID-2",
    title: "Blood Sweat & Tears",
    year: "2016",
    duration: 363,
    url: "https://www.youtube.com/watch?v=hmE9f-TEutc",
    explicit: false,
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d082a537-9a45-4512-af54-08c87b335298/db0uoy9-8db911c6-fae6-4067-8aa2-10fa23e62545.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwODJhNTM3LTlhNDUtNDUxMi1hZjU0LTA4Yzg3YjMzNTI5OFwvZGIwdW95OS04ZGI5MTFjNi1mYWU2LTQwNjctOGFhMi0xMGZhMjNlNjI1NDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.56LJvmVyiiYSOKypqZ5u2JcePeVaRd0wY1z5Bs4pnqM"
  },
  {
    songId: "SID-16",
    artistId: "AID-2",
    title: "Fire",
    year: "2016",
    duration: 294,
    url: "https://www.youtube.com/watch?v=ALj5MKjy2BU",
    explicit: false,
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d082a537-9a45-4512-af54-08c87b335298/db0uoy9-8db911c6-fae6-4067-8aa2-10fa23e62545.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QwODJhNTM3LTlhNDUtNDUxMi1hZjU0LTA4Yzg3YjMzNTI5OFwvZGIwdW95OS04ZGI5MTFjNi1mYWU2LTQwNjctOGFhMi0xMGZhMjNlNjI1NDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.56LJvmVyiiYSOKypqZ5u2JcePeVaRd0wY1z5Bs4pnqM"
  },
  {
    songId: "SID-17",
    artistId: "AID-3",
    title: "Love Story",
    year: "2008",
    duration: 236,
    url: "https://www.youtube.com/watch?v=8xg3vE8Ie_E",
    explicit: false,
    imageUrl: "https://live.staticflickr.com/4890/44408595830_12f9b4884c_b.jpg"
  },
  {
    songId: "SID-18",
    artistId: "AID-3",
    title: "Shake It Off",
    year: "2014",
    duration: 272,
    url: "https://www.youtube.com/watch?v=nfWlot6h_JM",
    explicit: true,
    imageUrl: "https://live.staticflickr.com/4890/44408595830_12f9b4884c_b.jpg"
  },
  {
    songId: "SID-19",
    artistId: "AID-3",
    title: "Blank Space",
    year: "2014",
    duration: 272,
    url: "https://www.youtube.com/watch?v=e-ORhEE9VVg",
    explicit: false,
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1906f8e6-3815-4012-b8e7-a9841c33f3e0/dfxz9w3-19355280-af49-4151-8e4e-5055a54e168f.png/v1/fill/w_1280,h_1280,q_80,strp/taylor_swift___midnights_by_alllp_dfxz9w3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzE5MDZmOGU2LTM4MTUtNDAxMi1iOGU3LWE5ODQxYzMzZjNlMFwvZGZ4ejl3My0xOTM1NTI4MC1hZjQ5LTQxNTEtOGU0ZS01MDU1YTU0ZTE2OGYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NWKbMscsSW14BdDSyLFSLsnZF3_ZbsP3HhyQu38X2wk"
  },
  {
    songId: "SID-20",
    artistId: "AID-3",
    title: "Bad Blood",
    year: "2015",
    duration: 244,
    url: "https://www.youtube.com/watch?v=QcIy9NiNbmo",
    explicit: false,
    imageUrl: "https://live.staticflickr.com/4890/44408595830_12f9b4884c_b.jpg"
  }
];
